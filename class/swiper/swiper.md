# 原生 js 写轮播图知识点

## 透明度 opacity
https://developer.mozilla.org/zh-CN/docs/Web/CSS/opacity
```css
img.opacity {
  opacity: 1;
  filter: alpha(opacity=100); /* IE8 and lower */
  zoom: 1; /* Triggers "hasLayout" in IE 7 and lower */
}
```

## 事件代理(事件委托)
利用父元素来代理它的所有子元素

- 对未来元素也可以增加事件
- 定时器清除 注意定时器 id

## e.target

https://developer.mozilla.org/zh-CN/docs/Web/API/Element/tagName
- tagName
- innerText
- classList.add
- classList.remove

## querySelectorAll

https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll
浏览器支持比较好 建议使用 代替 `document.get*`
