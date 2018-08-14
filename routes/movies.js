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
        , data = await fetch(url).catch(err=> {if(err) throw Error('Service Unavailable')})
        , movie = await data.json()
    if(movie.Response != "True") throw Error('Not Found')
    if(isNaN(movie.Year)) movie.Year = 0
    if(isNaN(movie.imdbRating)) movie.imdbRating = 0
    res.json(movie)
    await dbMovie.update({"imdbID": movie.imdbID}, movie, {upsert: true})
})

router.get('/', async (req, res, next) => {
    let sort = req.query.sort
    if(undefined != sort){
      sort = sort.split(',')
      sort.forEach( (element, index) => { 
        if(element.indexOf(':') == -1 || element.split(':').length > 2) throw Error(`Bad Request`)
        sort[index] = element.split(':')
        if(sort[index][1] != -1 && sort[index][1] != 1) throw Error(`Bad Request`)
        })
    }
    const filter = {  
        YearMin: isNaN(req.query.YearMin) ? 0 : req.query.YearMin,
        YearMax: isNaN(req.query.YearMax) ? Infinity : req.query.YearMax,
        imdbRatingMin: isNaN(req.query.imdbRatingMin) ? 0 : req.query.imdbRatingMin,
        imdbRatingMax: isNaN(req.query.imdbRatingMax) ? 10 : req.query.imdbRatingMax
    }
        , movies = await  dbMovie.find()
            .where('Year').gte(filter.YearMin).lte(filter.YearMax)
            .where('imdbRating').gte(filter.imdbRatingMin).lte(filter.imdbRatingMax)
            .where('Language').regex(RegExp(req.query.Language))
            .where('Rated').regex(RegExp(req.query.Rated))       
            .where('Actors').regex(RegExp(req.query.Actors))
            .where('Director').regex(RegExp(req.query.Director))
            .where('Writer').regex(RegExp(req.query.Writer))
            .where('Production').regex(RegExp(req.query.Production))
            .where('Genre').regex(RegExp(req.query.Genre))
            .where('Country').regex(RegExp(req.query.Country))
            .sort(sort) 
    res.json(movies)
})

export default router

