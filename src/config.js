import dotenv from 'dotenv'
import { cleanEnv, num } from 'envalid'

dotenv.config()

const env = cleanEnv(process.env, {
  PORT: num({ default: 4000 })
})

export default {
  url: `http://localhost:${env.PORT}`,
  port: env.PORT
}
