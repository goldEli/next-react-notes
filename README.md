# next-react-notes

A next project for managing notes.

### React Server Component

* 数据获取：更快
* 安全：数据逻辑保留在服务器端，不必暴露到客户端
* bundle大小：服务端组件不会到打包
* 缓存： 服务端渲染结果，后续多次请求可以复用


**缺点**

* 用户交互性弱，不能使用 useEffect state 事件监听等
* 不能使用浏览器api
* 组件顶部添加 "use client" 切换为客户端组件

**与 SSR 的区别**

