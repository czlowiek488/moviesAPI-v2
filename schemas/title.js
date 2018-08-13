import Joi from 'joi'
export default {
    'title': Joi.string().min(1).required()
}