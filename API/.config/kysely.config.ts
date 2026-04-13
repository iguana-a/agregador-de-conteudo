import { PostgresDialect } from 'kysely'
import { Pool } from 'pg'
import {defineConfig} from 'kysely-ctl'

export default defineConfig({
    dialect: new PostgresDialect({
        pool: new Pool({
            database: 'content_aggregator',
            host: 'postgres',
            user: 'postgres',
            password: 'postgres',
            port: 5432
        })
    })
})
