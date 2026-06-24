# 🎵 薛之谦专属音乐播放器

> 全屏式 Web 音乐播放器，收录薛之谦全部专辑歌曲（140+首），深蓝星空 Glassmorphism 主题。

---

## 🚀 快速开始（3 步出声音）

### 步骤 1：启动音源 API

打开一个**新的终端**（PowerShell / CMD），执行：

```bash
npx NeteaseCloudMusicApi
```

看到 `server running at http://localhost:3000` 就成功了。**这个窗口不要关。**

### 步骤 2：启动播放器

```bash
cd C:\Users\lht23\Desktop\xuezhiqian-player
python -m http.server 8080
```

### 步骤 3：打开浏览器

访问 **`http://localhost:8080`**，点击任意歌曲即可播放！

---

## 🔊 音源方案

| 方案 | 命令 | 说明 |
|------|------|------|
| **A 本地 API** | `npx NeteaseCloudMusicApi` | ⭐最可靠，一行命令启动 |
| B 手动配置 | 编辑 `js/config.js` 的 `audioUrl` | 自有 MP3 文件 |
| C 公开 API | 内嵌 ~110 首网易云 ID | 自动回退 |

##

---

## 📁 项目结构

```
xuezhiqian-player/
├── index.html            # 唯一页面
├── css/
│   └── style.css         # 深蓝星空主题（1028行）
├── js/
│   ├── config.js         # 歌曲配置 + 140首曲库
│   ├── audio-source.js   # 音源获取引擎（多API回退）
│   ├── player.js         # 音频播放引擎
│   ├── lyrics.js         # 歌词解析 + 同步滚动
│   ├── playlist.js       # 收藏/歌单管理
│   └── app.js            # 主入口 + UI 渲染
└── README.md
```

---

## 🌐 部署到 GitHub Pages

```bash
cd C:\Users\lht23\Desktop\xuezhiqian-player
git init
git add .
git commit -m "🎵 薛之谦音乐播放器"

# 在 GitHub 创建仓库后：
git remote add origin https://github.com/你的用户名/xuezhiqian-player.git
git branch -M main
git push -u origin main

# Settings → Pages → Source: main → Save
# 访问: https://你的用户名.github.io/xuezhiqian-player/
```

> ⚠️ GitHub Pages 托管的是静态文件，音源需要配合**方案 A（本地API）**或**方案 B（手动配置MP3）**才能播放。

---

## ⌨️ 快捷键

| 按键 | 功能 |
|------|------|
| `空格` | 播放 / 暂停 |
| `←` `→` | 上一首 / 下一首 |
| `↑` `↓` | 音量 ±10% |

---

## 🔧 技术栈

纯原生 HTML5 / CSS3 / JavaScript — 零依赖、零框架、零构建工具。
