## CSS 初识

> CSS通常称为CSS样式表或层叠样式表（级联样式表），主要用于设置HTML页面中的文本内容（字体、大小、对齐方式等）、图片的外形（宽高、边框样式、边距等）以及版面的布局等外观显示样式。

## CSS字体样式属性

- Font-size:字号大小
- Font-family:字体
- font-weight:字体粗细
- Font-style:字体风格

## 选择器



### 标签选择器

`标签名{属性1:属性值1; 属性2:属性值2; 属性3:属性值3; }`

### 类选择器

`.类名{属性1:属性值1; 属性2:属性值2; 属性3:属性值3; }`



```html
<head>
        <meta charset="utf-8">
        <style>
        span {
        	font-size: 100px;
        }
        .blue {
        	color: blue;
        }
        .red {
        	color: red;
        }
        .orange {
			color: orange;
        }
		.green {
			color: green;
		}
        </style>
    </head>
    <body>
    	<span class="blue">G</span>
    	<span class="red">o</span>
    	<span class="orange">o</span>
    	<span class="blue">g</span>
    	<span class="green">l</span>
    	<span class="red">e</span>
    </body>
```



### id选择器

`#id名{属性1:属性值1; 属性2:属性值2; 属性3:属性值3; }`



### 伪类选择器

- :link      /* 未访问的链接 */
- :visited   /* 已访问的链接 */
- :hover     /* 鼠标移动到链接上 */
- :active    /* 选定的链接 */

```css
li:first-child { /*  选择第一个孩子 */
        		color: pink; 
        	}
li:last-child {   /* 最后一个孩子 */
        		color: purple;
        	}
li:nth-child(4) {   /* 选择第4个孩子  n  代表 第几个的意思 */ 
				color: skyblue;
        	}
```

## css外观属性

- color:文本颜色
- line-height:行间距
- text-align:水平对齐方式
- text-indent:首行缩进
- letter-spacing:字间距
- word-spacing:单词间距

## 文字阴影

`text-shadow:水平位置 垂直位置 模糊距离 阴影颜色;`



## 引入CSS样式表（书写位置

### 行内式（内联样式）

### 内部样式表（内嵌式）

### 外部样式表（外链式）

## 三种样式表总结

| 样式表     | 优点                     | 缺点                     | 使用情况       | 控制范围           |
| ---------- | ------------------------ | ------------------------ | -------------- | ------------------ |
| 行内样式表 | 书写方便，权重高         | 没有实现样式和结构相分离 | 较少           | 控制一个标签（少） |
| 内嵌样式表 | 部分结构和样式相分离     | 没有彻底分离             | 较多           | 控制一个页面（中） |
| 外部样式表 | 完全实现结构和样式相分离 | 需要引入                 | 最多，强烈推荐 | 控制整个站点（多） |

## display

### block

每个块元素通常都会独自占据一整行或多整行

### inline

行内元素（内联元素）不占有独立的区域，仅仅靠自身的字体大小和图像尺寸来支撑结构，一般不可以设置宽度、高度、对齐等属性，常用于控制页面中文本的样式。

### inline-block

行内块元素的特点：
（1）和相邻行内元素（行内块）在一行上,但是之间会有空白缝隙。
（2）默认宽度就是它本身内容的宽度。
（3）高度，行高、外边距以及内边距都可以控制。

## background

CSS 可以添加背景颜色和背景图片，以及来进行图片设置。

| background-color                                            | 背景颜色         |
| ----------------------------------------------------------- | ---------------- |
| background-image                                            | 背景图片地址     |
| background-repeat                                           | 是否平铺         |
| background-position                                         | 背景位置         |
| background-attachment                                       | 背景固定还是滚动 |
| 背景的合写（复合属性）                                      |                  |
| background:背景颜色 背景图片地址 背景平铺 背景滚动 背景位置 |                  |

## 盒模型

所谓盒子模型就是把HTML页面中的元素看作是一个矩形的盒子，也就是一个盛装内容的容器。每个矩形都由元素的内容、`内边距（padding）、边框（border）和外边距（margin）`组成。



CSS3中可以通过box-sizing 来指定盒模型，即可指定为content-box、border-box，这样我们计算盒子大小的方式就发生了改变。

可以分成两种情况：

1. box-sizing: border-box  盒子大小为 width

2. box-sizing: content-box  盒子大小为 width + padding + border





### padding

- padding-top:上内边距
- padding-right:右内边距
- padding-bottom:下内边距
- padding-left:左内边距

## 圆角边框(CSS3)

`border-radius: 左上角  右上角  右下角  左下角;`

## float 浮动

元素的浮动是指设置了浮动属性的元素会**脱离标准普通流**的控制，移动到其父元素中指定位置的过程。

在CSS中，通过float属性来定义浮动，其基本语法格式如下：

```
选择器{float:属性值;}
```

| 属性值 | 描述                 |
| ------ | -------------------- |
| left   | 元素向左浮动         |
| right  | 元素向右浮动         |
| none   | 元素不浮动（默认值） |

### 清除浮动本质

主要为了解决父级元素因为子级浮动引起内部高度为0 的问题



### 清除浮动的方法

使用after伪元素清除浮动

使用方法：

```css
 .clearfix:after {  content: "."; display: block; height: 0; clear: both; visibility: hidden;  }   

 .clearfix {*zoom: 1;}   /* IE6、7 专有 */
```



## 定位

position属性的常用值

| 值       | 描述                                             |
| -------- | ------------------------------------------------ |
| static   | 自动定位（默认定位方式）                         |
| relative | 相对定位，相对于其原文档流的位置进行定位         |
| absolute | 绝对定位，相对于其上一个已经定位的父元素进行定位 |
| fixed    | 固定定位，相对于浏览器窗口进行定位               |

### 四种定位总结

| 定位模式         | 是否脱标占有位置     | 是否可以使用边偏移 | 移动位置基准           |
| ---------------- | -------------------- | ------------------ | ---------------------- |
| 静态static       | 不脱标，正常模式     | 不可以             | 正常模式               |
| 相对定位relative | 不脱标，占有位置     | 可以               | 相对自身位置移动       |
| 绝对定位absolute | 完全脱标，不占有位置 | 可以               | 相对于定位父级移动位置 |
| 固定定位fixed    | 完全脱标，不占有位置 | 可以               | 相对于浏览器移动位置   |

## flex布局

- flex-direction调整主轴方向（默认为水平方向）

- justify-content调整主轴对齐

- align-items调整侧轴对齐

- flex-wrap控制是否换行

- align-content堆栈（由flex-wrap产生的独立行）对齐

- flex-flow是flex-direction、flex-wrap的简写形式

- flex子项目在主轴的缩放比例，不指定flex属性，则不参与伸缩分配

- order控制子项目的排列顺序，正序方式排序，从小到大

## 过渡css3

语法格式:

```
transition: 要过渡的属性  花费时间  运动曲线  何时开始;
```

| 属性                       | 描述                                         | CSS  |
| -------------------------- | -------------------------------------------- | ---- |
| transition                 | 简写属性，用于在一个属性中设置四个过渡属性。 | 3    |
| transition-property        | 规定应用过渡的 CSS 属性的名称。              | 3    |
| transition-duration        | 定义过渡效果花费的时间。默认是 0。           | 3    |
| transition-timing-function | 规定过渡效果的时间曲线。默认是 "ease"。      | 3    |
| transition-delay           | 规定过渡效果何时开始。默认是 0。             | 3    |

## 2D 3D变形(CSS3)

transform

- 偏移translate(x,y,z)

- 缩放 scale(x,y,z)

- 旋转 rotate(deg)

- 倾斜 skew(deg, deg) 

  **transform-origin可以调整元素转换的原点**

















