import Joi from 'joi'
import dotenv from 'dotenv'

export default () => {
    const schema = {
        'DB_USERNAME': Joi.string().required(),
        'DB_PASSWORD': Joi.string().required(),
        'DB_HOST': Joi.string().required(),
        'DB_PORT': Joi.string().required(),
        'DB_NAME': Joi.string().required(),
        'PORT': Joi.string().required(),
        'OMDBAPI_KEY': Joi.string().required(),
        'NODE_ENV': Joi.string()
    }
    const { parsed } = dotenv.load()
    const { error } = Joi.validate(parsed, schema)
    if(error) throw Error(`FATAL ERROR: ${error}`)
}