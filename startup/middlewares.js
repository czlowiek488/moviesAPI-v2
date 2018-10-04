import bodyParser from 'body-parser'
import logger from 'morgan'
import cors from 'cors'
export default app => {
  if (app.get('env') == 'development') {
    app.use(logger('dev'))
  }
  app.use(bodyParser.json())
  app.use(cors())
  app.use(bodyParser.urlencoded({ extended: false }))
}
