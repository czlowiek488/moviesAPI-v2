import express from 'express'
import {oneOf, query} from 'express-validator/check'
import valid from '../middlewares/valid'
import fetch from 'node-fetch'
import dbMovie from '../models/movie'
const router = express.Router()

router.get('/'
    , query('title').isString().isLength({ min:1 })
    , valid
    , async (req,res,next) => {
        const url = `http://www.omdbapi.com/?t=${req.query.title}&apikey=${process.env.OMDBAPI_KEY}`
        const data = await fetch(url)
        const movie = await data.json()
        if(movie.Response != "True") res.json()
        else {
            res.json(movie)
            await dbMovie.update({"imdbID": movie.imdbID}, movie, {upsert: true})
        }
    }
)

export default router

