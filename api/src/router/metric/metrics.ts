import { FastifyInstance } from 'fastify';
import redis from '../../db/lib/redis';

export async function Metrics(app: FastifyInstance) {
    app.get('/', async () => {
       const resultsRedis = await redis.zRangeByScoreWithScores('metrics', 0, 50)

       const metrics = resultsRedis
        .sort((a, b) => b.score - a.score)
        .map(
            item => {
                return {
                    shortLinkId: Number(item.value),
                    clicks: item.score,
                  }
            }
        )

        return metrics
    })
}