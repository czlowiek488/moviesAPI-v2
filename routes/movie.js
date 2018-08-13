import express from 'express'
import Joi from 'joi'
import title from '../schemas/title'
import fetch from 'node-fetch'
import dbMovie from '../models/movie'
const router = express.Router()

router.post('/', async (req, res, next) => {
    const {error} = Joi.validate(req.body, title)
    if(error) throw Error('Bad Request')
    const url = `http://www.omdbapi.com/?t=${req.body.title}&apikey=${process.env.OMDBAPI_KEY}`
    const data = await fetch(url)
    const movie = await data.json()
    if(movie.Response != "True") throw Error('Not Found')
    await dbMovie.update({"imdbID": movie.imdbID}, movie, {upsert: true})
    res.json(movie)
})

router.get('/', async (req, res, next) => {
    const movies = await dbMovie.find()
    res.json(movies)
})

export default router

