/**
 * 主入口 — App UI 层
 * 串联 Player、Lyrics、Playlist，负责 DOM 渲染和事件处理
 * 深蓝星空 Glassmorphism 主题
 */
const App = {
  currentView: 'player',
  searchKeyword: '',

  // ============ 初始化 ============
  init() {
    this._cacheDom();
    this._bindPlayerEvents();
    this._bindUIEvents();
    this._renderPlaylist();
    this._updateFavCount();
    this._showToast('薛之谦音乐播放器已就绪');
  },

  _cacheDom() {
    this.$coverContainer = document.getElementById('coverContainer');
    this.$songTitle = document.getElementById('songTitle');
    this.$songAlbum = document.getElementById('songAlbum');
    this.$progressBar = document.getElementById('progressBar');
    this.$progressFill = document.getElementById('progressFill');
    this.$currentTime = document.getElementById('currentTime');
    this.$totalTime = document.getElementById('totalTime');
    this.$btnPlay = document.getElementById('btnPlay');
    this.$btnPrev = document.getElementById('btnPrev');
    this.$btnNext = document.getElementById('btnNext');
    this.$btnMode = document.getElementById('btnMode');
    this.$btnLike = document.getElementById('btnLike');
    this.$lyricsContainer = document.getElementById('lyricsContainer');
    this.$iconPlay = this.$btnPlay?.querySelector('.icon-play');
    this.$iconPause = this.$btnPlay?.querySelector('.icon-pause');
    this.$playerBar = document.getElementById('playerBar');
    this.$barCover = document.getElementById('barCover');
    this.$barTitle = document.getElementById('barTitle');
    this.$barPlayBtn = document.getElementById('barPlayBtn');
    this.$barProgress = document.getElementById('barProgress');
    this.$playlistInner = document.getElementById('playlistInner');
    this.$playlistView = document.getElementById('playlistView');
    this.$favoritesView = document.getElementById('favoritesView');
    this.$playerView = document.getElementById('playerView');
    this.$tabs = document.querySelectorAll('.tab');
    this.$searchInput = document.getElementById('searchInput');
    this.$toast = document.getElementById('toast');
  },

  // ============ Player 事件 ============
  _bindPlayerEvents() {
    player.on('play', () => this._onPlay());
    player.on('pause', () => this._onPause());
    player.on('timeupdate', p => this._onTimeUpdate(p));
    player.on('songchange', s => this._onSongChange(s));
    player.on('error', d => this._showToast(d.message || '音频加载失败'));
    player.on('loadstart', () => this._setPlayingState(false));
    player.on('canplay', () => { if (player.isPlaying) this._setPlayingState(true); });
  },

  // ============ UI 事件 ============
  _bindUIEvents() {
    this.$btnPlay.addEventListener('click', () => {
      if (player.currentIndex < 0) player.play(0);
      else player.toggle();
    });
    this.$btnPrev.addEventListener('click', () => player.prev());
    this.$btnNext.addEventListener('click', () => player.next());
    this.$btnMode.addEventListener('click', () => {
      const mode = player.cycleMode();
      this.$btnMode.textContent = player.getModeLabel();
      this._showToast({loop:'列表循环',single:'单曲循环',shuffle:'随机播放'}[mode]);
    });
    this.$btnLike.addEventListener('click', () => {
      const song = player.getCurrentSong();
      if (!song) return;
      const liked = playlist.toggle(song.id);
      this._updateLikeBtn(song.id);
      this._updateFavCount();
      this._showToast(liked ? '已收藏' : '已取消收藏');
      if (this.currentView === 'favorites') this._renderFavorites();
    });
    this.$progressBar.addEventListener('input', () => player.seekPercent(this.$progressBar.value));
    this.$playerBar.addEventListener('click', (e) => {
      if (!e.target.closest('.player-bar-btn')) this.switchView('player');
    });
    this.$barPlayBtn.addEventListener('click', (e) => { e.stopPropagation(); player.toggle(); });
    this.$tabs.forEach(tab => tab.addEventListener('click', () => this.switchView(tab.dataset.view)));
    if (this.$searchInput) {
      this.$searchInput.addEventListener('input', () => { this.searchKeyword = this.$searchInput.value; this._renderPlaylist(); });
      this.$searchInput.addEventListener('focus', () => this.switchView('playlist'));
    }
    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;
      const map = { Space: ()=>{e.preventDefault();player.toggle();}, ArrowLeft: ()=>{e.preventDefault();player.prev();},
        ArrowRight: ()=>{e.preventDefault();player.next();}, ArrowUp: ()=>{e.preventDefault();player.setVolume(Math.min(1,player.volume+0.1));},
        ArrowDown: ()=>{e.preventDefault();player.setVolume(Math.max(0,player.volume-0.1));} };
      if (map[e.code]) map[e.code]();
    });
  },

  // ============ 播放状态 ============
  _setPlayingState(playing) {
    if (this.$iconPlay && this.$iconPause) {
      this.$iconPlay.style.display = playing ? 'none' : '';
      this.$iconPause.style.display = playing ? '' : 'none';
    }
    if (this.$barPlayBtn) {
      this.$barPlayBtn.querySelector('svg').innerHTML = playing
        ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'
        : '<path d="M8 5v14l11-7z"/>';
    }
  },
  _onPlay() { this._setPlayingState(true); this.$coverContainer.classList.add('playing'); this.$coverContainer.classList.remove('paused'); this.$playerBar.classList.remove('hidden'); },
  _onPause() { this._setPlayingState(false); this.$coverContainer.classList.add('paused'); this.$coverContainer.classList.remove('playing'); },

  _onSongChange(song) {
    if (!song) return;
    this.$songTitle.textContent = song.title;
    this.$songAlbum.textContent = `${song.album}  ${song.year}  ${song.duration}`;
    this.$barTitle.textContent = `${song.title} — 薛之谦`;
    this._updateCover(song);
    this._updateLikeBtn(song.id);
    this._renderLyricsPlaceholder();
    this._highlightCurrentSong();
    this.$playerBar.classList.remove('hidden');
    document.title = `${song.title} — 薛之谦  音乐播放器`;
    lyrics.load(song).then(() => { if (player.getCurrentSong()?.id === song.id) this._renderLyrics(); });
  },

  _onTimeUpdate(p) {
    if (!p.duration) return;
    this.$progressBar.value = p.percent;
    if (this.$progressFill) this.$progressFill.style.width = p.percent + '%';
    this.$barProgress.style.width = p.percent + '%';
    this.$currentTime.textContent = this._fmt(p.currentTime);
    this.$totalTime.textContent = this._fmt(p.duration);
    const idx = lyrics.sync(p.currentTime);
    if (idx >= 0) this._highlightLyric(idx);
  },

  // ============ 封面 ============
  _updateCover(song) {
    this.$coverContainer.innerHTML = '';
    if (song.cover) {
      const img = document.createElement('img'); img.className = 'cover-disc';
      img.src = song.cover; img.alt = song.title;
      img.onerror = () => this._renderPlaceholderCover();
      this.$coverContainer.appendChild(img);
      this.$barCover.src = song.cover; this.$barCover.style.display = '';
    } else {
      this._renderPlaceholderCover();
      this.$barCover.style.display = 'none';
    }
  },
  _renderPlaceholderCover() {
    const div = document.createElement('div'); div.className = 'cover-placeholder cover-disc';
    div.innerHTML = '<div class="cover-inner"><span class="cover-emoji"></span><span class="cover-text">薛之谦</span></div>';
    this.$coverContainer.appendChild(div);
  },

  // ============ 歌词 ============
  _renderLyricsPlaceholder() { this.$lyricsContainer.innerHTML = '<div class="lyrics-empty">歌词加载中...</div>'; },
  _renderLyrics() {
    if (!lyrics.lyrics.length) { this.$lyricsContainer.innerHTML = '<div class="lyrics-empty">暂无歌词</div>'; return; }
    this.$lyricsContainer.innerHTML = lyrics.lyrics.map((l, i) => `<div class="lyric-line" data-index="${i}">${l.text}</div>`).join('');
  },
  _highlightLyric(idx) {
    this.$lyricsContainer.querySelectorAll('.lyric-line').forEach((el, i) => {
      el.classList.toggle('active', i === idx);
      el.classList.toggle('past', i < idx);
      if (i === idx) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  },

  // ============ 收藏按钮 ============
  _updateLikeBtn(songId) {
    const liked = playlist.isFavorite(songId);
    this.$btnLike.classList.toggle('liked', liked);
    const svg = this.$btnLike?.querySelector('.icon-heart');
    if (svg) { svg.setAttribute('fill', liked ? '#E74C3C' : 'none'); svg.setAttribute('stroke', liked ? 'none' : 'currentColor'); }
    const span = this.$btnLike?.querySelector('span');
    if (span) span.textContent = liked ? '已收藏' : '收藏';
  },
  _updateFavCount() {
    const el = document.querySelector('.tab[data-view="favorites"] .tab-count');
    if (el) el.textContent = playlist.getCount();
  },

  // ============ 歌单渲染 ============
  _renderPlaylist() {
    const songs = Search.byKeyword(this.searchKeyword);
    const grouped = {};
    songs.forEach(s => { const k = s.album + '_' + s.year; (grouped[k] ||= []).push(s); });

    let html = '';
    for (const [, albumSongs] of Object.entries(grouped)) {
      const a = albumSongs[0];
      html += `<div class="album-group"><div class="album-header"><span class="album-year">${a.year}</span><span class="album-name">${a.album}</span><span class="album-count">${albumSongs.length} 首</span></div><ul class="song-list">`;
      albumSongs.forEach(s => {
        const active = player.currentIndex >= 0 && SONGS[player.currentIndex]?.id === s.id;
        html += `<li class="song-item${active?' playing':''}" data-song-id="${s.id}"><span class="song-item-info"><span class="song-item-title">${s.title}</span><span class="song-item-meta">${s.feat?'feat. '+s.feat+' ':''}${s.duration}</span></span>${active?'<span class="song-item-playing-icon"></span>':''}<span class="song-item-duration">${s.duration}</span></li>`;
      });
      html += '</ul></div>';
    }
    const target = this.$playlistInner || this.$playlistView;
    target.innerHTML = html || '<div class="favorites-empty"><div class="favorites-empty-icon"></div><div class="favorites-empty-text">未找到歌曲</div></div>';
    target.querySelectorAll('.song-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = SONGS.findIndex(s => s.id === parseInt(item.dataset.songId));
        if (idx >= 0) { player.play(idx); this.switchView('player'); }
      });
    });
  },

  // ============ 收藏视图 ============
  _renderFavorites() {
    const fav = playlist.getSongs();
    if (!fav.length) { this.$favoritesView.innerHTML = '<div class="favorites-empty"><div class="favorites-empty-icon"></div><div class="favorites-empty-text">收藏列表为空</div><div class="favorites-empty-hint">在歌曲列表中点击收藏即可</div></div>'; return; }
    let html = '<ul class="song-list">';
    fav.forEach(s => {
      const active = player.currentIndex >= 0 && SONGS[player.currentIndex]?.id === s.id;
      html += `<li class="song-item${active?' playing':''}" data-song-id="${s.id}"><span class="song-item-info"><span class="song-item-title">${s.title}</span><span class="song-item-meta">${s.album}  ${s.duration}</span></span>${active?'<span class="song-item-playing-icon"></span>':''}<span class="song-item-duration">${s.duration}</span></li>`;
    });
    html += '</ul>';
    this.$favoritesView.innerHTML = html;
    this.$favoritesView.querySelectorAll('.song-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = SONGS.findIndex(s => s.id === parseInt(item.dataset.songId));
        if (idx >= 0) { player.play(idx); this.switchView('player'); }
      });
    });
  },

  _highlightCurrentSong() {
    const song = player.getCurrentSong();
    if (!song) return;
    document.querySelectorAll('.song-item').forEach(el => {
      const match = parseInt(el.dataset.songId) === song.id;
      el.classList.toggle('playing', match);
      if (match && !el.querySelector('.song-item-playing-icon')) { const s = document.createElement('span'); s.className = 'song-item-playing-icon'; s.textContent = ''; el.appendChild(s); }
      if (!match) { const icon = el.querySelector('.song-item-playing-icon'); if (icon) icon.remove(); }
    });
  },

  // ============ Tab 切换 ============
  switchView(view) {
    this.currentView = view;
    this.$tabs.forEach(t => t.classList.toggle('active', t.dataset.view === view));
    this.$playerView.classList.toggle('active', view === 'player');
    this.$playlistView.classList.toggle('active', view === 'playlist');
    this.$favoritesView.classList.toggle('active', view === 'favorites');
    if (view === 'playlist') this._renderPlaylist();
    if (view === 'favorites') this._renderFavorites();
  },

  // ============ Toast ============
  _showToast(msg) {
    if (this._timer) clearTimeout(this._timer);
    this.$toast.textContent = msg;
    this.$toast.classList.add('show');
    this._timer = setTimeout(() => this.$toast.classList.remove('show'), 2000);
  },

  _fmt(s) { const m = Math.floor(s/60), sec = Math.floor(s%60); return m + ':' + String(sec).padStart(2,'0'); },
};

document.addEventListener('DOMContentLoaded', () => App.init());
