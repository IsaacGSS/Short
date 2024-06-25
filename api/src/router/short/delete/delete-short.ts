import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import z from 'zod'

import sql from "@/db/lib/postgres";


export async function DeleteShort(app: FastifyInstance) {
    app.delete('/:id', async (request:FastifyRequest, reply:FastifyReply) => {

        const idShortSchema = z.object({
            id: z.coerce.number().min(1)
        })

        const { id } = idShortSchema.parse(request.params)

        const short = await sql/*sql*/`
            DELETE 
            FROM short_links
            WHERE short_links.id = ${id}
            RETURNING code, original_url
        `

        return reply.status(202).send({ 
            message: `Deletado o short ${short[0].code}`,
            url: short[0].original_url
        })
    })
}