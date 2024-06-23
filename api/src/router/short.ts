import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import z from 'zod'
import sql from "../db/lib/postgres";
import postgres from "postgres";


export async function Short(app: FastifyInstance) {
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

    app.get('/', async (_, reply: FastifyReply) => {
        const shorts = await sql/*sql*/`
            SELECT *
            FROM short_links
            ORDER BY created_at DESC
        `

        return reply.status(200).send({ shorts: shorts })
    })

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