import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import workflowRoutes from './routes/workflowRoutes.js'
import { limiter } from './middleware/rateLimiter.js'
import { errorHandler } from './middleware/errorHandler.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(helmet())

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
  })
)

app.use(express.json({ limit: '10mb' }))
app.use(limiter)

app.get('/', (req, res) => {
  res.send('FlowMind AI backend is running')
})

app.use('/api', workflowRoutes)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})