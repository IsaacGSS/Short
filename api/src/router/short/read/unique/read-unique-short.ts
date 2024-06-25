import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import z from 'zod'

import sql from "../../../../db/lib/postgres";


export async function ReadUniqueShort(app: FastifyInstance) {
    app.get('/:code', async (request: FastifyRequest, reply: FastifyReply) => {

        const codeShortSchema = z.object({
            code: z.string().min(3)
        })

        const { code } = codeShortSchema.parse(request.params)

        const short = await sql/*sql*/`
            SELECT *
            FROM short_links
            WHERE short_links.code = ${code}
        `

        if(short.length === 0) {
            return reply.status(400).send({ message:'Esse Short nao existe.' })
        }

        return reply.status(200).send({ short: short })
    })
}