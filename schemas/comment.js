import Joi from 'joi'
export default {
    'text': Joi.string().min(1).required(),
    'imdbID': Joi.string().length(9).required()
}