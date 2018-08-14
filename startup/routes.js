import movies from '../routes/movies'
import comment from '../routes/comment'
import errors from '../middlewares/error'

export default app => {
    app.use('/movies', movies)
    app.use('/comment', comment)
    app.use(errors)
    app.use( (req,res) => {res.status(404).json({message: 'Not Found'})} )
}