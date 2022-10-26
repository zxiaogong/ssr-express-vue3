import axios from "axios"
/**后续进行封装 */

export function get({
    url,
    params
}) {
    return axios.get(`/_api/${url}`, params)
}

export function post({
    url,
    data
}) {
    return axios.get(`/_api/${url}`, data)
}

export default{
    get,
    post,
}