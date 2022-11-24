import mysql from "mysql"
import config from "@framework/config/config"
//数据库连接池
const sqlContent = (sql, sqlArr, callBack): void => {
  const pool = mysql.createPool(config.mysql)
  pool.getConnection((err, conn) => {
    if (err) {
      console.error("数据库连接失败: ", err)
      return
    } else {
      console.info("数据库链接成功")
    }
    //事件驱动回调
    conn.query(sql, sqlArr, callBack)
    //释放连接
    conn.release();
  })
}

//调用usedbContent传入sql语句
const useMysql = (sql): Promise<{
  state: boolean,
  err?: string,
  data?: any
}> => {
  return new Promise((res, rej) => {
    let sqlArr = [];
    //执行sql语句
    sqlContent(sql, sqlArr, (err, data) => {
      if (err) {
        rej({
          state: false,
          err
        })
      } else {
        res({
          state: true,
          data,
        })
      }
    })
  })

}

export default useMysql