
import Service from "@framework/server/service"
import { v4 as uuidv4 } from 'uuid';
class Index extends Service {
    async post(query): Promise<any> {
        return {
            msg:uuidv4()
        }
    }

}
export default Index 