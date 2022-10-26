
import { RouterType, RequsetMode } from "./types"

export default async function router(routers: RouterType[], url: string, mode: RequsetMode, query?: any) {
    const routetLeng = routers.length
    let PageServer = null
    for (let i = 0; i < routetLeng; i++) {
        if (routers[i].url === url) {
            let def = await routers[i].service
            PageServer = def.default
            break
        }
    }
    if (PageServer) {
        if (mode === RequsetMode.GET) {
            return await new PageServer().get(query)
        } else if (mode === RequsetMode.POST) {
            return await new PageServer().post(query)
        }
    }
    return null
}