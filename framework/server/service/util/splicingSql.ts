/**生成简单的sql语句 */
const splicingSql = (value):Array<string> => {
  const condition = []
  for (let key in value) {
    if (typeof value[key] === "string") {
      condition.push(`${key}='${value[key]}'`)
    } else {
      condition.push(`${key}=${value[key]}`)
    }
  }
  return condition
}

export default splicingSql