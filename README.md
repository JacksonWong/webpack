# vue-webpack 脚手架

> 该项目是[vuejs-templates/webpack](https://github.com/vuejs-templates/webpack) 的一个分支。在原有项目的功能基础上增加了Vue Router、Vuex、CSS Reset、REM css单位支持等功能

> 该模板兼容Vue 2.0。若需使用Vue 1.x，请使用命令：`vue init webpack#1.0 my-project`

## 文档

- [该模板原项目文档](http://vuejs-templates.github.io/webpack)
- [Vue 2.0说明文档](http://vuejs.org/guide/): Vue的用法说明，该文档不包含此模板的内容

## 用法

这是一个[vue-cli]模板项目(https://github.com/vuejs/vue-cli). **为了更有效地使用依赖关系树，建议使用  npm 3+**

``` bash
$ npm install -g vue-cli
$ vue init jacksonwong/webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```

如果8080端口被占用，你必须在config/index.js中变更端口号，否则`npm run dev`将会执行失败

## 包含了什么

- `npm run dev`: 开发环境
  - Webpack + `vue-loader` 支持单文件Vue组件
  - 热更新
  - CSS Reset （Eric Meyer's Reset CSS v2.0 - http://cssreset.com）
  - REM css单位
  - CSS 辅助类 （容器清除浮动、响应式图片、文字省略显示...）
  - Vue Router （官方Vue路由）
  - Vuex （Vue状态管理）
  - 预编译处理和错误提示
  - 保存时进行ESLint检查
  - Source maps

- `npm run build`: 生产环境
  - JavaScript 压缩 [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML 压缩 [html-minifier](https://github.com/kangax/html-minifier).
  - CSS 压缩，抽取到独立文件[cssnano](https://github.com/ben-eb/cssnano).
  - 所有静态资源带有哈希版本信息以便持久化缓存，自动生产带有正确URL路径资源文件的`index.html`
  - 使用 `npm run build --report` 生成bundle分析文件

- `npm run unit`: PhantomJS 单元测试 [Karma](http://karma-runner.github.io/0.13/index.html) + [Mocha](http://mochajs.org/) + [karma-webpack](https://github.com/webpack/karma-webpack).
  - 支持 ES2015+
  - 支持所有 webpack loaders.
  - mock 注入.

- `npm run e2e`: End-to-end 测试 [Nightwatch](http://nightwatchjs.org/).
  - 多浏览器并行测试
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

### 编写属于你自己的分支

你可以fork这个仓库去建立属于你自己的模板, 并且使用 `vue-cli` 运行它:

``` bash
vue init username/repo my-project
```
