import { validationResult } from 'express-validator/check'
export default (req,res,next) => { 
    const result = validationResult(req)
    console.log(req.query)
    if(!result.isEmpty()){
        const errors = result.array()
        console.log('root error -', errors)
        if(errors[0].nestedErrors) console.log('nestedErrors -',errors[0].nestedErrors)
        console.log('----------------------------')
        next(400)
    }
    else next()
}