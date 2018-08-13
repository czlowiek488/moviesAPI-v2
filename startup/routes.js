import movie from '../routes/movie'
import comment from '../routes/comment'
import errors from '../middlewares/error'

export default app => {
    app.use('/movie', movie)
    app.use('/comment', comment)
    app.use(errors)
}