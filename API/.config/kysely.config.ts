import { PostgresDialect } from 'kysely'
import { Pool } from 'pg'
import {defineConfig} from 'kysely-ctl'

export default defineConfig({
    dialect: new PostgresDialect({
        pool: new Pool({
            database: process.env.DATABASE,
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            port: Number(process.env.DATABASE_PORT)
        })
    })
})
