import 'dotenv/config'
import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const config: Knex.Config = {
  client: 'sqlite3',
  connection:
    env.DATABASE_CLIENT === 'sqlite3'
      ? {
        filename: env.DATABASE_URL,
      }
      : env.DATABASE_URL,
  useNullAsDefault: true,
  migrations: {
    directory: './db/migrations',
    extension: 'ts',
  },
}

export const knex = setupKnex(config)
