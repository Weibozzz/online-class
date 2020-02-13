# toast

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### vue 复杂组件 toast 开发

#### 背景
页面出错 给用户友好提示，并且控制显示隐藏，每个组件
或者每个页面都需要，而我们只需要通过 `js` 调用
如下传入一些参数即可！那么是如何实现的呢？

```js
this.$toast({
    type: 'success',
    duration: 3000,
    content: '这是一条消息提示',
    onClose() {}
});
```
#### 知识点
1. `vue.extend()` https://cn.vuejs.org/v2/api/#Vue-extend

#### 开发
1. 利用 `vue-cli` 创建项目
2. 安装 `less less-loader`
3. 创建 `toast` 组件并挂载
4. 测试 `toast` 组件

#### 运用
1. 支持传入参数
2. 支持快速调用

```js
// 快速调用
this.$toast.success({
        duration: 1000,
        content: '小伙子 你答对了'
      })
```

