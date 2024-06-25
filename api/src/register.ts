import fastify from 'fastify'
import { Hello } from './router/Hello'
import { Link } from './router/links/link'
import { Short } from './router/short/index';

export const app = fastify()

app.register(Short.creat, {
    prefix: '/api/short'
})

app.register(Short.read, {
    prefix: '/api/short'
})

app.register(Short.readUnique, {
    prefix: '/api/short'
})

app.register(Short.delete, {
    prefix: '/api/short'
})

app.register(Link)

//* Router Dev Test */
app.register(Hello, {
    prefix: '/dev'
})