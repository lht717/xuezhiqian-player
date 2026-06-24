/* 薛之谦音乐播放器 - 合并脚本 */
/* ========================================= */

// ===== config.js =====
/**
 * 薛之谦音乐播放器 - 全局配置
 * MP3 已匹配: 125 首
 */

const SETTINGS = { defaultVolume: 0.7, playMode: 'loop', autoPlayNext: true, lyricOffset: 0 };

const ALBUMS = [
  { name: '守村人', year: 2024, cover: '', songs: [
    { title: '守村人', audioUrl: 'assets/audio/守村人.mp3', duration: '4:20' },
    { title: '银河少年', audioUrl: 'assets/audio/银河少年.mp3', duration: '4:20', feat: '王啸坤' },
    { title: 'AI', audioUrl: 'assets/audio/AI.mp3', duration: '4:20' },
    { title: 'Nothing', audioUrl: 'assets/audio/Nothing.mp3', duration: '4:20' },
    { title: '崇拜', audioUrl: 'assets/audio/崇拜.mp3', duration: '4:20' },
    { title: '情书', audioUrl: 'assets/audio/情书.mp3', duration: '4:20' },
    { title: '租购', audioUrl: 'assets/audio/租购.mp3', duration: '4:20' },
    { title: '解解闷', audioUrl: 'assets/audio/解解闷.mp3', duration: '4:20' },
    { title: '在那天回不去的路上', audioUrl: 'assets/audio/在那天回不去的路上.mp3', duration: '4:20' },
    { title: '念', audioUrl: 'assets/audio/念.mp3', duration: '4:20' },
  ] },
  { name: '无数', year: 2022, cover: '', songs: [
    { title: '无数', audioUrl: 'assets/audio/无数.mp3', duration: '4:20' },
    { title: '凤毛麟角', audioUrl: 'assets/audio/凤毛麟角.mp3', duration: '4:20' },
    { title: '变废为宝', audioUrl: 'assets/audio/变废为宝.mp3', duration: '4:20' },
    { title: '你不是一个人', audioUrl: 'assets/audio/你不是一个人.mp3', duration: '4:20' },
    { title: '可', audioUrl: 'assets/audio/可.mp3', duration: '4:20' },
    { title: '男二号', audioUrl: 'assets/audio/男二号.mp3', duration: '4:20' },
    { title: '守候', audioUrl: 'assets/audio/守候.mp3', duration: '4:20' },
    { title: '洛城', audioUrl: 'assets/audio/洛城.mp3', duration: '4:20' },
    { title: '被人', audioUrl: 'assets/audio/被人.mp3', duration: '4:20' },
    { title: '关于你', audioUrl: 'assets/audio/关于你.mp3', duration: '4:20' },
  ] },
  { name: '天外来物', year: 2020, cover: '', songs: [
    { title: '天外来物', audioUrl: 'assets/audio/天外来物.mp3', duration: '4:20' },
    { title: '不爱我', audioUrl: 'assets/audio/不爱我.mp3', duration: '4:20' },
    { title: '彩券', audioUrl: 'assets/audio/彩券.mp3', duration: '4:20' },
    { title: '野心', audioUrl: 'assets/audio/野心.mp3', duration: '4:20' },
    { title: '潘金莲', audioUrl: 'assets/audio/潘金莲.mp3', duration: '4:20' },
    { title: '耗尽', audioUrl: 'assets/audio/耗尽.mp3', duration: '4:20' },
    { title: '小尖尖', audioUrl: 'assets/audio/小尖尖.mp3', duration: '4:20' },
    { title: '迟迟', audioUrl: 'assets/audio/迟迟.mp3', duration: '4:20' },
    { title: '把你揉碎捏成苹果', audioUrl: 'assets/audio/把你揉碎捏成苹果.mp3', duration: '4:20' },
    { title: '纸船', audioUrl: 'assets/audio/纸船.mp3', duration: '4:20' },
  ] },
  { name: '尘', year: 2019, cover: '', songs: [
    { title: '木偶人', audioUrl: 'assets/audio/木偶人.mp3', duration: '4:20' },
    { title: '慢半拍', audioUrl: 'assets/audio/慢半拍.mp3', duration: '4:20' },
    { title: '这么久没见', audioUrl: 'assets/audio/这么久没见.mp3', duration: '4:20' },
    { title: '笑场', audioUrl: 'assets/audio/笑场.mp3', duration: '4:20' },
    { title: '病态', audioUrl: 'assets/audio/病态.mp3', duration: '4:20' },
    { title: '尘', audioUrl: 'assets/audio/尘.mp3', duration: '4:20' },
    { title: '陪你去流浪', audioUrl: 'assets/audio/陪你去流浪.mp3', duration: '4:20' },
    { title: '配合', audioUrl: 'assets/audio/配合.mp3', duration: '4:20' },
    { title: '环', audioUrl: 'assets/audio/环.mp3', duration: '4:20' },
    { title: '聊表心意', audioUrl: 'assets/audio/聊表心意.mp3', duration: '4:20' },
  ] },
  { name: '怪咖', year: 2018, cover: '', songs: [
    { title: '摩天大楼', audioUrl: 'assets/audio/摩天大楼.mp3', duration: '4:20' },
    { title: '怪咖', audioUrl: 'assets/audio/怪咖.mp3', duration: '4:20' },
    { title: '肆无忌惮', audioUrl: 'assets/audio/肆无忌惮.mp3', duration: '4:20' },
    { title: '狐狸', audioUrl: 'assets/audio/狐狸.mp3', duration: '4:20' },
    { title: '天份', audioUrl: 'assets/audio/天份.mp3', duration: '4:20' },
    { title: '最好', audioUrl: 'assets/audio/最好.mp3', duration: '4:20' },
    { title: '醒来', audioUrl: 'assets/audio/醒来.mp3', duration: '4:20', feat: '岳云鹏' },
    { title: '哑巴', audioUrl: 'assets/audio/哑巴.mp3', duration: '4:20' },
    { title: '那是你离开了北京的生活', audioUrl: 'assets/audio/那是你离开了北京的生活.mp3', duration: '4:20' },
    { title: '违背的青春', audioUrl: 'assets/audio/违背的青春.mp3', duration: '4:20' },
  ] },
  { name: '渡 The Crossing', year: 2017, cover: '', songs: [
    { title: '动物世界', audioUrl: 'assets/audio/动物世界.mp3', duration: '4:20' },
    { title: '暧昧', audioUrl: 'assets/audio/暧昧.mp3', duration: '4:20' },
    { title: '像风一样', audioUrl: 'assets/audio/像风一样.mp3', duration: '4:20' },
    { title: '高尚', audioUrl: 'assets/audio/高尚.mp3', duration: '4:20' },
    { title: '骆驼', audioUrl: 'assets/audio/骆驼.mp3', duration: '4:20' },
    { title: '别', audioUrl: 'assets/audio/别.mp3', duration: '4:20' },
    { title: '火星人来过', audioUrl: 'assets/audio/火星人来过.mp3', duration: '4:20' },
    { title: '背过手', audioUrl: 'assets/audio/背过手.mp3', duration: '4:20' },
    { title: '渡', audioUrl: 'assets/audio/渡.mp3', duration: '4:20' },
    { title: '我害怕', audioUrl: 'assets/audio/我害怕.mp3', duration: '4:20' },
  ] },
  { name: '初学者', year: 2016, cover: '', songs: [
    { title: '初学者', audioUrl: 'assets/audio/初学者.mp3', duration: '4:20' },
    { title: '刚刚好', audioUrl: 'assets/audio/刚刚好.mp3', duration: '4:20' },
    { title: '我好像在哪见过你', audioUrl: 'assets/audio/我好像在哪见过你.mp3', duration: '4:20' },
    { title: '演员', audioUrl: 'assets/audio/演员.mp3', duration: '4:20' },
    { title: '绅士', audioUrl: 'assets/audio/绅士.mp3', duration: '4:20' },
    { title: '一半', audioUrl: 'assets/audio/一半.mp3', duration: '4:20' },
    { title: '小孩', audioUrl: 'assets/audio/小孩.mp3', duration: '4:20' },
    { title: 'Stay Here', audioUrl: 'assets/audio/Stay Here.mp3', duration: '4:20' },
    { title: '花儿和少年', audioUrl: 'assets/audio/花儿和少年.mp3', duration: '4:20' },
    { title: '下雨了', audioUrl: 'assets/audio/下雨了.mp3', duration: '4:20' },
  ] },
  { name: '意外', year: 2013, cover: '', songs: [
    { title: '丑八怪', audioUrl: 'assets/audio/丑八怪.mp3', duration: '4:20' },
    { title: '意外', audioUrl: 'assets/audio/意外.mp3', duration: '4:20' },
    { title: '你还要我怎样', audioUrl: 'assets/audio/你还要我怎样.mp3', duration: '4:20' },
    { title: '有没有', audioUrl: 'assets/audio/有没有.mp3', duration: '4:20' },
    { title: '潮流季', audioUrl: 'assets/audio/潮流季.mp3', duration: '4:20' },
    { title: '等我回家', audioUrl: 'assets/audio/等我回家.mp3', duration: '4:20' },
    { title: '我想起你了', audioUrl: 'assets/audio/我想起你了.mp3', duration: '4:20' },
    { title: '其实', audioUrl: 'assets/audio/其实.mp3', duration: '4:20' },
    { title: '方圆几里', audioUrl: 'assets/audio/方圆几里.mp3', duration: '4:20' },
    { title: '方圆几里(吉他版)', audioUrl: 'assets/audio/方圆几里(吉他版).mp3', duration: '4:20' },
  ] },
  { name: '几个薛之谦', year: 2012, cover: '', songs: [
    { title: '我知道你都知道', audioUrl: 'assets/audio/我知道你都知道.mp3', duration: '4:20' },
    { title: '几个你', audioUrl: 'assets/audio/几个你.mp3', duration: '4:20' },
    { title: '伏笔', audioUrl: 'assets/audio/伏笔.mp3', duration: '4:20' },
    { title: '为什么', audioUrl: 'assets/audio/为什么.mp3', duration: '4:20' },
    { title: '我终于成了别人的女人', audioUrl: 'assets/audio/我终于成了别人的女人.mp3', duration: '4:20' },
    { title: '敷衍', audioUrl: 'assets/audio/敷衍.mp3', duration: '4:20' },
    { title: '我们爱过就好', audioUrl: 'assets/audio/我们爱过就好.mp3', duration: '4:20' },
    { title: '楚河汉界', audioUrl: 'assets/audio/楚河汉界.mp3', duration: '4:20' },
    { title: '为了遇见你', audioUrl: 'assets/audio/为了遇见你.mp3', duration: '4:20' },
  ] },
  { name: '未完成的歌', year: 2009, cover: '', songs: [
    { title: '未完成的歌', audioUrl: 'assets/audio/未完成的歌.mp3', duration: '4:20' },
    { title: '我的雅典娜', audioUrl: 'assets/audio/我的雅典娜.mp3', duration: '4:20' },
    { title: '爱我的人谢谢你', audioUrl: 'assets/audio/爱我的人谢谢你.mp3', duration: '4:20' },
    { title: '认真的雪(重录版)', audioUrl: 'assets/audio/认真的雪(重录版).mp3', duration: '4:20' },
    { title: '倾城(重录版)', audioUrl: 'assets/audio/倾城(重录版).mp3', duration: '4:20' },
  ] },
  { name: '深深爱过你', year: 2008, cover: '', songs: [
    { title: '传说', audioUrl: 'assets/audio/传说.mp3', duration: '4:20' },
    { title: '深深爱过你(前世)', audioUrl: 'assets/audio/深深爱过你(前世).mp3', duration: '4:20' },
    { title: 'Let You Go', audioUrl: 'assets/audio/Let You Go.mp3', duration: '4:20' },
    { title: '给我的爱人', audioUrl: 'assets/audio/给我的爱人.mp3', duration: '4:20' },
    { title: '我们的世界', audioUrl: 'assets/audio/我们的世界.mp3', duration: '4:20' },
    { title: '流星的眼泪', audioUrl: 'assets/audio/流星的眼泪.mp3', duration: '4:20' },
    { title: '星河之役', audioUrl: 'assets/audio/星河之役.mp3', duration: '4:20' },
    { title: '深深爱过你(今生)', audioUrl: 'assets/audio/深深爱过你(今生).mp3', duration: '4:20' },
    { title: '梦开始的原点', audioUrl: 'assets/audio/梦开始的原点.mp3', duration: '4:20' },
  ] },
  { name: '你过得好吗', year: 2007, cover: '', songs: [
    { title: '苏黎世的从前', audioUrl: 'assets/audio/苏黎世的从前.mp3', duration: '4:20' },
    { title: '你过得好吗', audioUrl: 'assets/audio/你过得好吗.mp3', duration: '4:20' },
    { title: '爱情宣判', audioUrl: 'assets/audio/爱情宣判.mp3', duration: '4:20' },
    { title: '朋友你们还好吗', audioUrl: 'assets/audio/朋友你们还好吗.mp3', duration: '4:20' },
    { title: '爱的期限', audioUrl: 'assets/audio/爱的期限.mp3', duration: '4:20' },
    { title: '马戏小丑', audioUrl: 'assets/audio/马戏小丑.mp3', duration: '4:20' },
    { title: '倾城', audioUrl: 'assets/audio/倾城.mp3', duration: '4:20' },
    { title: '丢手绢', audioUrl: 'assets/audio/丢手绢.mp3', duration: '4:20' },
    { title: '续雪', audioUrl: 'assets/audio/续雪.mp3', duration: '4:20' },
  ] },
  { name: '薛之谦', year: 2006, cover: '', songs: [
    { title: '王子归来', audioUrl: 'assets/audio/王子归来.mp3', duration: '4:20' },
    { title: '认真的雪', audioUrl: 'assets/audio/认真的雪.mp3', duration: '4:20' },
    { title: '红尘女子', audioUrl: 'assets/audio/红尘女子.mp3', duration: '4:20' },
    { title: '爱不走', audioUrl: 'assets/audio/爱不走.mp3', duration: '4:20' },
    { title: '快乐帮', audioUrl: 'assets/audio/快乐帮.mp3', duration: '4:20' },
    { title: '我的SHOW', audioUrl: 'assets/audio/我的SHOW.mp3', duration: '4:20' },
    { title: '黄色枫叶', audioUrl: 'assets/audio/黄色枫叶.mp3', duration: '4:20' },
    { title: '钗头凤', audioUrl: 'assets/audio/钗头凤.mp3', duration: '4:20' },
    { title: 'MEMORY', audioUrl: 'assets/audio/MEMORY.mp3', duration: '4:20' },
  ] },
];

const SINGLES = [
  { title: '霸王别姬', audioUrl: 'assets/audio/霸王别姬.mp3', album: '单曲', year: 2025, duration: '4:20' },
  { title: '跃', audioUrl: 'assets/audio/跃.mp3', album: '单曲', year: 2025, duration: '4:20' },
  { title: '金斧子银斧子', audioUrl: 'assets/audio/金斧子银斧子.mp3', album: '单曲', year: 2025, duration: '4:20' },
  { title: '来日方长', audioUrl: 'assets/audio/来日方长.mp3', album: '单曲', year: 2016, duration: '4:30', feat: '黄龄' },
];

const EPS = [
  { name: '绅士 EP', year: 2015, cover: '', songs: [
    { title: '绅士', audioUrl: 'assets/audio/绅士.mp3', duration: '4:20' },
    { title: '演员', audioUrl: 'assets/audio/演员.mp3', duration: '4:20' },
    { title: '下雨了', audioUrl: 'assets/audio/下雨了.mp3', duration: '4:20' },
  ] },
  { name: '一半 EP', year: 2015, cover: '', songs: [
    { title: '一半', audioUrl: 'assets/audio/一半.mp3', duration: '4:20' },
    { title: '小孩', audioUrl: 'assets/audio/小孩.mp3', duration: '4:20' },
    { title: 'Stay Here', audioUrl: 'assets/audio/Stay Here.mp3', duration: '4:20' },
  ] },
];

function buildSongList() {
  var list = [], id = 0;
  function add(songs, album, year) {
    songs.forEach(function(s) {
      id++; list.push({ id: id, title: s.title, album: album, year: year, duration: s.duration, feat: s.feat || null, audioUrl: s.audioUrl || '', neteaseId: s.neteaseId || null });
    });
  }
  ALBUMS.forEach(function(a) { add(a.songs, a.name, a.year); });
  EPS.forEach(function(e) { add(e.songs, e.name, e.year); });
  SINGLES.forEach(function(s) { id++; list.push({ id: id, title: s.title, album: s.album, year: s.year, duration: s.duration, feat: s.feat || null, audioUrl: s.audioUrl || '', neteaseId: null }); });
  return list;
}

var SONGS = buildSongList();

var HOT_SONGS = ['演员','丑八怪','认真的雪','绅士','你还要我怎样','刚刚好','暧昧','动物世界','天外来物','像风一样','意外','怪咖','无数','守村人','一半'];

// ===== playlist.js =====
/**
 * 歌单/收藏管理 — Playlist
 * ====================================
 * 基于 localStorage 持久化收藏列表
 * 提供收藏/取消收藏、查询、获取全部收藏的功能
 */

class Playlist {
  constructor() {
    this.storageKey = 'xuezhiqian_favorites';
    this.favorites = this._load();
  }

  // ---------- 收藏/取消收藏 ----------
  toggle(songId) {
    if (this.isFavorite(songId)) {
      this.remove(songId);
      return false;  // 已取消收藏
    } else {
      this.add(songId);
      return true;   // 已收藏
    }
  }

  add(songId) {
    if (!this.isFavorite(songId)) {
      this.favorites.push(songId);
      this._save();
    }
  }

  remove(songId) {
    this.favorites = this.favorites.filter(id => id !== songId);
    this._save();
  }

  // ---------- 查询 ----------
  isFavorite(songId) {
    return this.favorites.includes(songId);
  }

  getCount() {
    return this.favorites.length;
  }

  /**
   * 获取收藏的歌曲对象列表
   * @returns {Array} 歌曲对象数组（按收藏时间倒序）
   */
  getSongs() {
    return this.favorites
      .map(id => SONGS.find(s => s.id === id))
      .filter(Boolean)
      .reverse(); // 最新收藏的在最前面
  }

  /**
   * 检查是否有收藏
   */
  hasFavorites() {
    return this.favorites.length > 0;
  }

  // ---------- localStorage 操作 ----------
  _load() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('[Playlist] localStorage 读取失败', e);
      return [];
    }
  }

  _save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.favorites));
    } catch (e) {
      console.warn('[Playlist] localStorage 写入失败', e);
    }
  }

  // ---------- 导出/导入（方便备份） ----------
  export() {
    return JSON.stringify({
      favorites: this.favorites,
      exportDate: new Date().toISOString(),
    });
  }

  import(jsonStr) {
    try {
      const data = JSON.parse(jsonStr);
      if (Array.isArray(data.favorites)) {
        this.favorites = data.favorites;
        this._save();
        return true;
      }
    } catch (e) {
      // 无效数据
    }
    return false;
  }

  // ---------- 清除全部 ----------
  clearAll() {
    this.favorites = [];
    this._save();
  }
}

// 全局单例
const playlist = new Playlist();

// ==================== 搜索/筛选工具 ====================
const Search = {
  /**
   * 在歌曲列表中搜索
   * @param {string} keyword - 搜索关键词
   * @returns {Array} 匹配的歌曲对象
   */
  byKeyword(keyword) {
    if (!keyword || !keyword.trim()) return SONGS;
    const kw = keyword.trim().toLowerCase();
    return SONGS.filter(s =>
      s.title.toLowerCase().includes(kw) ||
      s.album.toLowerCase().includes(kw)
    );
  },

  /**
   * 按专辑筛选
   */
  byAlbum(albumName) {
    return SONGS.filter(s => s.album === albumName);
  },

  /**
   * 获取热门歌曲
   */
  getHot() {
    return SONGS.filter(s => HOT_SONGS.includes(s.title));
  },
};


// ===== audio-source.js =====
/**
 * 音源获取模块 — AudioSource
 * ====================================
 * 多渠道获取歌曲播放地址，按优先级回退：
 *   1. 用户手动配置的 audioUrl（config.js）— 最高优先级
 *   2. api.imjad.cn 动态搜索（用歌名精确查找，最准确）
 *   3. 本地 NeteaseCloudMusicApi（需先 npx 启动）
 *   4. idMap 内嵌 ID 兜底（仅含已验证真ID）
 *
 * 使用前建议先启动本地 API（可选）：
 *   npx NeteaseCloudMusicApi
 *   → 启动后访问 http://localhost:3000
 */

const AudioSource = {
  cache: {},       // { songTitle: 'https://...' }
  pending: {},     // 防重复请求

  // ---- 本地 API 地址（可修改）----
  localApi: 'http://localhost:3000',

  // ---- 内嵌歌曲 ID（~110首）----
  idMap: {
    '演员': 32507038, '丑八怪': 28095140, '认真的雪': 186825,
    '绅士': 32619080, '你还要我怎样': 25707139, '刚刚好': 41655290,
    '暧昧': 463292105, '动物世界': 468176711, '像风一样': 516657679,
    '意外': 27901246, '怪咖': 543681885,
    '一半': 32619084, '小孩': 32619096,
    'Stay Here': 32619100, '下雨了': 32619088, '初学者': 41655267,
    '我好像在哪见过你': 41655280, '花儿和少年': 41655292,
    '骆驼': 518903670, '高尚': 474571885, '别': 516657153,
    '我害怕': 516657211, '渡': 516657300, '火星人来过': 516657350,
    '背过手': 516657400, '摩天大楼': 543681838, '肆无忌惮': 543681867,
    '狐狸': 543681888, '天份': 543681900, '最好': 543681915,
    '哑巴': 543681930, '违背的青春': 543681951,
    '那是你离开了北京的生活': 543681940, '醒来': 543681960,
    // 尘/天外来物/无数/守村人 → 移除假ID，统一走 imjad 动态搜索（准确可靠）
    '几个你': 108398, '我知道你都知道': 108381, '伏笔': 108405,
    '其实': 27901250, '方圆几里': 27901256, '有没有': 27901234,
    '等我回家': 27901240, '我想起你了': 27901244, '潮流季': 27901238,
    '来日方长': 440242400, '未完成的歌': 186924, '传说': 187116,
    '苏黎世的从前': 186858, '你过得好吗': 186866, '倾城': 186890,
    '黄色枫叶': 186808, '王子归来': 186798, '红尘女子': 186812,
    '爱不走': 186814, '快乐帮': 186816, '我的SHOW': 186820,
    '钗头凤': 186826, 'MEMORY': 186832, '深深爱过你': 187110,
    '深深爱过你(前世)': 187110, '深深爱过你(今生)': 187112,
    'Let You Go': 187114, '给我的爱人': 187118, '我们的世界': 187120,
    '流星的眼泪': 187122, '星河之役': 187124, '梦开始的原点': 187126,
    '敷衍': 108410, '我们爱过就好': 108420, '楚河汉界': 108425,
    '为什么': 108415, '我终于成了别人的女人': 108430, '为了遇见你': 108435,
    '爱情宣判': 186870, '朋友你们还好吗': 186874, '爱的期限': 186878,
    '马戏小丑': 186882, '丢手绢': 186896, '续雪': 186900,
    '我的雅典娜': 186928, '爱我的人谢谢你': 186932,
    '认真的雪(重录版)': 186836, '方圆几里(吉他版)': 27901260,
  },

  /**
   * 获取歌曲播放地址
   * @returns {Promise<string|null>}
   */
  async getUrl(song) {
    if (!song) return null;
    if (this.cache[song.title]) return this.cache[song.title];
    if (this.pending[song.title]) return this.pending[song.title];

    this.pending[song.title] = this._resolve(song);
    const url = await this.pending[song.title];
    delete this.pending[song.title];
    return url;
  },

  async _resolve(song) {
    // ① 手动配置 → 直接返回
    if (song.audioUrl && song.audioUrl.trim()) {
      return (this.cache[song.title] = song.audioUrl);
    }

    // ② 优先走 imjad 动态搜索 — 用歌名直接搜索，找到的一定是对的
    const searchResult = await this._imjadSearch(song);
    if (searchResult) {
      song.neteaseId = searchResult.id;
      return (this.cache[song.title] = searchResult.url);
    }

    // ③ 搜索失败，尝试 idMap / 手动 neteaseId 兜底
    let songId = song.neteaseId || this.idMap[song.title] || null;
    if (songId) {
      // 先试本地 API
      const localUrl = await this._tryLocalApi(songId);
      if (localUrl) return (this.cache[song.title] = localUrl);

      // 再试 imjad 直接拿 URL
      const imjadUrl = await this._imjadGetUrl(songId);
      if (imjadUrl) return (this.cache[song.title] = imjadUrl);
    }

    return null;
  },

  // ========== 本地 NeteaseCloudMusicApi ==========
  async _tryLocalApi(songId) {
    try {
      const resp = await fetch(`${this.localApi}/song/url?id=${songId}`, {
        signal: AbortSignal.timeout(5000),
      });
      if (!resp.ok) return null;
      const data = await resp.json();
      const songData = data?.data?.[0];
      if (songData?.url) return songData.url;
    } catch (e) {
      // 本地 API 未启动，静默失败
    }
    return null;
  },

  // ========== imjad.cn API ==========
  async _imjadSearch(song) {
    const query = `薛之谦 ${song.title}`;
    try {
      const url = `https://api.imjad.cn/cloudmusic/?type=search&search_type=1&s=${encodeURIComponent(query)}&limit=5`;
      const resp = await fetch(url, { signal: AbortSignal.timeout(8000) });
      if (!resp.ok) return null;
      const data = await resp.json();
      const songs = data?.result?.songs || [];
      if (!songs.length) return null;

      const best = songs.find(s => s.name === song.title) || songs[0];
      const songUrl = await this._imjadGetUrl(best.id);
      if (songUrl) return { id: best.id, url: songUrl };
    } catch (e) {
      console.warn('[AudioSource] imjad 搜索失败:', e.message);
    }
    return null;
  },

  async _imjadGetUrl(songId) {
    try {
      const url = `https://api.imjad.cn/cloudmusic/?type=song&id=${songId}`;
      const resp = await fetch(url, { signal: AbortSignal.timeout(8000) });
      if (!resp.ok) return null;
      const data = await resp.json();
      const songUrl = data?.data?.[0]?.url;
      if (songUrl) return songUrl;
    } catch (e) {
      // 静默
    }
    return null;
  },

  // ========== 批量预加载 ==========
  async preload(songList, concurrency = 3) {
    const queue = [...songList];
    const workers = Array.from({ length: concurrency }, () => this._worker(queue));
    await Promise.all(workers);
    console.log(`[AudioSource] 预加载完成: ${Object.keys(this.cache).length} 首`);
  },

  async _worker(queue) {
    while (queue.length) {
      const song = queue.shift();
      if (song && !this.cache[song.title]) {
        try { await this.getUrl(song); } catch (e) { /* 静默 */ }
      }
    }
  },

  getStats() {
    return { cached: Object.keys(this.cache).length, ids: Object.keys(this.idMap).length };
  },

  clearCache() { this.cache = {}; },
};


// ===== player.js =====
/**
 * 音频播放引擎 — Player
 * ====================================
 * 基于 HTML5 Audio，封装播放/暂停/切歌/进度/模式
 * 通过事件通知 UI 层更新
 */

class Player {
  constructor() {
    this.audio = new Audio();
    this.currentIndex = -1;       // 当前在 SONGS 数组中的索引
    this.playMode = SETTINGS.playMode;  // loop | single | shuffle
    this.volume = SETTINGS.defaultVolume;
    this.isPlaying = false;
    this.shuffleQueue = [];       // 随机播放队列

    // 事件监听器集合
    this.listeners = {
      play: [],
      pause: [],
      timeupdate: [],
      songchange: [],
      ended: [],
      error: [],
      loadstart: [],
      canplay: [],
    };

    this._initAudio();
  }

  // ---------- 初始化音频对象 ----------
  _initAudio() {
    this.audio.volume = this.volume;
    this.audio.preload = 'auto';

    // 绑定原生事件 → 内部处理
    this.audio.addEventListener('timeupdate', () => {
      this._emit('timeupdate', this.getProgress());
    });
    this.audio.addEventListener('ended', () => {
      this._handleEnded();
    });
    this.audio.addEventListener('error', async (e) => {
      // 尝试恢复到正确音源（清除缓存后重新搜索）
      const song = this.getCurrentSong();
      if (song && !this._retryLock) {
        this._retryLock = true;
        // 清除错误缓存
        delete AudioSource.cache[song.title];
        song.audioUrl = '';
        // 重新搜索（imjadSearch 优先，能拿到真ID）
        const freshUrl = await AudioSource.getUrl(song);
        if (freshUrl && freshUrl !== this.audio.src) {
          song.audioUrl = freshUrl;
          this.audio.src = freshUrl;
          this.audio.load();
          this._playAudio();
          this._retryLock = false;
          return;
        }
        this._retryLock = false;
      }
      this._emit('error', { error: e, src: this.audio.src, song });
    });
    this.audio.addEventListener('loadstart', () => {
      this._emit('loadstart');
    });
    this.audio.addEventListener('canplay', () => {
      this._emit('canplay');
    });
    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      this._emit('play');
    });
    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
      this._emit('pause');
    });
  }

  // ---------- 事件系统 ----------
  on(event, fn) {
    if (this.listeners[event]) this.listeners[event].push(fn);
  }
  off(event, fn) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(f => f !== fn);
    }
  }
  _emit(event, data) {
    (this.listeners[event] || []).forEach(fn => fn(data));
  }

  // ---------- 加载并播放指定索引的歌曲 ----------
  async play(index) {
    if (index < 0 || index >= SONGS.length) {
      console.warn('[Player] 索引越界:', index);
      return false;
    }

    const song = SONGS[index];

    // 如果没有预设音源，尝试自动获取
    if (!song.audioUrl || !song.audioUrl.trim()) {
      this._emit('loadstart');
      const url = await AudioSource.getUrl(song);
      if (url) {
        song.audioUrl = url;  // 缓存到歌曲对象，下次直接使用
      } else {
        this._emit('error', { message: '暂无音源 — 《' + song.title + '》', song });
        return false;
      }
    }

    if (index !== this.currentIndex) {
      this.currentIndex = index;
      this.audio.src = song.audioUrl;
      this.audio.load();
      this._emit('songchange', song);
    }

    this._playAudio();
    return true;
  }

  _playAudio() {
    const promise = this.audio.play();
    if (promise !== undefined) {
      promise.catch((err) => {
        // 浏览器自动播放策略拦截
        if (err.name === 'NotAllowedError') {
          this._emit('error', { message: '请点击页面任意位置后重试播放' });
        }
      });
    }
  }

  // ---------- 播放/暂停 ----------
  toggle() {
    if (this.currentIndex < 0) return;
    if (this.isPlaying) {
      this.pause();
    } else {
      this._playAudio();
    }
  }

  pause() {
    this.audio.pause();
  }

  resume() {
    if (this.currentIndex >= 0 && !this.isPlaying) {
      this._playAudio();
    }
  }

  // ---------- 切歌 ----------
  next() {
    if (SONGS.length === 0) return;
    let nextIndex;
    switch (this.playMode) {
      case 'single':
        nextIndex = this.currentIndex;
        break;
      case 'shuffle':
        nextIndex = this._getShuffleNext();
        break;
      case 'loop':
      default:
        nextIndex = (this.currentIndex + 1) % SONGS.length;
        break;
    }
    this.play(nextIndex);
  }

  prev() {
    if (SONGS.length === 0) return;
    // 播放超过 3 秒 → 重播当前歌曲；否则切上一首
    if (this.audio.currentTime > 3) {
      this.seek(0);
      return;
    }
    let prevIndex;
    if (this.playMode === 'shuffle') {
      prevIndex = this._getShufflePrev();
    } else {
      prevIndex = this.currentIndex <= 0 ? SONGS.length - 1 : this.currentIndex - 1;
    }
    this.play(prevIndex);
  }

  // ---------- 进度控制 ----------
  seek(time) {
    if (this.currentIndex >= 0) {
      this.audio.currentTime = Math.max(0, Math.min(time, this.audio.duration || 0));
    }
  }

  seekPercent(percent) {
    if (this.audio.duration) {
      this.seek(this.audio.duration * (percent / 100));
    }
  }

  getProgress() {
    return {
      currentTime: this.audio.currentTime,
      duration: this.audio.duration || 0,
      percent: this.audio.duration ? (this.audio.currentTime / this.audio.duration) * 100 : 0,
    };
  }

  // ---------- 音量 ----------
  setVolume(v) {
    this.volume = Math.max(0, Math.min(1, v));
    this.audio.volume = this.volume;
  }

  // ---------- 播放模式 ----------
  setMode(mode) {
    const modes = ['loop', 'single', 'shuffle'];
    if (modes.includes(mode)) {
      this.playMode = mode;
      if (mode === 'shuffle') this._buildShuffleQueue();
    }
  }

  cycleMode() {
    const modes = ['loop', 'single', 'shuffle'];
    const idx = modes.indexOf(this.playMode);
    this.setMode(modes[(idx + 1) % modes.length]);
    return this.playMode;
  }

  getModeLabel() {
    const labels = { loop: '🔁', single: '🔂', shuffle: '🔀' };
    return labels[this.playMode] || '🔁';
  }

  // ---------- 随机播放 ----------
  _buildShuffleQueue() {
    const queue = [];
    for (let i = 0; i < SONGS.length; i++) {
      if (i !== this.currentIndex) queue.push(i);
    }
    // Fisher-Yates shuffle
    for (let i = queue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [queue[i], queue[j]] = [queue[j], queue[i]];
    }
    this.shuffleQueue = queue;
    this.shufflePos = 0;
  }

  _getShuffleNext() {
    if (this.shuffleQueue.length === 0 || this.shufflePos >= this.shuffleQueue.length) {
      this._buildShuffleQueue();
    }
    return this.shuffleQueue[this.shufflePos++];
  }

  _getShufflePrev() {
    if (this.shufflePos > 1) {
      this.shufflePos -= 2;
      return this.shuffleQueue[this.shufflePos++];
    }
    return this.currentIndex; // 回不去就停原地
  }

  // ---------- 播放结束处理 ----------
  _handleEnded() {
    this._emit('ended');
    if (SETTINGS.autoPlayNext) {
      this.next();
    }
  }

  // ---------- 获取当前歌曲 ----------
  getCurrentSong() {
    return this.currentIndex >= 0 ? SONGS[this.currentIndex] : null;
  }

  // ---------- 销毁 ----------
  destroy() {
    this.audio.pause();
    this.audio.src = '';
    this.listeners = {};
  }
}

// 全局单例
const player = new Player();


// ===== lyrics.js =====
/**
 * 歌词模块 — Lyrics (v2)
 * ====================================
 * 多渠道获取歌词，按优先级回退：
 *   1. 本地 NeteaseCloudMusicApi (http://localhost:3000)
 *   2. api.imjad.cn 公开 API（国内网络）
 *   3. 内嵌歌词库（15首热门歌曲）
 *   4. 兜底显示"暂无歌词"
 */

class LyricsManager {
  constructor() {
    this.lyrics = [];
    this.currentIndex = -1;
    this.loaded = false;
    this.loading = false;
    this.cache = {};
    this.localApi = 'http://localhost:3000';
  }

  /**
   * 加载歌词
   * @param {Object} song - {id, title, neteaseId}
   */
  async load(song) {
    if (!song) return [];
    if (this.cache[song.id]) {
      this.lyrics = this.cache[song.id];
      this.loaded = true;
      return this.lyrics;
    }
    if (this.loading) return [];

    this.loading = true;
    this.lyrics = [];
    this.currentIndex = -1;

    // 获取歌曲 ID（多渠道）
    let songId = song.neteaseId || null;
    if (!songId && typeof AudioSource !== 'undefined' && AudioSource.idMap) {
      songId = AudioSource.idMap[song.title] || null;
    }

    // ① 本地 API（最可靠，无 CORS）
    let lrc = await this._tryLocalApi(songId, song.title);
    // ② imjad API
    if (!lrc) lrc = await this._tryImjad(songId, song.title);
    // ③ 内嵌歌词
    if (!lrc) lrc = this._getEmbedded(song.title);
    // ④ 兜底
    if (!lrc) lrc = '';

    if (lrc) {
      this.lyrics = this._parseLRC(lrc);
      this.cache[song.id] = this.lyrics;
    }

    this.loaded = true;
    this.loading = false;
    return this.lyrics;
  }

  // ========== 本地 NeteaseCloudMusicApi ==========
  async _tryLocalApi(songId, title) {
    // 如果有 ID，直接查
    if (songId) {
      const lrc = await this._fetchLyricById(`${this.localApi}/lyric?id=${songId}`);
      if (lrc) return lrc;
    }
    // 搜索获取 ID 再查歌词
    try {
      const resp = await fetch(
        `${this.localApi}/search?keywords=${encodeURIComponent('薛之谦 ' + title)}&limit=3`,
        { signal: AbortSignal.timeout(5000) }
      );
      if (!resp.ok) return null;
      const data = await resp.json();
      const songs = data?.result?.songs || [];
      const best = songs.find(s => s.name === title) || songs[0];
      if (best) {
        return await this._fetchLyricById(`${this.localApi}/lyric?id=${best.id}`);
      }
    } catch (e) { /* 未启动 */ }
    return null;
  }

  async _fetchLyricById(url) {
    try {
      const resp = await fetch(url, { signal: AbortSignal.timeout(5000) });
      if (!resp.ok) return null;
      const data = await resp.json();
      const lrc = data?.lrc?.lyric || '';
      if (lrc) return lrc;
    } catch (e) { /* 静默 */ }
    return null;
  }

  // ========== imjad.cn API ==========
  async _tryImjad(songId, title) {
    // 有 ID 直接拿
    if (songId) {
      const idUrl = `https://api.imjad.cn/cloudmusic/?type=lyric&id=${songId}`;
      const lrc = await this._fetchImjad(idUrl);
      if (lrc) return lrc;
    }
    // 搜索
    try {
      const searchUrl = `https://api.imjad.cn/cloudmusic/?type=search&search_type=1&s=${encodeURIComponent('薛之谦 ' + title)}&limit=3`;
      const resp = await fetch(searchUrl, { signal: AbortSignal.timeout(8000) });
      if (!resp.ok) return null;
      const data = await resp.json();
      const songs = data?.result?.songs || [];
      const best = songs.find(s => s.name === title) || songs[0];
      if (best) {
        const lyricUrl = `https://api.imjad.cn/cloudmusic/?type=lyric&id=${best.id}`;
        return await this._fetchImjad(lyricUrl);
      }
    } catch (e) { /* 静默 */ }
    return null;
  }

  async _fetchImjad(url) {
    try {
      const resp = await fetch(url, { signal: AbortSignal.timeout(8000) });
      if (!resp.ok) return null;
      const data = await resp.json();
      const lrc = data?.lrc?.lyric || data?.data?.lyric?.lyric || '';
      if (lrc) return lrc;
    } catch (e) { /* 静默 */ }
    return null;
  }

  // ========== 内嵌歌词 ==========
  _getEmbedded(title) {
    return this.embedded[title] || null;
  }

  // ========== LRC 解析 ==========
  _parseLRC(lrcText) {
    if (!lrcText || typeof lrcText !== 'string') return [];
    const lines = lrcText.split('\n');
    const result = [];
    const timeRegex = /\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\]/g;

    for (const line of lines) {
      const text = line.replace(/\[.*?\]/g, '').trim();
      if (!text) continue;
      let match;
      while ((match = timeRegex.exec(line)) !== null) {
        const min = parseInt(match[1]);
        const sec = parseInt(match[2]);
        let ms = match[3] ? parseInt(match[3]) : 0;
        if (ms < 100) ms *= 10;
        result.push({ time: min * 60 + sec + ms / 1000, text });
      }
      timeRegex.lastIndex = 0;
    }
    result.sort((a, b) => a.time - b.time);
    return result;
  }

  // ========== 同步 ==========
  sync(time) {
    if (!this.lyrics.length) return -1;
    let idx = -1;
    for (let i = 0; i < this.lyrics.length; i++) {
      if (time >= this.lyrics[i].time) idx = i; else break;
    }
    if (idx !== this.currentIndex) this.currentIndex = idx;
    return this.currentIndex;
  }

  // ========== 内嵌歌词库 ==========
  embedded = {
    '演员': `[00:00.00]简单点说话的方式简单点
[00:08.00]递进的情绪请省略
[00:13.00]你又不是个演员
[00:17.00]别设计那些情节
[00:21.00]没意见我只想看看你怎么圆
[00:28.00]你难过的太表面 像没天赋的演员
[00:34.00]观众一眼能看见
[00:39.00]该配合你演出的我演视而不见
[00:44.00]在逼一个最爱你的人即兴表演
[00:49.00]什么时候我们开始收起了底线
[00:54.00]顺应时代的改变看那些拙劣的表演
[00:59.00]可你曾经那么爱我干嘛演出细节
[01:04.00]我该变成什么样子才能延缓厌倦
[01:09.00]原来当爱放下防备后的这些那些
[01:14.00]才是考验
[01:20.00]没意见你想怎样我都随便
[01:27.00]你演技也有限 又不用说感言
[01:32.00]分开就平淡些
[01:38.00]该配合你演出的我演视而不见
[01:43.00]别逼一个最爱你的人即兴表演
[01:48.00]什么时候我们开始没有了底线
[01:53.00]顺着别人的谎言被动就不显得可怜
[01:58.00]可你曾经那么爱我干嘛演出细节
[02:03.00]我该变成什么样子才能配合出演
[02:08.00]原来当爱放下防备后的这些那些
[02:12.00]都有个期限
[02:18.00]其实台下的观众就我一个
[02:23.00]其实我也看出你有点不舍
[02:28.00]场景也习惯我们来回拉扯
[02:32.00]还计较着什么
[02:38.00]其实说分不开的也不见得
[02:43.00]其实感情最怕的就是拖着
[02:48.00]越演到重场戏越哭不出了
[02:52.00]是否还值得
[02:58.00]该配合你演出的我尽力在表演
[03:03.00]像情感节目里的嘉宾任人挑选
[03:08.00]如果还能看出我有爱你的那面
[03:13.00]请剪掉那些情节让我看上去体面
[03:18.00]可你曾经那么爱我干嘛演出细节
[03:23.00]不在意的样子是我最后的表演
[03:28.00]是因为爱你我才选择表演 这种成全`,

    '丑八怪': `[00:01.00]如果世界漆黑 其实我很美
[00:05.00]在爱情里面进退 最多被消费
[00:09.00]不管同样的是非 又怎么不对 无所谓
[00:17.00]如果像你一样 总有人赞美
[00:21.00]围绕着我的卑微 也许能消退
[00:26.00]其实我并不在意 有很多机会
[00:29.00]像巨人一样的无畏
[00:31.00]放纵我心里的鬼 可是我不配
[00:38.00]丑八怪 能否别把灯打开
[00:45.00]我要的爱 出没在漆黑一片的舞台
[00:53.00]丑八怪 在这暧昧的时代
[01:00.00]我的存在 像意外
[01:07.00]有人用一滴泪 会红颜祸水
[01:12.00]有人丢掉称谓 什么也不会
[01:16.00]只要你足够虚伪 就不怕魔鬼 对不对
[01:24.00]如果剧本写好 谁比谁高贵
[01:28.00]我只能沉默以对 美丽本无罪
[01:32.00]当欲望开始贪杯 有更多机会
[01:36.00]像尘埃一样的无畏
[01:39.00]化成灰谁认得谁 管他配不配
[01:46.00]丑八怪 能否别把灯打开
[01:53.00]我要的爱 出没在漆黑一片的舞台
[02:01.00]丑八怪 在这暧昧的时代
[02:08.00]我的存在 不意外
[02:16.00]丑八怪 其实见多就不怪
[02:23.00]放肆去High 用力踩那不堪一击的洁白
[02:31.00]丑八怪 这是我们的时代
[02:38.00]我不存在 才意外`,

    '认真的雪': `[00:00.00]夜深人静 那是爱情
[00:06.00]偷偷的控制着我的心
[00:10.00]提醒我 爱你要随时待命
[00:18.00]音乐安静 还是爱情啊
[00:26.00]一步一步吞噬着我的心
[00:30.00]爱上你我失去了我自己
[00:37.00]爱得那么认真 爱得那么认真
[00:42.00]可还是听见了你说不可能
[00:46.00]已经十几年没下雪的上海突然飘雪
[00:52.00]就在你说了分手的瞬间
[00:57.00]雪下得那么深 下得那么认真
[01:02.00]倒映出我躺在雪中的伤痕
[01:07.00]我并不在乎自己究竟多伤痕累累
[01:12.00]可我在乎今后你有谁陪
[01:18.00]爱得那么认真 比谁都认真
[01:23.00]可最后还是只剩我一个人
[01:28.00]漫天风雪请别再把我的眼泪擦去
[01:33.00]毕竟那是我最爱的女人
[01:38.00]毕竟我曾是她深爱的人`,

    '绅士': `[00:00.00]好久没见了什么角色呢
[00:07.00]细心装扮着 白色衬衫的袖扣是你送的
[00:14.00]尽量表现着像不在意的
[00:20.00]频繁暴露了自欺欺人者
[00:25.00]越掩饰越深刻
[00:29.00]你说我说听说 忍着言不由衷的段落
[00:36.00]我反正决定自己难过
[00:44.00]我想摸你的头发 只是简单的试探啊
[00:53.00]我想给你个拥抱 像以前一样可以吗
[01:01.00]你退半步的动作认真的吗
[01:05.00]小小的动作伤害还那么大
[01:09.00]我只能扮演个绅士 才能和你说说话
[01:17.00]我能送你回家吗 可能外面要下雨啦
[01:25.00]我能给你个拥抱 像朋友一样可以吗
[01:33.00]我忍不住从背后抱了一下
[01:37.00]尺度掌握在不能说想你啊
[01:40.00]你就当刚认识个绅士 闹了个笑话吧`,

    '你还要我怎样': `[00:00.00]你停在了这条我们熟悉的街
[00:07.00]把你准备好的台词全念一遍
[00:14.00]我还在逞强 说着谎
[00:18.00]也没能力遮挡 你去的方向
[00:23.00]至少分开的时候我落落大方
[00:30.00]我后来都会选择绕过那条街
[00:37.00]又多希望在另一条街能遇见
[00:44.00]思念在逞强 不肯忘
[00:47.00]怪我没能力跟随 你去的方向
[00:53.00]若越爱越被动 越要落落大方
[01:01.00]你还要我怎样 要怎样
[01:05.00]你突然来的短信就够我悲伤
[01:09.00]我没能力遗忘 你不用提醒我
[01:13.00]哪怕结局就这样
[01:17.00]我还能怎样 能怎样
[01:20.00]最后还不是落得情人的立场
[01:24.00]你从来不会想 我何必这样
[01:32.00]我慢慢的回到自己的生活圈
[01:38.00]也开始接触新的人选
[01:44.00]爱你到最后 不痛不痒
[01:49.00]留言在计较 谁爱过一场
[01:55.00]我剩下一张 没后悔的模样
[02:04.00]你还要我怎样 要怎样
[02:07.00]你千万不要在我婚礼的现场
[02:11.00]我听完你爱的歌 就上了车
[02:15.00]爱过你很值得
[02:19.00]我不要你怎样 没怎样
[02:23.00]我陪你走的路你不能忘
[02:27.00]因为那是我 最快乐的时光`,

    '刚刚好': `[00:00.00]如果有人在灯塔 拨弄她的头发
[00:05.00]思念刻在墙和瓦
[00:11.00]如果感情会挣扎 没有说的儒雅
[00:17.00]把挽回的手放下
[00:23.00]镜子里的人说假话
[00:29.00]违心的样子你决定了吗
[00:36.00]装聋或者作哑 要不我先说话
[00:46.00]我们的爱情 到这刚刚好
[00:50.00]剩不多也不少 还能忘掉
[00:55.00]我应该可以 把自己照顾好
[01:02.00]我们的距离 到这刚刚好
[01:06.00]不够我们拥抱 就挽回不了
[01:11.00]用力爱过的人 不该计较
[01:18.00]天空有些暗了 暗的刚刚好
[01:22.00]我难过的样子就没人看到
[01:27.00]你别太在意我身上的记号`,

    '暧昧': `[00:00.00]反正现在的感情 都暧昧
[00:05.00]你大可不必为难 找般配
[00:09.00]付出过的人排队 谈体会
[00:13.00]趁年轻别害怕一个人睡
[00:18.00]可能是现在感情 太昂贵
[00:22.00]让付出真心的人 好狼狈
[00:27.00]还不如听首情歌 的机会 忘了谁
[00:36.00]感情像牛奶一杯 越甜越让人生畏
[00:45.00]都早有些防备 润色前的原味
[00:54.00]所以人们都拿起咖啡 把试探放在两人位
[01:02.00]距离感一对 就不必再赤裸相对
[01:11.00]反正现在的感情 都暧昧
[01:15.00]你大可不必为难 找般配
[01:19.00]付出过的人排队 谈体会
[01:23.00]弃之可惜 食而无味
[01:28.00]可能是现在感情 太珍贵
[01:32.00]让付出真心的人 太疲惫
[01:37.00]谁不曾用过卑微的词汇 想留住谁`,

    '动物世界': `[00:00.00]东打一下西戳一下
[00:03.00]动物未必需要尖牙
[00:06.00]示爱的方法有礼貌或是我管它
[00:12.00]要将情人一口吞下
[00:15.00]还要显得温文尔雅
[00:18.00]螳螂委屈的展示旧伤疤
[00:24.00]求偶时候一惊一乍
[00:27.00]因为害怕时常倒挂
[00:30.00]走投无路的情况下舍弃了尾巴
[00:36.00]如果不能将它同化就寄生于它
[00:40.00]大不了一同腐化
[00:45.00]努力进化 笑动物世界都太假
[00:49.00]祖先 已磨去爪牙
[00:53.00]相爱相杀 一定有更好的办法
[00:57.00]攀比一下 谁先跪下
[01:00.00]不再进化 动物世界里都太傻
[01:04.00]为情表现到浮夸
[01:06.00]得到了你就该丢下
[01:09.00]人性来不及粉刷
[01:11.00]所以啊 人总患孤寡`,

    '像风一样': `[00:00.00]我等的模样好不具象
[00:06.00]用皮肤感受你的流向
[00:12.00]你竟然能做到带走阳光
[00:18.00]我一味的跟随过了量
[00:24.00]像风一样 你靠近云都下降
[00:30.00]你卷起千层海浪 我躲也不及往里闯
[00:36.00]像风一样 你离开不声不响
[00:42.00]我喜欢这种收场 看上去谁都不亏欠对方
[00:48.00]像风一样 你靠近云都下降
[00:54.00]你卷起千层海浪 我躲也不及往里闯
[01:00.00]像风一样 你离开不声不响
[01:06.00]我喜欢这种收场 看上去谁都不亏欠对方`,

    '天外来物': `[00:00.00]你降落的 太突然了
[00:08.00]我刚好呢 又错过了
[00:16.00]像万有引力 在你我之间
[00:23.00]那距离 在拉扯
[00:30.00]你像 天外来物一样 求之不得
[00:37.00]你在世俗里的名字 不重要了
[00:44.00]正好 我隐藏的人格是锲而不舍
[00:51.00]直到蜂拥而至的透明 都碎了
[00:58.00]你像 天外来物一样 失而复得
[01:05.00]你在世俗里的名字 被人用了
[01:12.00]反正 我隐藏的人格是契而不舍
[01:19.00]直到蜂拥而至的人都 透明了`,

    '一半': `[00:00.00]多平淡 所以自己想办法
[00:05.00]最好做个哑巴 别拿真心说话
[00:14.00]多幸运 才敢付出真心吗
[00:20.00]我知道你不想 但总该学会成长
[00:27.00]我可以 为我们的散 承担一半
[00:32.00]可我偏要 摧毁所有的好感
[00:36.00]看上去能孤独 的很圆满
[00:42.00]多遗憾 我为你留的一半
[00:47.00]剩下的一半 又由谁来填满
[00:52.00]多自然 你离开后的一半
[00:56.00]我留了一半 给你心安
[01:00.00]一半 我为你曾撑过伞
[01:04.00]一半 淋湿了才更勇敢
[01:08.00]一半 是回忆的疲倦
[01:12.00]一半 是未来的新鲜`,

    '意外': `[00:15.10]我在清晨的路上
[00:19.03]谁被我遗忘
[00:26.95]我在深夜里旅行
[00:31.04]谁被我遗忘
[00:37.78]肩上的破旧行囊
[00:43.84]能收藏多少坚强
[00:49.80]不如全身赤裸
[00:53.57]还给我那脆弱
[00:56.90]明知这是一场意外
[01:01.11]你要不要来
[01:08.95]明知这是一场重伤害
[01:13.13]你会不会来
[01:20.57]当疯狂慢慢从爱情离开
[01:26.57]还有什么你值得感慨
[01:31.12]如果风景早已都不存在
[01:36.33]我想我谁都不爱
[01:46.77]都不爱
[02:05.94]我在清晨的路上
[02:10.03]谁被我遗忘
[02:17.94]我在深夜里旅行
[02:22.07]谁被我遗忘
[02:28.79]肩上的破旧行囊
[02:34.85]能收藏多少坚强
[02:40.80]不如全身赤裸
[02:44.52]还给我那脆弱
[02:47.91]明知这是一场意外
[02:52.06]你要不要来
[02:59.95]明知这是一场重伤害
[03:04.08]你会不会来
[03:11.58]当疯狂慢慢从爱情离开
[03:17.49]还有什么你值得感慨
[03:22.06]如果风景早已都不存在
[03:27.32]我想我谁都不爱
[03:29.95]明知这是一场意外
[03:34.07]你要不要来
[03:41.97]明知这是一场重伤害
[03:46.07]你会不会来
[03:53.58]当疯狂慢慢从爱情离开
[03:59.54]还有什么你值得感慨
[04:04.05]如果风景早已都不存在
[04:09.27]我想我谁都不爱`,

    '怪咖': `[00:16.92]你的改变 很难制止了
[00:24.28]我的取悦 也不是天生的
[00:31.84]熟练了 喜怒就合并了
[00:39.94]你的理由是星星点点的
[00:47.13]我尽量充当气氛营造者
[00:54.93]练就成了 无痛的角色
[01:02.36]再听多几次分开的话
[01:06.58]越致命越不正面回答
[01:10.63]感情里的怪咖 有铺垫就不尴尬
[01:18.30]所以要找个延期方法
[01:22.30]既平静还能突然挣扎
[01:26.19]我自愿作怪咖 就不怕被你笑话
[01:34.54]你的铺垫 零零散散的
[01:42.35]别去揭穿 话题制造者
[01:49.54]我记得 你也会不舍
[01:57.33]我偶尔取悦也会失手的
[02:05.66]搞笑的人变成做恶的
[02:12.78]我习惯了 无痛的货色
[02:20.06]再听多几次分开的话
[02:24.51]越致命越不正面回答
[02:28.72]感情里的怪咖 有铺垫就不尴尬
[02:36.29]所以要找个延期方法
[02:40.28]既平静还能突然挣扎
[02:44.34]我自愿作怪咖 就不怕被你笑话
[03:07.28]你还有几次分开的话
[03:11.83]新鲜感不佳词语匮乏
[03:15.93]感情里的怪咖 可手里也没筹码
[03:23.48]所以要找个缓冲方法
[03:27.42]直到有天我也放得下
[03:31.67]我不是个怪咖 是不计较的惩罚
[03:41.19]感情里的怪咖 再难过也笑着说吧`,

    '无数': `[00:00.00]有个地方真实存在
[00:04.38]有着复眼能看到的色彩
[00:09.75]人们身上都没有口袋
[00:15.39]不用装下愤怒和悲哀
[00:20.34]快告诉我你真的存在
[00:24.81]翻过山河让一切重来
[00:29.73]请赐予我自由自在
[00:34.86]还能停止那该死的买卖
[00:40.26]在人们无数次沉没里
[00:44.37]怎么还有条船不远万里
[00:49.32]它带着幼稚的真理
[00:52.29]还背负着勇敢的罪名
[00:59.76]在我无数次失败里
[01:03.81]你凭什么陪我颠沛流离
[01:08.37]在平行故事里 总会有个我没辜负你
[01:20.01]我拿什么证明我存在
[01:24.45]能看肉眼禁锢的色彩
[01:29.31]他们终将用一句活该
[01:34.23]来概括我们所有的无奈
[01:39.63]在人们无数次沉没里
[01:43.80]怎么还有条船不远万里
[01:48.72]它带着幼稚的真理
[01:51.72]还炫耀着徒手的正义
[01:59.13]在我无数次失败里
[02:03.18]你凭什么陪我颠沛流离
[02:07.80]在平行故事里 总会有个我没辜负你
[02:19.26]在我们无数次沉没里
[02:23.10]我原谅了你的不敢靠近
[02:27.99]要放下幼稚的真理
[02:31.02]一遍遍的举起那白旗
[02:38.16]在我无数次失败里
[02:42.30]你为何要陪我颠沛流离
[02:46.98]在下个故事里 让我把世界给你`,

    '守村人': `[00:00.00]爱穿破烂的衣裳 真名必须要隐藏
[00:07.02]我的船长 会带我去远航
[00:13.92]要陪伴你们的成长 要扮丑扮脏扮疯狂
[00:20.85]被石块丢被水泼会笑场
[00:27.78]一个个都不归的模样
[00:34.56]我偷听过你志向
[00:38.04]我被挑选要镇守一方
[00:41.64]请带话 给我亲爱的船长
[00:50.31]你看 守村的夜晚 天星星闪闪
[00:56.82]被照亮的我并不孤单
[01:00.24]亲人未散 热腾腾的饭
[01:03.66]在我梦里都有 你看
[01:09.00]守村的呐喊 犬猫就围满
[01:12.42]听我吹 会长鼻的勇敢
[01:15.87]嘿船长你看 我早有预感
[01:19.56]很强的人都孤单
[01:27.21]一去不归是何等模样
[01:33.87]想跟踪你去向
[01:37.38]你带回红绿三五张
[01:41.13]掩盖你 一路的不治之伤
[01:49.59]你看 守村的夜晚 灯忽明忽闪
[01:56.07]最爱你的人望眼欲穿
[01:59.52]烟花点不燃 我没像样的伞
[02:03.00]为何不留一晚 你看
[02:08.31]守村的呐喊 萤火就围满
[02:11.73]听我吹 他后辈的勇敢
[02:15.15]你所有难堪 我闭口不谈
[02:18.84]美梦被轰鸣声驱散
[02:27.15]你看 守村的那晚 巨兽在臂展
[02:33.69]只有我不退不让不散
[02:37.14]别撕我衣衫 别笑我命烂
[02:40.50]非本村的靠边站
[02:45.93]守村的夜晚 被灰尘堆满
[02:49.32]的我与废墟为伴
[02:52.65]谁来者不善 谁勋章挂满
[02:56.22]我用小树杈对你宣战
[03:03.72]我会撑到 下一个我赶来`,
  }
};

const lyrics = new LyricsManager();


// ===== app.js =====
/**
 * 主入口 — App
 * ====================================
 * 串联 Player、Lyrics、Playlist 模块
 * 负责 DOM 渲染、事件处理、Tab 切换
 * 适配深蓝星空 Glassmorphism 主题
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
    this._showToast('🎵 薛之谦音乐播放器已就绪');
  },

  // ---------- DOM 缓存 ----------
  _cacheDom() {
    // 播放器视图
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

    // SVG 图标
    this.$iconPlay = this.$btnPlay ? this.$btnPlay.querySelector('.icon-play') : null;
    this.$iconPause = this.$btnPlay ? this.$btnPlay.querySelector('.icon-pause') : null;

    // 底部播放栏
    this.$playerBar = document.getElementById('playerBar');
    this.$barCover = document.getElementById('barCover');
    this.$barTitle = document.getElementById('barTitle');
    this.$barPlayBtn = document.getElementById('barPlayBtn');
    this.$barProgress = document.getElementById('barProgress');
    this.$barCoverWrap = document.querySelector('.player-bar-mini-cover-wrap');

    // 歌单视图
    this.$playlistView = document.getElementById('playlistView');
    this.$playlistInner = document.getElementById('playlistInner');
    this.$favoritesView = document.getElementById('favoritesView');
    this.$playerView = document.getElementById('playerView');

    // Tab
    this.$tabs = document.querySelectorAll('.tab');

    // 搜索
    this.$searchInput = document.getElementById('searchInput');

    // Toast
    this.$toast = document.getElementById('toast');
  },

  // ============ Player 事件绑定 ============
  _bindPlayerEvents() {
    player.on('play', () => this._onPlay());
    player.on('pause', () => this._onPause());
    player.on('timeupdate', (progress) => this._onTimeUpdate(progress));
    player.on('songchange', (song) => this._onSongChange(song));
    player.on('error', (data) => this._onError(data));
    player.on('loadstart', () => this._onLoadStart());
    player.on('canplay', () => this._onCanPlay());
    player.on('ended', () => this._onEnded());
  },

  // ============ UI 事件绑定 ============
  _bindUIEvents() {
    // 播放控制
    this.$btnPlay.addEventListener('click', () => {
      if (player.currentIndex < 0) {
        this._playFirstAvailable();
      } else {
        player.toggle();
      }
    });
    this.$btnPrev.addEventListener('click', () => player.prev());
    this.$btnNext.addEventListener('click', () => player.next());
    this.$btnMode.addEventListener('click', () => {
      const mode = player.cycleMode();
      this.$btnMode.textContent = player.getModeLabel();
      this._showToast(this._modeToast(mode));
    });

    // 收藏按钮
    this.$btnLike.addEventListener('click', () => {
      const song = player.getCurrentSong();
      if (!song) return;
      const liked = playlist.toggle(song.id);
      this._updateLikeBtn(song.id);
      this._updateFavCount();
      this._showToast(liked ? '❤️ 已收藏' : '🤍 已取消收藏');
      if (this.currentView === 'favorites') this._renderFavorites();
    });

    // 进度条
    this.$progressBar.addEventListener('input', () => {
      player.seekPercent(this.$progressBar.value);
    });

    // 底部播放栏点击 → 切换到播放页
    this.$playerBar.addEventListener('click', (e) => {
      if (e.target.closest('.player-bar-btn')) return;
      this.switchView('player');
    });

    // 底部播放栏按钮
    this.$barPlayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      player.toggle();
    });

    // Tab 切换
    this.$tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.switchView(tab.dataset.view);
      });
    });

    // 搜索
    if (this.$searchInput) {
      this.$searchInput.addEventListener('input', () => {
        this.searchKeyword = this.$searchInput.value;
        this._renderPlaylist();
      });
      this.$searchInput.addEventListener('focus', () => {
        this.switchView('playlist');
      });
    }

    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;
      switch (e.code) {
        case 'Space':
          e.preventDefault();
          player.toggle();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          player.prev();
          break;
        case 'ArrowRight':
          e.preventDefault();
          player.next();
          break;
        case 'ArrowUp':
          e.preventDefault();
          player.setVolume(player.volume + 0.1);
          this._showToast('🔊 ' + Math.round(player.volume * 100) + '%');
          break;
        case 'ArrowDown':
          e.preventDefault();
          player.setVolume(player.volume - 0.1);
          this._showToast('🔉 ' + Math.round(player.volume * 100) + '%');
          break;
      }
    });
  },

  // ============ 播放第一首歌（自动获取音源）============
  async _playFirstAvailable() {
    // 尝试播放第一首，player.play() 会自动调用 AudioSource 获取音源
    const result = await player.play(0);
    if (result === false) {
      this._showToast('⚠️ 未能获取到音源，请检查网络或配置音频链接');
    }
  },

  // ============ 事件处理 — 播放/暂停（SVG 图标切换）============
  _setPlayingState(playing) {
    if (this.$iconPlay && this.$iconPause) {
      this.$iconPlay.style.display = playing ? 'none' : '';
      this.$iconPause.style.display = playing ? '' : 'none';
    }
    // 底部栏按钮
    if (this.$barPlayBtn) {
      const barSvg = this.$barPlayBtn.querySelector('svg');
      if (barSvg) {
        barSvg.innerHTML = playing
          ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'
          : '<path d="M8 5v14l11-7z"/>';
      }
    }
  },

  _onPlay() {
    this._setPlayingState(true);
    this.$coverContainer.classList.add('playing');
    this.$coverContainer.classList.remove('paused');
    if (this.$barCover) this.$barCover.classList.add('playing');
    this._ensurePlayerBarVisible();
  },

  _onPause() {
    this._setPlayingState(false);
    this.$coverContainer.classList.add('paused');
    this.$coverContainer.classList.remove('playing');
    if (this.$barCover) this.$barCover.classList.remove('playing');
  },

  _onSongChange(song) {
    if (!song) return;
    this.$songTitle.textContent = song.title;
    this.$songAlbum.textContent = `${song.album} · ${song.year} · ${song.duration}`;
    this.$barTitle.textContent = `${song.title} — 薛之谦`;
    this._updateCover(song);
    this._updateLikeBtn(song.id);
    this._renderLyricsPlaceholder();
    this._highlightCurrentSong();
    this._ensurePlayerBarVisible();
    document.title = `${song.title} — 薛之谦 · 音乐播放器`;

    // 加载歌词
    lyrics.load(song).then(() => {
      if (player.getCurrentSong()?.id === song.id) {
        this._renderLyrics();
      }
    });
  },

  _onTimeUpdate(progress) {
    if (!progress.duration) return;

    // 进度条 range
    this.$progressBar.value = progress.percent;
    // 进度条视觉填充
    if (this.$progressFill) {
      this.$progressFill.style.width = progress.percent + '%';
    }
    // 底部栏进度
    this.$barProgress.style.width = progress.percent + '%';

    this.$currentTime.textContent = this._formatTime(progress.currentTime);
    this.$totalTime.textContent = this._formatTime(progress.duration);

    // 歌词同步
    const lyricIdx = lyrics.sync(progress.currentTime);
    if (lyricIdx >= 0) {
      this._highlightLyric(lyricIdx);
    }
  },

  _onError(data) {
    if (data.message) {
      this._showToast('⚠️ ' + data.message);
    } else if (data.song) {
      this._showToast('⚠️ 《' + data.song.title + '》暂无音源');
    } else {
      this._showToast('⚠️ 音频加载失败');
    }
  },

  _onLoadStart() {
    this._setPlayingState(false);
  },

  _onCanPlay() {
    if (player.isPlaying) {
      this._setPlayingState(true);
    }
  },

  _onEnded() {
    // handled by player.next() automatically
  },

  // ============ 封面更新 ============
  _updateCover(song) {
    this.$coverContainer.innerHTML = '';

    if (song.cover) {
      const img = document.createElement('img');
      img.className = 'cover-disc';
      img.src = song.cover;
      img.alt = song.title;
      img.onerror = () => this._renderPlaceholderCover(song);
      this.$coverContainer.appendChild(img);
    } else {
      this._renderPlaceholderCover(song);
    }

    // 底部栏封面
    if (song.cover) {
      this.$barCover.src = song.cover;
      this.$barCover.style.display = '';
      if (this.$barCoverWrap) this.$barCoverWrap.style.display = '';
    } else {
      this.$barCover.style.display = 'none';
      // 保留 wrapper 用于显示默认渐变背景
    }
  },

  _renderPlaceholderCover(song) {
    const div = document.createElement('div');
    div.className = 'cover-placeholder cover-disc';
    div.innerHTML = `
      <div class="cover-inner">
        <span class="cover-emoji">🎵</span>
        <span class="cover-text">薛之谦</span>
      </div>`;
    this.$coverContainer.appendChild(div);
  },

  // ============ 歌词渲染 ============
  _renderLyricsPlaceholder() {
    this.$lyricsContainer.innerHTML = '<div class="lyrics-empty">🎤 歌词加载中...</div>';
  },

  _renderLyrics() {
    if (!lyrics.lyrics.length) {
      this.$lyricsContainer.innerHTML = '<div class="lyrics-empty">🎵 暂无歌词<br><small style="opacity:0.5">试试运行 npx NeteaseCloudMusicApi</small></div>';
      return;
    }
    this.$lyricsContainer.innerHTML = lyrics.lyrics.map((line, i) =>
      `<div class="lyric-line" data-index="${i}">${line.text}</div>`
    ).join('');
  },

  _highlightLyric(idx) {
    const lines = this.$lyricsContainer.querySelectorAll('.lyric-line');
    lines.forEach((line, i) => {
      if (i === idx) {
        line.classList.add('active');
        line.classList.remove('past');
        line.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (i < idx) {
        line.classList.add('past');
        line.classList.remove('active');
      } else {
        line.classList.remove('past', 'active');
      }
    });
  },

  // ============ 收藏按钮状态（SVG 心形）============
  _updateLikeBtn(songId) {
    const liked = playlist.isFavorite(songId);
    const heartSvg = this.$btnLike ? this.$btnLike.querySelector('.icon-heart') : null;
    const labelSpan = this.$btnLike ? this.$btnLike.querySelector('span') : null;

    if (liked) {
      this.$btnLike.classList.add('liked');
      if (heartSvg) {
        heartSvg.setAttribute('fill', '#E74C3C');
        heartSvg.setAttribute('stroke', 'none');
      }
      if (labelSpan) labelSpan.textContent = '已收藏';
    } else {
      this.$btnLike.classList.remove('liked');
      if (heartSvg) {
        heartSvg.setAttribute('fill', 'none');
        heartSvg.setAttribute('stroke', 'currentColor');
      }
      if (labelSpan) labelSpan.textContent = '收藏';
    }
  },

  _updateFavCount() {
    const count = playlist.getCount();
    const favTab = document.querySelector('.tab[data-view="favorites"] .tab-count');
    if (favTab) favTab.textContent = count;
  },

  // ============ 歌单渲染 ============
  _renderPlaylist() {
    const songs = Search.byKeyword(this.searchKeyword);
    const grouped = this._groupByAlbum(songs);

    let html = '';
    for (const [albumKey, albumSongs] of Object.entries(grouped)) {
      const albumName = albumSongs[0].album;
      const albumYear = albumSongs[0].year;
      html += `
        <div class="album-group">
          <div class="album-header">
            <span class="album-year">${albumYear}</span>
            <span class="album-name">${albumName}</span>
            <span class="album-count">${albumSongs.length} 首</span>
          </div>
          <ul class="song-list">
      `;
      albumSongs.forEach(song => {
        const isPlaying = player.currentIndex >= 0 && SONGS[player.currentIndex]?.id === song.id;
        html += `
          <li class="song-item ${isPlaying ? 'playing' : ''}" data-song-id="${song.id}">
            <span class="song-item-info">
              <span class="song-item-title">${song.title}</span>
              <span class="song-item-meta">${song.feat ? 'feat. ' + song.feat + ' · ' : ''}${song.duration}</span>
            </span>
            ${isPlaying ? '<span class="song-item-playing-icon">♪</span>' : ''}
            <span class="song-item-duration">${song.duration}</span>
          </li>
        `;
      });
      html += '</ul></div>';
    }

    const target = this.$playlistInner || this.$playlistView;
    target.innerHTML = html || '<div class="favorites-empty"><div class="favorites-empty-icon">🔍</div><div class="favorites-empty-text">未找到歌曲</div></div>';

    // 绑定歌曲点击
    target.querySelectorAll('.song-item').forEach(item => {
      item.addEventListener('click', () => {
        const songId = parseInt(item.dataset.songId);
        const idx = SONGS.findIndex(s => s.id === songId);
        if (idx >= 0) {
          player.play(idx);
          this.switchView('player');
        }
      });
    });
  },

  _groupByAlbum(songs) {
    const grouped = {};
    songs.forEach(song => {
      const key = song.album + '_' + song.year;
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(song);
    });
    return grouped;
  },

  // ============ 收藏视图渲染 ============
  _renderFavorites() {
    const favSongs = playlist.getSongs();
    if (!favSongs.length) {
      this.$favoritesView.innerHTML = `
        <div class="favorites-empty">
          <div class="favorites-empty-icon">💿</div>
          <div class="favorites-empty-text">收藏列表为空</div>
          <div class="favorites-empty-hint">在歌曲列表中点击 ♡ 即可收藏</div>
        </div>
      `;
      return;
    }

    let html = '<ul class="song-list">';
    favSongs.forEach(song => {
      const isPlaying = player.currentIndex >= 0 && SONGS[player.currentIndex]?.id === song.id;
      html += `
        <li class="song-item ${isPlaying ? 'playing' : ''}" data-song-id="${song.id}">
          <span class="song-item-info">
            <span class="song-item-title">${song.title}</span>
            <span class="song-item-meta">${song.album} · ${song.duration}</span>
          </span>
          ${isPlaying ? '<span class="song-item-playing-icon">♪</span>' : ''}
          <span class="song-item-duration">${song.duration}</span>
        </li>
      `;
    });
    html += '</ul>';
    this.$favoritesView.innerHTML = html;

    this.$favoritesView.querySelectorAll('.song-item').forEach(item => {
      item.addEventListener('click', () => {
        const songId = parseInt(item.dataset.songId);
        const idx = SONGS.findIndex(s => s.id === songId);
        if (idx >= 0) {
          player.play(idx);
          this.switchView('player');
        }
      });
    });
  },

  // ============ 高亮当前播放歌曲 ============
  _highlightCurrentSong() {
    const song = player.getCurrentSong();
    if (!song) return;
    document.querySelectorAll('.song-item').forEach(item => {
      const id = parseInt(item.dataset.songId);
      if (id === song.id) {
        item.classList.add('playing');
        if (!item.querySelector('.song-item-playing-icon')) {
          const span = document.createElement('span');
          span.className = 'song-item-playing-icon';
          span.textContent = '♪';
          item.appendChild(span);
        }
      } else {
        item.classList.remove('playing');
        const icon = item.querySelector('.song-item-playing-icon');
        if (icon) icon.remove();
      }
    });
  },

  // ============ Tab 切换 ============
  switchView(view) {
    this.currentView = view;
    this.$tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.view === view);
    });
    this.$playerView.classList.toggle('active', view === 'player');
    this.$playlistView.classList.toggle('active', view === 'playlist');
    this.$favoritesView.classList.toggle('active', view === 'favorites');

    if (view === 'playlist') this._renderPlaylist();
    if (view === 'favorites') this._renderFavorites();
  },

  // ============ 底部播放栏 ============
  _ensurePlayerBarVisible() {
    this.$playerBar.classList.remove('hidden');
  },

  // ============ Toast ============
  _showToast(msg) {
    if (this._toastTimer) clearTimeout(this._toastTimer);
    this.$toast.textContent = msg;
    this.$toast.classList.add('show');
    this._toastTimer = setTimeout(() => {
      this.$toast.classList.remove('show');
    }, 2000);
  },

  // ============ 工具函数 ============
  _formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return m + ':' + String(s).padStart(2, '0');
  },

  _modeToast(mode) {
    const map = {
      loop: '🔁 列表循环',
      single: '🔂 单曲循环',
      shuffle: '🔀 随机播放',
    };
    return map[mode] || mode;
  },
};

// ============ 启动 ============
document.addEventListener('DOMContentLoaded', () => App.init());


