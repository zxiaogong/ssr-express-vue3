import { RouterType } from "@framework/server/router/types"
const apiList: RouterType[] = [
    {
        url: '/testApix',
        service: import('@server/api/testGet') as unknown as RouterType['service']
    }
]

export default apiList 