import routeScreenr from "@framework/server/router/routeFilter"
import { RequsetMode } from "@framework/server/router/types"
import apiRouter from "@src/router/serverRouter/apiRouter"

export default async function apiCall(url: string, mode: RequsetMode, query?: { [parm: string]: any }) {
    const apiUrl = url.split('/_api')
    return await routeScreenr(apiRouter, apiUrl[1], mode, query) || { msg: "接口不存在" }
}