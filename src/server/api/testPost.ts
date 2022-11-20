
import Service from "@framework/server/service"
class Index extends Service {
    async post(query): Promise<any> {
        console.log(query)
        return {
            msg: `收到post请求，返回响应id：${Math.floor(Math.random() * 10 + 1)}`
        }
    }
}
export default Index 