import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'

import { animesRouter, authRouter, reviewsRouter } from './routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(compression())
app.use('/api/auth', authRouter)
app.use('/api/animes', animesRouter)
app.use('/api/reviews', reviewsRouter)

export default app
