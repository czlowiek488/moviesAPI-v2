import winston from 'winston'

export default (err, req, res, next) => {
    if(app.get('env') === 'development') console.log(err.message)
    if(err.message === 'Not Found'){ 
        winston.info(err.message, err)
        res.status( 404 ).json({message: err.message})
    } else if(err.message === 'Bad Request') {
        winston.info(err.message, err)
        res.status( 400 ).json({message: err.message})
    } else {
        winston.error(err.message, err)
        res.status( 500 ).json({message: 'Internal Server Error'})
    }
}