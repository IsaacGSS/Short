import sql from "../lib/postgres";

async function seed() {

    await sql/*sql*/`
        INSERT INTO short_links (code, original_url)
        VALUES ('isaac_S.Silva', 'https://github.com/isaacGSS/')
    `     

    await sql.end({ timeout: 500 })

    console.log('Creat Short! 🌱')
}

seed()