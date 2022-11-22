
# ssr-express-vue3
基于vite插件搭建的vue3服务端渲染架构


## 运行、打包

```bash
  yarn run dev
```
```bash
  yarn run build:client
```
```bash
  yarn run build:server
```
```bash
  yarn run build:app
```
```
  运行打包后的代码
  yarn run app
```

## 附录

src/server 服务端

src/web    前端

## 注：
 #### 1.别名引入对应的文件目录

 ```
 @web -------------- src/web
 @server ----------- src/server
 @framework -------- framework
 @router ----------- src/router
 @apiCall ---------- src/web/common/apiCall
 
 ```

 #### 其他
 ```
该分支封装了连接mysql功能，不同分支对应不同功能。

 ```
