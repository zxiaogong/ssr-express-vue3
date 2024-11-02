
import Service from "@framework/server/service/index"
class Index extends Service {
    async get(): Promise<any> {
        console.log("进入？？？？？？？？")
        return {
            pageMeta:{
                title:'编辑uniapp',
                keywords:'uniapp低代码',
                description:'uniapp低代码编辑页',
            },
            pageConfig:{
                msg:"测试？"
            },
        }
    }
}
export default Index