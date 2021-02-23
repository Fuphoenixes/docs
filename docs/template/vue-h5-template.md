# vue-h5-template

## 介绍

这是一个基于 vue 开箱即用的移动端方案，内置了 路由动画、前进加载后退缓存、权限管理、请求封装等

###  技术栈

本项目技术栈基于 ES2015+、vue、vuex、vue-router 、vue-cli 、axios 和 Vant，提前了解和学习这些知识会对使用本项目有很大的帮助。

### 目录结构

```bash
├─mock/ 					#数据mock
├─public
│      favicon.ico
│      index.html
│      pxToRem.js
└─src
    │  App.vue
    │  config.js
    │  main.js
    ├─assets/
    ├─components/
    ├─directive/
    ├─icons/
    ├─mixins/
    ├─router / 
    ├─store/
    ├─styles/
    ├─utils/
    └─views
        └─home
        	├─components/
        	│ index.vue
        └─404.vue
│  .eslintignore
│  .eslintrc.js
│  .gitignore
│  .stylelintignore
│  .stylelintrc.js
│  babel.config.js
│  package-lock.json
│  package.json
│  postcss.config.js
│  README.md
│  theme.js
│  vue.config.js
│  webpack.config.js

```

## 快速开始

### 下载

方法一：使用git仓库下载

[仓库地址](https://github.com/Fuphoenixes/vue-h5-template) 

```bash
git clone https://github.com/Fuphoenixes/vue-h5-template.git
```

方法二：使用脚手架下载

```bash
# 下载脚手架
npm install @sanp/fu-cli -g

# 任意空文件夹下运行
fu init

# 或者任意文件夹下运行, xxx 为新创建的文件夹名
fu init xxx

```

### 启动

```bash
# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org
# 或使用 nrm 切换源

# 启动服务
npm run dev
```

 浏览器访问 [http://localhost:9528](http://localhost:9528)

### 打包

```bash
# 构建生产环境
npm run build
```

### 其它命令

```bash
# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint:fix
```

### 环境变量

本项目基于 `vue-cli`来进行构建，所以所有的环境变量配置都是基于`vue-cli`来实现和控制的。

[官方文档](https://cli.vuejs.org/zh/guide/mode-and-env.html)

```
.env                # 在所有的环境中被载入
.env.[mode]         # 只在指定的模式中被载入
```

一个环境文件只包含环境变量的“键=值”对：

```yaml
FOO=bar
VUE_APP_SECRET=secret
```

> 注意！！！
>
> 环境变量必须以`VUE_APP_`为开头。如:`VUE_APP_API`、`VUE_APP_TITLE`
>
> 你在代码中可以通过如下方式获取:
>
> ```js
> console.log(process.env.VUE_APP_xxxx)
> ```

除了 `VUE_APP_*` 变量之外，在你的应用代码中始终可用的还有两个特殊的变量：

- `NODE_ENV` - 会是 "development"、"production" 或 "test" 中的一个。具体的值取决于应用运行的模式。
- `BASE_URL` - 会和 `vue.config.js` 中的 `publicPath` 选项相符，即你的应用会部署到的基础路径。

除了一些写在`.env`的环境变量之外，还有一些构建和部署相关的变量都是需要在`vue.config.js`中配置的。

你可以通过`process.env.NODE_ENV`来执行判断环境，来设置不同的参数。

具体代码可借鉴 `vue.config.js`

### 真机调试

由于是移动端项目，在真机上即便是抓包依旧存在调试不便的情况

故在项目的404页面里添加了后门，用于引入[vConsole](https://github.com/Tencent/vConsole) 做为真机调试工具

具体操作流程： 


 1. 在微信里输入本项目任意不存在的路由（前端路由即#号后为任意不存在路由），进入本项目的404页面

    <img src="https://gitee.com/Fuphoenixes/images/raw/master/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210223161637.jpg" alt="微信图片_20210223161637" style="zoom:25%;" /> <img src="https://gitee.com/Fuphoenixes/images/raw/master/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210223161645.jpg" alt="微信图片_20210223161645" style="zoom:25%;" />

 2. 在 “404 Not Found”这段文字上，左右滑动超过2秒，即会打开后门，弹出设置调试器弹框，输入密码543210 点击确定，即可打开调试器

       <img src="https://gitee.com/Fuphoenixes/images/raw/master/images/微信图片_20210223155509.jpg" style="zoom:25%;" /> <img src="https://gitee.com/Fuphoenixes/images/raw/master/images/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210223155515.jpg" alt="微信图片_20210223155515" style="zoom:25%;" />


​	

## 移动端适配

### 适配方案 

​	采用rem布局，[代码地址(pxToRem.js)](https://github.com/Fuphoenixes/vue-h5-template/blob/master/public/pxToRem.js)

### 原理

​	通过查询机型，做到3端显示一致
​	设置rem基数为7.5分之一屏宽，以配合750单位的UI图
​	监听屏宽变化重新设置rem基数做到横竖屏显示正常

::: tip 提示

​	本项目引入了 `postcss-plugin-px2rem ` 并配置在 [`postcss.config.js`](https://github.com/Fuphoenixes/vue-h5-template/blob/master/postcss.config.js) 中,可实现px自动转rem,

具体原理[参考](../projects/weixin.md#移动端适配)

:::

## 路由缓存和路由动画

### 功能表现

​	 从a页面前进进入b页面时，缓存a页面，重新加载b页面，从b页面返回a页面时，直接显示缓存的a页面，也就是类似app和小程序的前进加载后退缓存， 同时添加前进和后退时的切换动画。

### 原理

​	根据实际业务，为每个路由添加对应路由层级标识，规定从低层级页面进入高层级页面时，缓存低层级页面，新加载高层级页面，同时设置高层级页面从右往左滑入动画

### 实现

  1. 根据实际业务，在配置路由信息时为每个路由添加路由层级标识 [代码地址](https://github.com/Fuphoenixes/vue-h5-template/blob/master/src/router/index.js)

     ![image-20210221170301649](https://gitee.com/Fuphoenixes/images/raw/master/images/image-20210221170301649.png)

2. 监听路由跳转，配合keep-alive组件设置需要缓存的路由  [代码地址](https://github.com/Fuphoenixes/vue-h5-template/blob/master/src/App.vue#L42)

   ![image-20210221170754084](https://gitee.com/Fuphoenixes/images/raw/master/images/image-20210221170754084.png)

3. 同时根据层级大小，配合transition组件实现 对应过渡动画 [代码地址](https://github.com/Fuphoenixes/vue-h5-template/blob/master/src/App.vue#L23)

   ![image-20210221171237780](https://gitee.com/Fuphoenixes/images/raw/master/images/image-20210221171237780.png)

4. 新增工具函数 [getCachedViewByName](https://github.com/Fuphoenixes/vue-h5-template/blob/master/src/utils/getCachedViewByName.js) 用于获取根据路由name获取已缓存的路由的实例

5. 新增自定义钩子 [afterRouteEnter]() 会在路由动画完成后触发

::: warning 警告

​	由于路由缓存是基于keep-alive实现的，所以必须为每个路由和页面设置相同的name

:::

## 图标

### 方案简介

目前主流的web项目图标处理方案有： 

1. 小图片

   优点：直接使用img标签即可引入，使用简单

   缺点：无法动态修改图片颜色

2. 字体图标

   优点：通过引入自定义字体文件的方式使用，可以像修改字体一样修改图标颜色大小

   缺点：

   ​		字体图标文件存在本地时，由于字体图标文件压缩编译过，基本无法仅通过该文件来继续新增图标，需要在对应图标网站 [iconfont.cn](http://iconfont.cn/) 上维护图标的新增和删除。这样容易在项目人员变动时，出现遗失图标网站 [iconfont.cn](http://iconfont.cn/) 上仓库的管理权限。可能就是以前的开发人员走了没给你对接这个权限，造成项目字体图标无法再新增修改的严重后果。

3. svg图标

   优点：可以通过css直接设置svg的图标大小颜色，svg源文件存在本项目，新增修改方便。

   缺点：svg dom相对复杂，直接使用比较麻烦，需要封装后使用

::: tip

   本项目针对svg直接使用比较麻烦，进行了封装，只需要将下载好的svg图标放在指定文件夹`@/icons/svg` 下，即可在项目中使用`svg-icon ` 组件进行引入，简单方便

:::

### 引入方式

​	如果你没有在本项目`@/icons`中找到需要的图标，可以到 [iconfont.cn](http://iconfont.cn/) 上选择并生成自己的业务图标库，再进行使用。或者其它 svg 图标网站，下载 svg 并放到`@/icons/svg`文件夹之中就会自动导入。

### 使用方式

```jsx
<svg-icon icon-class="password" /> 
```

### 压缩svg图标

​	本项目集成了自动压缩svg图标功能，运行 `npm run svgo` 即可压缩svg图标

::: tip 提示

​	发现新引入的svg图标无法修改颜色时，运行 `npm run svgo` 命令即可处理，或者打开该svg文件手动删除其上的 fill 属性

::: 

::: warning 警告

​	`public/svgxuse.min.js` 用于兼容svg图标在ios低版本机型上图标显示异常的bug,请勿删除！

:::

## 格式验证

​	不管是多人合作还是个人项目，代码规范都是很重要的。这样做不仅可以很大程度地避免基本语法错误，也保证了代码的可读性。

 	本项目集成了eslint用于js格式验证、stylelint用于css格式验证

### 配置项

​	eslint配置文件在  `.eslint.js` 中，stylelint配置文件在`.stylelintrc.js`中

### 取消校验

​	如果你不想使用 ESLint 校验（强烈不推荐取消），只要找到package.json文件删除一下代码即可

![image-20210222194345298](https://gitee.com/Fuphoenixes/images/raw/master/images/image-20210222194345298.png)

### 自动修复

​	可自行百度对应编辑器配置eslint和stylelint的相关操作，本项目也提供了命令用于自动修复

```bash
# 查看eslint和stylelint检查的错误
npm run lint

# 自动修复eslint和stylelint检查的错误
npm run lint:fix

# 仅查看eslint检查的错误
npm run lint-js

# 仅自动修复eslint检查的错误
npm run lint-js:fix

# 仅查看stylelint检查的错误
npm run lint-style

# 仅自动修复stylelint检查的错误
npm run lint-style:fix
```

## Mock Data

Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发更加独立自主，不会被服务端的开发所阻塞.

### server mock

本项目使用 [webpack-api-mocker](https://www.npmjs.com/package/webpack-api-mocker)  进行mock数据处理, 直接在 `mock` 文件夹下使用

示列：

```javascript
// 直接返回数据
module.exports = {
  'GET /mock/user/info': {
    status: 200,
    data: {
      name: '王小二'
    }
  }
}

// 根据请求参数处理返回结果，以及使用mock.js
const Mock = require('mockjs')

const getData = pageSize => Mock.mock({
  [`items|${pageSize}`]: [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

module.exports = {
  'GET /mock/table/list': (req, res) => {
    const { pageSize, pageIndex } = req.query
    const items = getData(pageSize).items
    if (pageIndex > 3) {
      res.send({
        status: 200,
        data: {
          total: 30,
          items: []
        }
      })
      return
    }
    res.send({
      status: 200,
      data: {
        total: 30,
        items: items
      }
    })
  }
}
```

## 和服务端进行交互

​	[参考 vue-pc-template](./vue-pc-template.md#和服务端进行交互)

## 跨域问题

​    [参考 vue-pc-template](./vue-pc-template.md#跨域问题)

## 辅助文档

​	[vue文档](https://cn.vuejs.org/)

​	[vuex文档](https://vuex.vuejs.org/zh/)

​	[vue-router文档](https://router.vuejs.org/zh/)

​	[vue-cli文档](https://cli.vuejs.org/zh/)

​	[axios文档](https://www.kancloud.cn/yunye/axios/234845)

​	[vant文档](https://vant-contrib.gitee.io/vant/#/zh-CN/)

