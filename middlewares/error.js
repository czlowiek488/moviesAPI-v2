import winston from 'winston'

export default (err, req, res, next) => {
    const time = new Date()
    if(err.message === 'Not Found'){ 
        winston.info(err.message, {err, time, method: req.method, url: req.originalUrl})
        res.status( 404 ).json({message: err.message})
    } else if(err.message === 'Bad Request') {
        winston.info(err.message, {err, time, method: req.method, url: req.originalUrl})
        res.status( 400 ).json({message: err.message})
    } else {
        winston.info(err.message, {err, time, method: req.method, url: req.originalUrl})
        res.status( 500 ).json({message: 'Internal Server Error'})
    }
}