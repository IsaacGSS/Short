import fastify from 'fastify'
import { Hello } from './router/dev/Hello'
import { Short } from './router/short'
import { Link } from './router/link'

export const app = fastify()

app.register(Short, {
    prefix: '/api/short'
})

app.register(Link)

//* Router Dev Test */
app.register(Hello, {
    prefix: '/dev'
})