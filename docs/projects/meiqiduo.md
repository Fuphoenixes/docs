# 美气多

## 介绍

### 背景

<a :href="$withBase('/美气多说明书.ppt')">美气多说明书.ppt</a> 

美气多是一款基于微信公众号和支付宝小程序的在线开户订气平台。

用户端： 

​	使用 [uni-app](https://uniapp.dcloud.io/) 开发，做到一套代码在微信公众号（h5）和支付宝小程序两端通用。

​	[代码地址](https://gitlab.haoyunqi.com.cn/wangzs/meiqiduo)

商家端: 

​	企业商家端直接接入好运气系统，由好运气系统维护人员维护开发，本文档不做概述。

平台端：

​	美气多平台端，用来处理美气多项目平台相关的配置管理，使用 [vue-pc-template](../template/vue-pc-template.md) 模板开发，详见对应文档。

​	[代码地址](https://gitlab.haoyunqi.com.cn/wangzs/caesar-shop-front)

::: tip 提示

​	商家端由后端人员维护，平台端文档直接参考vue-pc-template，本文档主要是介绍用户端

:::

### 技术栈

​	本项目技术栈基于 ES2015+、uni-app、vue 、vuex 、uni-ui，提前了解和学习这些知识会对使用本项目有很大的帮助。

## 快速开始

::: tip 提示

​	本项目采用uni-app脚手架模式开发，通过vue-cli创建uni-app项目，摆脱了一定要用HBuilderX编辑器打包编译的问题，开发体验与正常基于webpack开发的项目一致，方便自动化集成。[详见uni-app文档](https://uniapp.dcloud.io/quickstart-cli)

:::

### 克隆项目

```bash
git clone http://gitlab.haoyunqi.com.cn/wangzs/meiqiduo.git
```

### 安装依赖

```bash
npm install
```

### 运行发布

```bash
# h5端启动开发服务
npm run dev:h5
# h5端打包编译项目
npm run build:h5

# 支付宝小程序端启动开发环境
npm run dev:mp-alipay
# 支付宝小程序端启动生产环境
npm run build:mp-alipay
```

更多运行发布命令，详见 [uni-app官网](https://uniapp.dcloud.io/quickstart-cli?id=%e8%bf%90%e8%a1%8c%e3%80%81%e5%8f%91%e5%b8%83uni-app)

### 开发调试

::: tip

​	由于是一套代码，打包成多端运行，可以在先在其中一端进行开发调试，开发完成后再在其他端，调试是否存在异常需要处理。

​	eg: 先在h5端完成开发调试，通过后再打开支付宝开发工具调试支付宝端。

:::

#### 微信公众号端（h5端）

##### pc端调试

​	项目是基于微信公众号的，所以开发调试工具必须是 [微信开发者工具](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Web_Developer_Tools.html)

开发流程参考：

​	微信公众号开发流程

​	[微信JS-SDK说明文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html) 

##### 真机调试

​	移动端项目，在真机上即便是抓包依旧存在调试不便的情况。

​	故在项目的404页面里添加了后门，用于引入 [vConsole](https://github.com/Tencent/vConsole) 做为真机调试工具

具体操作流程：

 1. 在微信里输入本项目任意不存在的路由（前端路由即#号后为任意不存在路由），进入本项目的404页面

    <img src="https://gitee.com/Fuphoenixes/images/raw/master/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210223161637.jpg" alt="微信图片_20210223161637" style="zoom:25%;" /> <img src="https://gitee.com/Fuphoenixes/images/raw/master/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210223161645.jpg" alt="微信图片_20210223161645" style="zoom:25%;" />

 2. 在 “404 Not Found”这段文字上，左右滑动超过2秒，即会打开后门，弹出设置调试器弹框，输入密码543210 点击确定，即可打开调试器

​       <img src="https://gitee.com/Fuphoenixes/images/raw/master/images/微信图片_20210223155509.jpg" style="zoom:25%;" /> <img src="https://gitee.com/Fuphoenixes/images/raw/master/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210223155515.jpg" alt="微信图片_20210223155515" style="zoom:25%;" />

#### 支付宝端

​	启动项目运行`npm run dev:mp-alipay`（或 `npm run build:mp-alipay`）后，使用 [支付宝小程序开发者工具](https://opendocs.alipay.com/mini/ide) 打开项目下的 `dist/dev/mp-alipay` （或 `dist/build/mp-alipay`）文件夹。后续开发调试与支付宝小程序官方开发调试模式一致，可 [参考](https://opendocs.alipay.com/mini/ide/debug)

## 功能点记录

### 跨域代理

​	在 `dev` 开发模式下可以下使用 webpack 的 `proxy` 使用也是很方便，参照 [文档 (opens new window)](https://www.webpackjs.com/configuration/dev-server/#devserver-proxy)就会使用了，楼主一些个人项目使用的该方法。但这种方法在生产环境是不能使用的。在生产环境中需要使用 `nginx` 进行反向代理。不管是 `proxy` 和 `nginx` 的原理都是一样的，通过搭建一个中转服务器来转发请求规避跨域的问题。

| 开发环境 | 生产环境 |
| :------: | -------- |
|   cors   | cors     |
|  proxy   | nginx    |

示列

```json
 // manifest.json
  devServer: {
    proxy: {
      '/proxy': {
        target: 'http://xxxxxxxxxx',
        changeOrigin: true,
        pathRewrite: {
          '^/proxy': ''
        }
      }
    }
  }
```

### 图标

​	由于要同时兼容多端，故本项目图标直接使用`image`标签引入下载好的图片。

### 各端差异性处理

​	参考 [uni-app 官方文档](https://uniapp.dcloud.io/platform)

​	对于项目中由各端差异性导致无法一套代码完成同时适配多端的情况，建议针对各端分别封装好各自的逻辑，再引入页面。

​	定位逻辑、支付逻辑：

​	分别在 `src/utils/h5.js` 和 `src/utils/mp.js` 里封装了对应的逻辑，提供页面直接引入使用

​	ocr识别逻辑：

​	在 `src/utils/ocr.js` 里实现封装

​	图片压缩逻辑：

​	分别在 `src/utils/h5-compress.js` 和 `src/utils/mp-compress.js`里实现封装

## 辅助文档

​	[uni-app文档](https://uniapp.dcloud.io/README) 

​	[uni-ui文档](https://uniapp.dcloud.io/component/README?id=uniui)

​	[vue文档](https://cn.vuejs.org/)

​	[vuex文档](https://vuex.vuejs.org/zh/)

​	[支付宝小程序文档](https://opendocs.alipay.com/mini/developer) 
