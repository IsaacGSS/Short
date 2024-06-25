import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import z from 'zod'

import postgres from "postgres";
import sql from "../../../db/lib/postgres";


export async function CreatShort(app: FastifyInstance) {
    app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {

        const creatShortSchema = z.object({
            code: z.string().min(3),
            original_url: z.string().min(1).url()
        })

        const { code, original_url } = creatShortSchema.parse(request.body)

        try {
         const creatShort = await sql/*sql*/`
         INSERT INTO short_links (code, original_url)
         VALUES (${code}, ${original_url})
         RETURNING id
         `

         const links = creatShort[0]        

         return reply.status(201).send({ shortLink: links.id })
        } 
        catch (err) {

            if(err instanceof postgres.PostgresError) {
                if (err.code === '23505') {
                    return reply.status(500).send({ message: 'erro interno, duplicata de valores' })
                }
            }

            console.log(err);
        }
    })
}