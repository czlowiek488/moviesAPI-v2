import express from 'express'
import Joi from 'joi'

import dbComment from '../models/comment'
import dbMovie from '../models/movie'
import comment from '../schemas/comment'
import imdbID from '../schemas/imdbID'
const router = express.Router()

router.get('/', async (req, res, next) => {
    const {error} = Joi.validate(req.query, imdbID)
    if(error) throw Error('Request body is not valid')
    if(0 >= (await dbMovie.countDocuments({"imdbID": req.query.imdbID}))) throw Error('Movie not found')
    const comments = await dbComment.find({"imdbID": req.query.imdbID}, 'text')
    res.json(comments)
})

router.post('/', async (req, res, next) => {
    const {error} = Joi.validate(req.body, comment)
    if(error) throw Error('Request body is not valid')
    if(0 >= (await dbMovie.countDocuments({"imdbID": req.body.imdbID}))) throw Error('Movie not found')
    res.json(req.body)
    await dbComment.create(req.body)
})

export default router

