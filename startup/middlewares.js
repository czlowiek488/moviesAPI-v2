import bodyParser from 'body-parser'
import logger from 'morgan'
export default app => {
    if(app.get('env') == 'development') {
        app.use(logger('dev'))
    }
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
}