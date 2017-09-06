## 启动项目

```shell
  # 编译
  npm run dev

  # 启动项目
  npm start
```

## 参考资料

### react-router
* [小白学react之React Router实战](http://www.jianshu.com/p/d8d1e5d50447)
* [阮一峰-React Router 使用教程](http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu)
* [react-router文档](http://www.uprogrammer.cn/react-router-cn)

### webpack
* [webpack指南](https://webpack.toobug.net/zh-cn/)
* [webpack 从入门到工程实践](http://dwz.cn/6tw4XA)

## 其他

1. babel

```shell
  # 安装
  npm i babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev

  # 新建 .babelrc 文件 添加以下代码
  {
    "presets": [
      "react",
      "es2015"
    ]
  }
```

## 遇到的问题

1.react 遍历数组

```js
this.state = {
  list: ['a', 'b']
}

// ....

<ul>
  {
    list.map((item, index) => {
      return <li key={index}>{item}</li>
    })
  }
</ul>
```
