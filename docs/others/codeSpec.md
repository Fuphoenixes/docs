## 前端开发规范

## 前言
  对于一个多人团队来说，制定一个统一的规范是必要的，因为个性化的东西无法产生良好的聚合效果，规范化可以提高编码工作效率，使代码保持统一的风格，以便于代码整合和后期维护。请参与开发相关人员遵循，同时也请各位日后进行补充完善

## HTML规范

- 嵌套的节点应该缩进；
- 在属性上，使用双引号，不要使用单引号；
- 属性名全小写，用中划线做分隔符；
- 用`<meta>`标签可以指定页面应该用什么版本的IE来渲染 `<meta http-equiv="X-UA-Compatible" content="IE=Edge">`；
- 单页面应用如非必要，禁止使用id。

## css规范

- 禁止使用层级过深的选择器，最多4级。

  错误示例：
  ``` css
  .without-animation .book-body .body-inner .book-header .dropdown .dropdown-menu .buttons{}
  .without-animation .book-body .body-inner .book-header .dropdown .dropdown-right .buttons{}
  .without-animation .book-body .body-inner .book-header .pull-left .dropdown-menu .buttons{}
  ```
- 除非有特定的功能、组件要求等，禁止随意使用id来定义元素样式；
- class类名的英文单词用-连接, react项目由于class名需要被用作js变量故改 - 为 _ ;
- 属性顺序尽量按照；<br>
    1 位置属性(position、top、right、z-index、display、float等)；<br>
    2 大小(width, height, padding, margin等)；<br>
    3 文字系列(font、line-height、letter-spacing、color、text-align等)；<br>
    4 背景(background、border等)；<br>
    5 其他(animation、transition等)。<br>
- 取值0和1之间的数值时，省略0不写
  ``` css
  .btn-cancel {
     font-size:0.875rem;
  }✗
  .btn-cancel {
     font-size:.875rem;
  }✓
  ```
- 缩写色值 (某些可以缩写的色值(aabbcc型或者aaaaaa型)使用缩写)
  ``` css
  .btn-cancel {
     background-color:#eebbcc;
  } ✗
  .btn-cancel {
     background-color:#ebc;
  } ✓
  ```
- 值为0时，不要带单位
  ``` css
  .btn-cancel {
     padding: 0px;
  } ✗
  .btn-cancel {
     padding: 0;
  } ✓
  ```
- 尽量少用 * 选择器;
- css预编译器方面，由于公司大部分项目选用了less，所以如非必要首选less;
- css类名命名如果词穷可以参考：[css 常用命名](https://www.cnblogs.com/Mtime/p/5184693.html)

## javascript规范

- 代码注意缩进，保持代码美观，删除多余代码；
- 变量命名遵循驼峰规则；
- 调试完成后删除 console、debugger等调试代码；
- 运算符前后加上空格 eg: + - > < = == ? : || &&
- 字符串引号 首选 ' ' ，复杂的字符串拼接则首选 \` \`  
- 如非必要始终使用 === 替代 ==;  eslint: eqeqeq
  ``` js
    if (name === 'John')   // ✓
    if (name == 'John')    // ✗ 
    
    if (name !== 'John')   // ✓
    if (name != 'John')    // ✗ 
  ```
- 始终将逗号置于行末  eslint: comma-style
  ```  js
   let obj = {
      foo: 'foo'
      ,bar: 'bar'   // ✗ 
    }
  
   let obj = {
      foo: 'foo',
      bar: 'bar'   // ✓
   }
  ```
- 尽量使用ES6语法，减少ES5语法；（特殊情况除外）
  - 使用let、const代替var定义变量，变量用let,常量用const,全局常量定义时使用大写；
  - 尽量使用箭头函数 => 代替 function 定义函数，方便处理this；
    ``` js
    // ✗ 
    function Person() {
      this.age = 0;
      let _this = this;
      setInterval(function growUp() {
        _this.age++;
        console.log(_this.age); 
      }, 1000);   
    }
    let p = new Person();
    
    // ✓
    function Person() {
      this.age = 0;
      setInterval(()=> {
        this.age++;
        console.log(this.age); // 1 2 3...
      }, 1000);
    }
    var p = new Person();
    ```
  - 如非必要尽量使用 forEach,map,filter,some,every,reduce 等声明式的数组操作方法替代 for 循环操作；（for循环容易增加代码复杂性减少可读性）
    ``` js
    let a = [1,2,3,4,5];
    // ✗
    for(let i = 0;i<a.length;i++){
        console.log(a[i]);
    }
    // ✓
    a.forEach(e=>{
        console.log(e);
    })
    // ✓
    a.map(e=>{
        console.log(e);
    }); 
    ```
  - for...in遍历对象时 使用hasOwnProperty保证代码逻辑严谨正确。
    ``` js
    let a = {name:'Lucy',age:32,sex:'女'};
    // ✗
    for(o in a){
        console.log(a[o]);
    }
    // ✓
    for(o in a){
        if(a.hasOwnProperty(o)){
            console.log(a[o]);
        }
    }
    ```
- if else 不要嵌套太多层。
- 统一处理ajax；
- 与业务联系不大，纯功能性的复杂逻辑，请封装好了放在其他文件再引入组件内使用，不要糅合在业务逻辑里，增加维护难度；
- 复杂逻辑写好逻辑实现的注释
  
## react项目规范

- 没有子组件的父组件使用自闭和标签。 eslint: react/self-closing-comp
  ``` js
  // ✗
  <Foo className="stuff"></Foo>
  
  // ✓
  <Foo className="stuff" />
  ```
- 如果组件有多行属性，闭合标签应写在新的一行上。eslint: react/jsx-closing-bracket-location
  ``` js
   // ✗
   <Foo
     bar="bar"
     baz="baz" />
    
   // ✓
   <Foo
     bar="bar"
     baz="baz"
   />
  ```
- 当组件跨行时，要用括号包裹 JSX 标签。eslint: react/wrap-multilines
  ``` js
  // ✗
  render() {
    return <MyComponent className="long body" foo="bar">
             <MyChild />
           </MyComponent>;
  }

  // ✓
  render() {
    return (
      <MyComponent className="long body" foo="bar">
        <MyChild />
      </MyComponent>
    );
  }

  // ✓, 单行时
  render() {
    const body = <div>hello</div>;
    return <MyComponent>{body}</MyComponent>;
  }
  ```
- 组件编写时方法遵循顺序  

  类属性、构造函数 -> static相关静态方法 -> 生命周期 -> 普通方法 -> render函数
  
## vue项目规范

- 为 v-for 设置键值key；
- 永远不要把 v-if 和 v-for 同时用在同一个元素上；
- 为组件样式设置作用域 scoped；
- 指令缩写 (用 : 表示 v-bind: 、用 @ 表示 v-on: 和用 # 表示 v-slot:)；
- 组件/实例的选项统一书写顺序；
  以下是常用的选项顺序 （更详细的请参考 [vue官网组件/实例的选项的顺序](https://cn.vuejs.org/v2/style-guide/#%E7%BB%84%E4%BB%B6-%E5%AE%9E%E4%BE%8B%E7%9A%84%E9%80%89%E9%A1%B9%E7%9A%84%E9%A1%BA%E5%BA%8F-%E6%8E%A8%E8%8D%90)）
  
  - 副作用 (触发组件外的影响)
    - el
  - 全局感知 (要求组件以外的知识)
    - name
  - 模板依赖 (模板内使用的资源) 
    - components
    - directives
    - filters
  - 组合 (向选项里合并属性)
    - mixins
  - 接口 (组件的接口)
    - props
    - model
  - 本地状态 (本地的响应式属性)
    - data
    - computed
  - 响应式事件
    - watch 
  - 生命周期钩子 (按照它们被调用的顺序)
    - created
    - mounted
    - destroyed
  - 非响应式的属性方法
    - methods
- 不在template里或者render函数里引用的方法函数，命名时前面加上 _ 表示私有方法，便于区分和后期维护；
  
