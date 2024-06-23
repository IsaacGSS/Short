const port = process.env.PORT ? Number(process.env.PORT) : 3333

const postgres = process.env.DATABASE_URL_POSTGRES ? process.env.DATABASE_URL_POSTGRES : 'postgresql://docker:docker@localhost:5432/short'

const redis = process.env.DATABASE_URL_REDIS ? process.env.DATABASE_URL_REDIS : 'redis://:docker@localhost:6379'

export const env = {
    port,
    postgres,
    redis
}