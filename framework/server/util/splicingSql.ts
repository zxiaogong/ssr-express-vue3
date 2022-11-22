const splicingSql = (value) => {
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