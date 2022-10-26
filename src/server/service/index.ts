
import Service from "@framework/server/service/index"
class Index extends Service {
    async get(): Promise<any> {
        
        return {
            msg: `test data ${Math.floor(Math.random()*10+1)}`
        }
    }
}
export default Index