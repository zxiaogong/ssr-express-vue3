import axios from "axios"
import filterRequestData from "./filterRequestData"
/**后续进行封装 */
export async function get({
    url,
    params
}): Promise<any> {
    let paramsSrt = ""
    for (let key in params) {
        paramsSrt += `${key}=${params[key]}`
    }
    if (paramsSrt) {
        paramsSrt = "?" + paramsSrt
    }
    const axiosData = await axios.get(`/_api/${url}${paramsSrt}`)
    const apiData = filterRequestData(axiosData)
    return apiData
}

export async function post({
    url,
    data
}): Promise<any> {
    const axiosData = await axios.post(`/_api/${url}`, data)
    const apiData = filterRequestData(axiosData)
    return apiData
}

export default {
    get,
    post,
}