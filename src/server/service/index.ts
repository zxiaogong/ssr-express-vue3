
import Service from "@framework/server/service"
class Index extends Service {
    async get(): Promise<any> {
        /**
         * this.mysql()....提供了一些简单的操作sql的api
         * 如果需要更加复杂的操作可以调用 this.mysql().allCustomSql(sql) 进行操作
         */
        const user_info = await this.mysql().querySql({
            table_name: "user_list",
        })
        

        return {
            msg: `test data ${Math.floor(Math.random() * 10 + 1)}`,
            user_info: user_info
        }
    }
}
export default Index