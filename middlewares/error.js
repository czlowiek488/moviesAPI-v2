import winston from 'winston'

export default (err, req, res, next) => {
    const time = new Date()
    winston.info(err.message, {time, body: req.body, query: req.query, params: req.params, method: req.method, url: req.originalUrl, err})

    switch(err.message) {
        case 'Movie not found':
            res.status( 404 ).json({message: err.message})
            break;
        case 'Request sorting query is invalid':
        case 'Request body is not valid':
            res.status( 400 ).json({message: err.message})
            break;
        case 'Third-party server error':
            res.status( 503 ).json({message: err.message})
            break;
        default:
            res.status( 500 ).json({message: 'Internal Server Error'})
    }
}