import express from 'express'
import Joi from 'joi'

import dbComment from '../models/comment'
import dbMovie from '../models/movie'
import comment from '../schemas/comment'
import imdbID from '../schemas/imdbID'
const router = express.Router()

router.get('/', async (req, res, next) => {
    const {error} = Joi.validate(req.query, imdbID)
    if(error) throw Error('Bad Request')
    if(0 >= (await dbMovie.countDocuments({"imdbID": req.query.imdbID}))) return next(404)
    const comments = await dbComment.find({"imdbID": req.query.imdbID}, 'text')
    res.json(comments)
})

router.post('/', async (req, res, next) => {
    const {error} = Joi.validate(req.body, comment)
    if(error) throw Error('Bad Request')
    if(0 >= (await dbMovie.countDocuments({"imdbID": req.body.imdbID}))) return next(404)
    await dbComment.create(req.body)
    res.json(req.body)
})

export default router

