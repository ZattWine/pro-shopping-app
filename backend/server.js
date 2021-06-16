import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

import { notfound, errorHandler } from './middlewares/errors.js'
import connectDb from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
connectDb()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.use(notfound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
