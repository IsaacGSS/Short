import { expect, it, describe } from 'vitest'
import { Short, ShortProps } from './short'
import z from 'zod'

describe('short', () => {

    it('create an short links', () => {
        const short = new Short( {
            id: 1,
            code: 'Isaac',
            original_url: 'https://github.com/isaacgss',
            created_at: new Date()
        })

        expect(short.code).toBe(z.string().toLowerCase().parse(short.code))
        expect(short.original_url).toBe(z.string().url().parse(short.original_url))
    })
})