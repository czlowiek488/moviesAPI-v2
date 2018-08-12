const errors = [
    (err, req, res, next) => {
        if(err === 404) res.status( 404 ).json({message: 'Not Found'})
        else next( err )
    },
    (err, req, res, next) => {
        if(err === 400) res.status( 400 ).json({message: 'Bad Request'})
        else next( err )
    },
    (err, req, res, next) => {
        if(typeof err === 'undefined') res.status( 500 ).json({message: 'Internal Server Error'})
        else next( err )
     }
]
export default errors