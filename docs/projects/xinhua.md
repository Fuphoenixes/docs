# 兴华燃气

## 介绍

### 背景

​	兴华燃气最开始是东莞兴华的一款基于微信小程序的订气下单平台，并且一开始是使用原生微信小程序框架家开发的，后由于燃气相关项目的微信小程序审核无法通过，便使用社区插件[wxtouni](https://github.com/yangxianxian/wxtouni_yzx) 将原生微信小程序代码转换为uni-app代码，并使用uni-app cli模式重新搭建项目，在借用uni-app可以打包成h5的功能，将原有小程序项目转换成基于微信公众号的项目。并且最后替换了原有一键订气 东莞兴华分支（44011），功能上也与一键订气类似。

::: tip

​	由于原有代码是使用微信小程序原生方法开发，即便转换后，代码上也会有一些遗留的微信小程序写法，好在uni-app也支持这些写法（不支持的已被当做bug解决了），并不会影响项目最终运行效果。

:::

​	[转换前小程序版代码地址](https://gitlab.haoyunqi.com.cn/dlh/cloud/miniapp/xhrq) 

​	[转换后uni-app版代码地址](https://gitlab.haoyunqi.com.cn/dlh/cloud/weixin/uniapp-xhrq) 

### 技术栈

​	本项目技术栈基于 微信小程序 、uni-app，提前了解和学习这些知识会对使用本项目有很大的帮助。

## 快速开始

### 克隆项目

```bash
git clone http://gitlab.haoyunqi.com.cn/dlh/cloud/weixin/uniapp-xhrq.git
```

### 安装依赖

```bash
npm install
```

### 启动服务

```bash
npm run dev
```

### 打包编译

 线上环境

```bash
npm run build	
```

### 开发调试

由于本项目是基于微信公众号的，所以开发调试工具必须是 [微信开发者工具](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Web_Developer_Tools.html) 

开发流程参考：

微信公众号开发流程

[微信JS-SDK说明文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)

### 真机调试

[参考 一键订气](./weixin.md#真机调试)

