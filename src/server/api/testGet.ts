
import Service from "@framework/server/service"
class Index extends Service {
    async get(): Promise<any> {
        return { msg: "测试api6666" }
    }
}
export default Index 