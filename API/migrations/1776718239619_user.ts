import { sql, type Kysely } from 'kysely'

// `any` is required here since migrations should be frozen in time. alternatively, keep a "snapshot" db interface.
export async function up(db: Kysely<any>): Promise<void> {
	await db.schema.createTable("users")
		.addColumn('id', 'serial', (col) => col.primaryKey())
		.addColumn('name', 'text')
		.addColumn('email', 'text', (col) => col.unique())
		.addColumn('password', 'text')
		.addColumn('create_at', 'timestamp', (col) => col.defaultTo(sql`now()`))
		.execute()
}

// `any` is required here since migrations should be frozen in time. alternatively, keep a "snapshot" db interface.
export async function down(db: Kysely<any>): Promise<void> {
	await db.schema.dropTable('user')
		.execute()
}
