
import { RouterType, RequsetMode } from "@framework/server/router/types"

const routerList: RouterType[] = [
    {
        url: '/index',
        service: import('@src/server/service/index') as unknown as RouterType['service']
    }
]
  
export default routerList