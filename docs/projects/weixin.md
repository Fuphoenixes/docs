# 一键订气

## 介绍

### 背景

​	一键订气项目是基于微信公众号为燃气企业打造的一款线上订水订气的移动端H5平台。

​    [代码地址](https://gitlab.haoyunqi.com.cn/dlh/cloud/weixin/cool.weixin.front)

### 功能

```
- 下单订气
- 微商城模块
- 积分商城
- 优惠券模块
- 预付卡模块
- 投诉保修模块
- 抽奖营销模块
- 秒杀模块
- 安检单模块
- 电子发票模块
```

### 技术栈

本项目技术栈基于 ES2015+、react、umi2.0、dva 、axios 、antdesign-mobile，提前了解和学习这些知识会对使用本项目有很大的帮助。

:::  warning  注意

​	除通用平台即master分支采用[umi2.0](https://v2.umijs.org/zh/)架构外，其他分支由于历史原因仍采用[umi1.0](https://github.com/umijs/umi/tree/1.x/docs)架构

​	数据状态管理都是使用 [dva](https://dvajs.com/)

​	！！！如不了解这两框架，请认真查阅相关文档

:::  



### 目录结构

```bash
├── /mock/           # 数据mock
├── /dist/           # 项目输出目录
├── /src/            # 项目源码目录
│ ├── /assets/       # 公共文件，编译时copy至dist目录
│ ├── /components/   # UI组件及UI相关方法
│ │ ├── skin.less    # 全局样式
│ │ └── vars.less    # 全局样式变量
│ ├── /pages/        # 页面
│ │ └── /user/       # 路由
│ │   ├── /components/ #私有组件     
│ │   ├── /models/     #私有模型(按需加载) 
│ │   ├── /services/   #私有服务(按需加载)   
│ │   ├── page.js       
│ │   └── page.less   
│ ├── /models/       # 全局数据模型(默认加载)
│ ├── /services/     # 数据接口
│ ├── /themes/       # 项目样式
│ ├── /utils/        # 工具函数
│ │ ├── config.js    # 项目常规配置
│ │ ├── menu.js      # 菜单及面包屑配置
│ │ ├── branch.js    # 项目环境分支配置
│ │ ├── request.js   # 异步请求函数
│ │ └── theme.js     # 项目需要在js中使用到样式变量
│ ├── route.js       # 路由配置
│ ├── global.js      # 入口文件
│ ├── app.js         # dva配置
│ └── global.css(.less) #全局样式文件     
├── package.json     # 项目信息
├── .eslintrc        # Eslint配置
├── .umirc.js        # umi配置
```

### 分支

​		本项目由于会部署给多个企业使用，不同企业间存在不同的需求，故存在多个分支对应不同的需求。

​		同时由于本项目涉及到微信支付，而微信支付的配置要求一个账户最多只能配置5个地址域名（ps: 后面找到了方法解决，但是写本项目那时还没有），故多个分支最后都部署在了一个链接地址上了，前端通过链接query参数上的不同企业公众号的appid来判断当前需要的分支版本，手动打上cookie，并刷新页面交由后端根据不同的cookie返回不同分支的前端资源代码。

​		[前端实现代码地址](https://gitlab.haoyunqi.com.cn/dlh/cloud/weixin/cool.weixin.front/blob/master/src/utils/branch.js)

​		[后端实现代码地址](https://gitlab.haoyunqi.com.cn/dlh/cloud/weixin/cool.weixin.web/blob/master/src/main/java/com/dlh/weixin/controller/IndexPage.java#L55)

### 环境分支对照表

#### 线上环境
  未知appid则默认是通用分支为master

| 企业     | 企业号 | 分支   | appid              |
| -------- | ------ | ------ | ------------------ |
| 湖南中民 | 43007  | 43007  | wxd36d46a12ead0f5d |
| 新疆昆仑 | 65011  | 65011  | wxa316653c13627dd8 |
| 东莞新华 | 44011  | 44011  | wxf6c5a17f82beb5aa |
| 葫芦岛   | 21011  | coupon | wx39fd076a3babf628 |

#### 测试环境
  共3个公众号，测试时自行在master分支上(/src/utils/branch.js)做更改指向对应分支

| 公众号       | appid              | 分支   |
| ------------ | ------------------ | ------ |
| 好运气       | wx03588315239b6dbf | master |
| 好运气-beta  | wx5eec6abec3f367b5 | 44011  |
| 好运气-beta2 | wx80e59e88fdc78afa | 43007  |

## 快速开始

### 克隆项目

```bash
git clone http://gitlab.haoyunqi.com.cn/dlh/cloud/weixin/cool.weixin.front.git
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

测试环境

```bash
npm run build:test
```

### 开发调试

由于本项目是基于微信公众号的，所以开发调试工具必须是 [微信开发者工具](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Web_Developer_Tools.html) 

开发流程参考：

​	微信公众号开发流程

​	[微信JS-SDK说明文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)

### 真机调试

由于是移动端项目，在真机上即便是抓包依旧存在调试不便的情况

故在项目的404页面里添加了后门，用于引入[vConsole](https://github.com/Tencent/vConsole) 做为真机调试工具

具体操作流程： 

1. 在微信里输入本项目任意不存在的路由，进入本项目的404页面

   <img src="https://gitee.com/Fuphoenixes/images/raw/master/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210130002041.jpg" alt="微信图片_20210130002041" style="zoom:25%;" />

   <img src="https://gitee.com/Fuphoenixes/images/raw/master/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210130002047.jpg" alt="微信图片_20210130002047" style="zoom:25%;" />

2. 在 “404 Not Found”这段文字上，左右滑动超过2秒，即会打开后门，弹出设置调试器弹框，输入密码 543210 点击确定，即可打开调试器

   <img src="https://gitee.com/Fuphoenixes/images/raw/master/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210130002026.jpg" alt="微信图片_20210130002026" style="zoom:25%;" />

## 功能点记录

### 移动端适配

移动端web页面的开发，由于手机**屏幕尺寸**、**分辨率**不同，或者需要考虑**横竖屏**问题，为了使得web页面在不同移动设备上具有相适应的展示效果，需要在开发过程中使用合理的适配方案来解决这个问题。

目前主流的适配方案有： 百分比布局、rem布局、 vw/vh布局等等，个中的优势劣势可自行百度搜索，这里不做详细介绍。

本项目采用rem布局

原理：

**rem**是相对长度单位，rem方案中的样式设计为相对于**根元素**`font-size`计算值的倍数。根据 **屏幕宽度** 设置`html`标签的`font-size`，在布局时使用 **rem** 单位布局，达到自适应的目的，是 **弹性布局** 的一种实现方式。

实现：

​	由于大部分的UI设计稿都是屏宽为750个单位，故我希望在设置css样式时能直接使用设计稿测量的数据，无需再换算，它最好类似这样 ``` width: 750 xx单位```， 那么现在开始设计：

1. 获取设置 html的font-size为屏宽 除以 7.5  [@/pages/document.ejs](https://gitlab.haoyunqi.com.cn/dlh/cloud/weixin/cool.weixin.front/blob/master/src/pages/document.ejs#L18)

   ```js
   function pxToRem(){
       var html = document.documentElement;
       var windowWidth = html.clientWidth;
       html.style.fontSize = windowWidth / 7.5+ 'px';
     }
     pxToRem();
   ```

2. 设置less变量 @rem = 100 

   ```less
   //rem配置
   @rem:100rem;
   ```

3. 假如测量UI稿宽度为750个单位，则如下设置 

   ```less
   width: 750/@rem;
   // 等同于 width: 750/100rem => width: 7.5rem
   ```

   ::: tip 思考:

    `/@rem`这种写法好怪异，有没有其他办法，我就想直接写px可以吗？

   答：有，我们可以借助webpack插件 [postcss-plugin-px2rem](https://github.com/pigcan/postcss-plugin-px2rem) 将 除以100这种操作放到编译阶段，让webpack帮我们处理了

   :::

4. 引入postcss-plugin-px2rem 并配置  [.umirc.js](https://gitlab.haoyunqi.com.cn/dlh/cloud/weixin/cool.weixin.front/blob/master/.umirc.js#L60)

   ```js
   const pxtorem = require('postcss-plugin-px2rem');
   
   module.exports =  {
     extraPostCSSPlugins:[
       //高清方案 px转rem
       pxtorem({
         rootValue: 100,
         mediaQuery: true,
         exclude:false,
         selectorBlackList: ['iconfont'],
         minPixelValue: 3
       })
     ]
   }
   ```

5. 移除第2步操作，修改第3步操作如下

   ```less
   width: 750px;
   // 编译时检测到px即会自动替换为计算好的rem值，如果就想要设置px可以设置为大写PX
   ```

::: warning 注意

​	由于历史原因,除通用平台（master）分支采用了 postcss-plugin-px2rem这种方案，其他分支依旧使用的`@/rem` 这种方案

:::

### 路由动画

本项目实现了仿App的前进后退路由动画。（仅通用平台分支）

原理：

1. 先自定义一份路由表为每个路由设置对应层级标识 [@/layouts/level.js](https://gitlab.haoyunqi.com.cn/dlh/cloud/weixin/cool.weixin.front/blob/master/src/layouts/level.js)

   ```js
   //路由等级， 用于判断路由动画是左滑还是右滑
   const routeLevel = {
     '/gasExpress': 0,
     '/submitOrder': 1,
     '/coupon': 1,
     '/city': 1,
     '/orderList': 0,
     '/orderDetail': 10,
     '/evaluate': 2,
     '/evaluate/detail': 3,
     '/ggk': 2,
     '/prize': 3,
     '/prize/receive': 4,
     '/404': 100
   };
   
   export default routeLevel;
   
   ```

   

2. 监听路由变化，根据路由地址获取路由的层级标识，判断当前路由和前一个路由的层级大小决定为当前页面添加左滑进入样式还是右滑进入样式 [@/layouts/index.js](https://gitlab.haoyunqi.com.cn/dlh/cloud/weixin/cool.weixin.front/blob/master/src/layouts/index.js#L76)

   ```js
   //路由动效方向控制
     changeRouteClassName = (pathname, oldPathname)=>{
       const level = routeLevel[pathname];
       const oldLevel = routeLevel[oldPathname];
       if(pathname === '/orderList' && /(s|S)ubmit/i.test(oldPathname)){
         this.slideType = '';
       }else if(typeof level === 'undefined' || typeof oldLevel === 'undefined' || level === oldLevel) {
         this.slideType = '';
       } else if(level > oldLevel){
         this.slideType = 'rightIn';
       }else if (level < oldLevel) {
         this.slideType = 'leftIn';
       }
     };
   
   ```

3. 编写对应的左滑样式和右滑样式的  [@/layouts/styles.js](https://gitlab.haoyunqi.com.cn/dlh/cloud/weixin/cool.weixin.front/blob/master/src/layouts/style.js)

### 图标

​	本项目使用字体图标方案来处理小图标，在 [iconfont.cn ](http://iconfont.cn/)上选择并生成自己的业务图标库，再进行使用，

具体仓库地址可以联系对应管理员为你配置

### 跨域问题

在 `dev` 开发模式下可以下使用 webpack 的 `proxy` 使用也是很方便，参照 [文档](https://www.webpackjs.com/configuration/dev-server/#devserver-proxy) 就会使用了，楼主一些个人项目使用的该方法。但这种方法在生产环境是不能使用的。在生产环境中需要使用 `nginx` 进行反向代理。不管是 `proxy` 和 `nginx` 的原理都是一样的，通过搭建一个中转服务器来转发请求规避跨域的问题。

| 开发环境 | 生产环境 |
| :------: | -------- |
|   cors   | cors     |
|  proxy   | nginx    |

proxy示列:

```javascript
// .umirc.js
   proxy: {
      '/proxy': {
        target: 'http://xxxxxxxxxx',
        changeOrigin: true,
        pathRewrite: {
          '^/proxy': ''
        }
      }
    }
```

### mock数据

[参考umi文档](https://v2.umijs.org/zh/guide/mock-data.html#mock-%E6%95%B0%E6%8D%AE)

## 辅助资料

[umi2.0](https://v2.umijs.org/zh/)

[umi1.0](https://github.com/umijs/umi/tree/1.x/docs)

[dva](https://dvajs.com/)

[一键订气各公众号](http://zentao.haoyun7.com.cn:89/zentao/doc-view-9.html)

