# note-mark

note-mark是基于 Electron + React + Jotai + Tailwind 实现的编辑器

##  大致项目结构
  **note-mark/**
  
  ├── main.js---------------# 主进程入口（Electron 应用的启动脚本）
  
  ├── preload.js------------# 预加载脚本（注入渲染器的桥梁）
  
  ├── package.json--------# 项目配置和依赖
  
  ├── renderer/------------# 渲染器进程目录（前端页面）
  
  │├── index.html---------# 网页入口文件
  
  │└── renderer.js---------# 前端逻辑（使用的是 React）
  
  └── assets/--------------# 静态资源（图片、图标等）
  

 - mian.js ： 主进程文件通常用于访问文件系统等一系列功能
 - renderer.js :   渲染进程文件通常用于写前端网页功能 
 - preload.js : 预加载文件主要用于安全连接 主进程和 渲染进程

## 项目效果展示


<img width="1861" height="1130" alt="image" src="https://github.com/user-attachments/assets/d0c6e201-3063-4903-811e-bad297172c44" />
