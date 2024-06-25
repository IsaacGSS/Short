import { FastifyInstance, FastifyReply } from "fastify";
import sql from "@/db/lib/postgres";


export async function ReadAllShort(app: FastifyInstance) {
    app.get('/', async (_, reply: FastifyReply) => {
        const shorts = await sql/*sql*/`
            SELECT *
            FROM short_links
            ORDER BY created_at DESC
        `

        return reply.status(200).send({ shorts: shorts })
    })
}