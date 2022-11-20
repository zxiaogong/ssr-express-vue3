
import { RouterType } from "@framework/server/router/types"
const routerList: RouterType[] = [
    {
        url: '/index',
        service: import('@server/service/index') as unknown as RouterType['service']
    }
]
  
export default routerList