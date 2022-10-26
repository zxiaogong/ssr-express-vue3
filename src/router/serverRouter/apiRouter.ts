import { RouterType, RequsetMode } from "@framework/server/router/types"
const apiList = [
    {
        url: '/testApix',
        service: import('@src/server/api/testGet') as unknown as RouterType['service']
    }
]

export default apiList