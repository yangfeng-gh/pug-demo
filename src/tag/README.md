# 标签 Tag
在默认情况下，在每行文本的开头（或者紧跟白字符的部分）书写这个 HTML 标签的名称。使用缩进来表示标签间的嵌套关系，这样可以构建一个 HTML 代码的树状结构。

```jade
ul
  li Item A
  li Item B
  li Item C
```

 Pug 还知道哪个元素是自闭合的：

```jade
img
```

## 块展开

为了节省空间， Pug 为嵌套标签提供了一种内联式语法

```jade
a: img
```

## 自闭合标签

诸如 `img`, `meta`, 和 `link` 之类的标签都是自动闭合的（除非您使用 XML 类型的 doctype）。 您也可以通过在标签后加上 `/` 来明确声明此标签是自闭合的，但请您仅在明确清楚这是在做什么的情况下使用。

```jade
foo/
foo(bar='baz')/
```

## 输出空格

标签前后的空格都会被移除，因此您要控制这些标签是否需要处理。空格的控制在[纯文本](https://pug.bootcss.com/language/plain-text.html#whitespace-control)中会详细介绍。
