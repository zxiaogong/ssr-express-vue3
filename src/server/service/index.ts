
import Service from "@framework/server/service/index"
class Index extends Service {
    async get(): Promise<any> {
        
        return {
            pageMeta:{
                title:'测试标题',
                keywords:'测试keywords',
                description:'测试description',
            },
            msg: `test data ${Math.floor(Math.random()*10+1)}`
        }
    }
}
export default Index