
import { RouterType } from "@framework/server/router/types"
/**只能用require不能用import，否则打包部署后的express会报错 */
const routerList: RouterType[] = [
    {
        url: '/index',
        service: import('@server/service/index') as unknown as RouterType['service']
    }
]
  
export default routerList