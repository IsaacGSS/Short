import fastify from 'fastify'
import { Hello } from './router/Hello'
import { Link } from './router/links/link'
import { Short } from './router/short/index';
import { Metrics } from './router/metric/metrics';

export const app = fastify()

//* Router Dev Test */
app.register(Hello, {
    prefix: '/dev'
})

//___

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

app.register(Metrics, {
    prefix: '/api/metrics'
})