import routeScreenr from "@framework/server/router/routeFilter"
import { RequsetMode } from "@framework/server/router/types"
import serverRouter from "@router/serverRouter/serviceRouter"

export default async function serviceCall(url: string, mode: RequsetMode, query?: { [parm: string]: any }) {
    return await routeScreenr(serverRouter, url, mode, query) || {}
}