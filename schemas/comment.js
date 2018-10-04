import Joi from 'joi'
export default {
  text: Joi.string()
    .min(1)
    .required(),
  username: Joi.string().min(3),
  imdbID: Joi.string()
    .length(9)
    .required()
}
