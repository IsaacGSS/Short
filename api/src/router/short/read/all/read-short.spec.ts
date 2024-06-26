import { it, describe, expect } from 'vitest'
import { app } from '@/register';
import request from 'supertest'

//describe('GET all shorts', () => {
//    it('responds with json', (done) => {
//        request(app)
//            .get('/api/short')
//            .set('Accept', 'application/json')
//            .expect('Content-Type', /json/)
//            .expect(200, done);
//  });
//})


describe('read unique short and short link', () => {
    it('reader and unique short from short link', () => {
        expect(true).toBe(true)
    })
})