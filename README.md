
# ssr-express-vue3
基于vite插件搭建的vue3服务端渲染架构


## 运行、打包

```本地运行
  yarn run dev
```
```构建
  yarn run build
```
```启动
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

服务端中使用mysql
 ```

### 服务端使用mysql
```javascript
  //项目封装了一些简单的crud操作mysql的方法
  const user_info = await this.mysql().querySql({
      table_name: "字段名",
  })
  // 如果需要更加复杂的操作可以调用  进行操作
  this.mysql().allCustomSql('sql语句')
  
```