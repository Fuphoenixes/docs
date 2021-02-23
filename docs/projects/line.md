# 微信审批

## 介绍

### 背景

​	微信审批是一款基于微信公众号打造的，方便企业管理员可以直接在手机端进行审批操作的小项目。

​	[代码地址](https://gitlab.haoyunqi.com.cn/dlh/cloud/weixin/cool.line.front) 

### 分支

​	目前本项目包含两个分支，分别对应两个版本。

| 分支   | 版本     |
| ------ | -------- |
| master | 通用平台 |
| 52013  | 西南百江 |

### 技术栈

​	本项目技术栈基于 ES2015+、react、umi2.0、mobox 、axios 、antdesign-mobile，提前了解和学习这些知识会对使用本项目有很大的帮助。

## 快速开始

### 克隆项目

```bash
git clone http://gitlab.haoyunqi.com.cn/dlh/cloud/weixin/cool.line.front.git
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

