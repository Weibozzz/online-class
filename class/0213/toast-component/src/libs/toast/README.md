## 全局提示
全局展示操作反馈信息。

## 何时使用
- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 使用示例
```js
this.$toast.success({
        duration: 1000,
        content: '小伙子 你答对了'
      })
      
this.$toast({
        duration: 1000,
        content: '出错了'
      })
```

## API
### toast.method() 或者 toast()
- toast.success
- toast.error
- toast
以上均为一个函数，参数为 object，具体属性如下：

|  参数   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| type  | 	指定警告提示的样式，有两种选择 success、error | string | - |
| duration  | 	自动关闭的延时，单位毫秒。 | number | 3000 | 
| content  | 	提示内容 | string | 服务器错误，请稍后重试 | 
| onClose  | 	关闭时触发的回调函数 | Function | - | 
