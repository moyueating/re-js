### ios软键盘高度获取
`window.innerHright`不能每次精准触发，目前ios上情况是第一次无法触发，但是计算结果是精确的。

`window.visualViewport.height`可以每次都触发，但是计算的结果是不包含红色区域，实际计算的结果小于视觉中的键盘高度。

<img src="https://raw.githubusercontent.com/moyueating/blogImg/master/visualViewport/img.jpeg" width="300" />



### 利用visualViewport获取ios键盘高度

```js
  try {
    const lastInnerHeight = window.innerHeight;
    const lastVisualHeight = window?.visualViewport?.height || 0;
    setTimeout(() => {
      const innerHeightDiff = lastInnerHeight - window.innerHeight;
      const visualHeightDiff = lastVisualHeight - (window?.visualViewport?.height || 0) - 80;
      const top = innerHeightDiff ? innerHeightDiff : visualHeightDiff;
      window.scrollTo({
        top,
      });
    }, 100);
  } catch (error) {
    console.error(error);
  }
```