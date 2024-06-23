import postgres from 'postgres'
import { env } from '../../util/env'

const sql = postgres(env.postgres)

export default sql