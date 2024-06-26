import { it, describe } from 'vitest'
import request from 'supertest'
import { app } from '@/register';


describe('GET all shorts', async () => {
    it('responds with json', async () => {
        await app.ready()

        await request(app)
            .get('/api/short/diego')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
  });
})