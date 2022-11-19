import axios from "axios"
import filterRequestData from "./filterRequestData"
/**后续进行封装 */
export async function get({
    url,
    params
}): Promise<any> {
    const axiosData = await axios.get(`/_api/${url}`, params)
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