import express from 'express'
import 'express-async-errors'
import winston from 'winston'

import routes from './startup/routes'
import errors from './startup/errors'
import database from './startup/database'
import middlewares from './startup/middlewares'
import envValidator from './startup/envValidator.js'

envValidator()
errors()
database()

const app = express()
middlewares(app)
routes(app)

if(app.get('env') == 'development') {
    winston.info(`Server listening on ${process.env.PORT}`)
}

export default app
