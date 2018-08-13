import Joi from 'joi'
export default {
    'imdbID': Joi.string().length(9).required()
}