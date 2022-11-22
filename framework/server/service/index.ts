
import useMysql from "@framework/mysql/connectMysql"
import splicingSql from "@framework/server/util/splicingSql"


interface QuerySqlTypes {
    /**表名 */
    table_name: string,
    /**条件 */
    condition?: { [paname: string]: string | number }
}
interface AddSqlTypes {
    /**表名 */
    table_name: string,
    /**数据 */
    value: { [paname: string]: string | number }
}
interface DeleteSqlTypes {
    /**表名 */
    table_name: string,
    /**条件 */
    condition: { [paname: string]: string | number }
}

interface UpdateSqlTypes {
    /**表名 */
    table_name: string,
    /**数据 */
    value: { [paname: string]: string | number }
    /**条件 */
    condition: { [paname: string]: string | number }
}

class Service {
    constructor() {
    }
    async get(query?: any): Promise<any> {
    }
    async post(query?: any): Promise<any> {
    }

    mysql() {
        /**查询 */
        const querySql = async (sql: QuerySqlTypes): Promise<any> => {
            if (!sql.table_name) {
                console.error("缺少表名")
                return {}
            }
            const condition = splicingSql(sql.condition)
            const sqlData = await useMysql(`select * from ${sql.table_name} ${condition.length ? 'where ' + condition.join(" and ") : ''}`)
            if (sqlData.state) {
                return sqlData.data
            } else {
                console.error(sqlData.err)
                return {}
            }
        }
        const addSql = async (sql: AddSqlTypes): Promise<boolean> => {
            const value = sql.value
            const keys: string[] = []
            const values: Array<string | number> = []
            if (!sql.table_name) {
                console.error("缺少表名")
                return false
            }
            for (let key in value) {
                keys.push(`${key}`)
                if (typeof value[key] === 'string') {
                    values.push(`'${value[key]}'`)
                } else {
                    values.push(value[key])
                }

            }
            if (!keys.length || !values.length) {
                console.error("缺少要添加的数据")
                return false
            }
            const sqlData = await useMysql(`insert into ${sql.table_name} (${keys.join(", ")}) values (${values.join(", ")})`)
            return sqlData.state
        }

        const deleteSql = async (sql: DeleteSqlTypes): Promise<boolean> => {
            if (!sql.table_name) {
                console.error("缺少表名")
                return false
            }
            const condition = splicingSql(sql.condition)
            const value = sql.condition
            if (!condition.length) {
                console.error("缺少条件")
                return false
            }
            const sqlData = await useMysql(`delete from ${sql.table_name} where ${condition.join(" and ")}`)
            return sqlData.state
        }

        const updateSql = async (sql: UpdateSqlTypes): Promise<boolean> => {
            if (!sql.table_name) {
                console.error("缺少表名")
                return false
            }
            const content = splicingSql(sql.value)
            const condition = splicingSql(sql.condition)
            if (!content) {
                console.error("缺少数据")
                return false
            }
            if (!condition) {
                console.error("缺少条件")
                return false
            }
            const sqlData = await useMysql(`update ${sql.table_name} set ${content.join(",")} where ${condition.join(" or ")}`)
            return sqlData.state
        }

        const allCustomSql = async (sql: string): Promise<any> => {
            if (!sql) {
                console.error("缺少sql语句")
                return undefined
            }
            const sqlData = await useMysql(sql)
            if (sqlData.state) {
                return sqlData.data
            } else {
                console.error(sqlData.err)
                return undefined
            }
        }

        return {
            /**查询数据库 */
            querySql,
            /**添加数据 */
            addSql,
            /**删除数据 */
            deleteSql,
            /**更新数据 */
            updateSql,
            /**自定义操作数据库语句 */
            allCustomSql
        }
    }
}


export default Service