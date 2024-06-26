import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import sql from '../../db/lib/postgres';
import z from 'zod';
import redis from '@/db/lib/redis';

export async function Link(app: FastifyInstance) {
    app.get('/:code', async (request:FastifyRequest, reply: FastifyReply) => {
        const codeShortSchema = z.object({
            code: z.string().min(3)
        })

        const { code } = codeShortSchema.parse(request.params)
        
        const short = await sql/*sql*/`
            SELECT id, original_url
            FROM short_links
            WHERE short_links.code = ${code}
        `
        if(short.length === 0){
            return reply.status(400).send({ message: 'Esse Short nao existe.' })  
        }

        const link = short[0]

        await redis.zIncrBy('metrics', 1, String(link.id))

        return reply.redirect(link.original_url)
    })
}