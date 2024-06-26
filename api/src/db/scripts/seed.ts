import sql from "../lib/postgres";

async function seed() {

    interface newShortInstance {
        code: string,
        original_url: string
    }
    
    const newShorts: newShortInstance[] = [
        {
            code: 'isaac_s.silva',
            original_url: 'https://github.com/isaacGSS/'
        },
        {
            code: 'diego',
            original_url: 'https://rocketseat.com/'
        },
        {
            code: 'josh',
            original_url: 'https://google.com/'
        }
    ]

    await newShorts.map( async (short: newShortInstance) => {
        await sql/*sql*/`
        INSERT INTO short_links (code, original_url)
        VALUES (${short.code}, ${short.original_url})
        `   
    })
      
    await sql.end({ timeout: 500 })

    console.log('Creat Short! 🌱')
}

seed()