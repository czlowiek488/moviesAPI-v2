import express from 'express'
import logger from 'morgan'
import path from 'path'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import hbs from 'express-handlebars'
import dotenv from 'dotenv'
dotenv.load()

import movie from './routes/movie'
import errors from './middlewares/error'

mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, { useNewUrlParser: true })

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => next(404))
app.use('/movie', movie)
app.use(errors)
console.log(`Server listening on ${process.env.PORT}`)
export default app
