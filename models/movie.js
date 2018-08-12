import mongoose from 'mongoose'

export default mongoose.model('movie', new mongoose.Schema({
    _id: {type: mongoose.Schema.ObjectId, default: mongoose.Types.ObjectId, select: false},
    __v: {type: Number, select: false},
    Title: {type: String, required: true},
    Year: {type: String, required: true},
    Rated: {type: String, required: true},
    Released: {type: String, required: true},
    Runtime: {type: String, required: true},
    Genre: {type: String, required: true},
    Director: {type: String, required: true},
    Writer: {type: String, required: true},
    Actors: {type: String, required: true},
    Language: {type: String, required: true},
    Country: {type: String, required: true},
    Awards: {type: String, required: true},
    Poster: {type: String, required: true},
    Ratings: {type: Array, required: true},
    Metascore: {type: String, required: true},
    imdbRating: {type: String, required: true},
    imdbVotes: {type: String, required: true},
    imdbID: {type: String, required: true, unique: true},
    Type: {type: String, required: true},
    DVD: {type: String, required: true},
    BoxOffice: {type: String, required: true},
    Production: {type: String, required: true},
    Website: {type: String, required: true},
    Response: {type: String, required: true, select: false},

    Comments: {type: Array, required: true}
}))
