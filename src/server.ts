import fastify from 'fastify'
import { knex } from './database'
import { randomUUID } from 'node:crypto'

const app = fastify()

app.get('/hello', async (req, res) => {
  const transactions = await knex('transactions')
    .select('*')

  return transactions
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP Server Running!')
})

