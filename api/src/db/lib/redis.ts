import { createClient } from 'redis'
import { env } from '../../util/env'

const redis = createClient({
    url: env.redis
})

redis.connect()

export default redis