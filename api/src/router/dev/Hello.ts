import { FastifyInstance, FastifyReply } from "fastify";

export async function Hello(app: FastifyInstance) {
    app.get('/', (_, reply: FastifyReply) => {

        console.log('redirect from developer github aplication')

        return reply.redirect('https://github.com/isaacGSS/')
    })

    app.get('/hello', (_, reply: FastifyReply) => {

        console.log('Hello aplication')
        

        return reply.status(200).send({ Hello: 'World' })
    })
}