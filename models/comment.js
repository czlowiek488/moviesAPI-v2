import mongoose from 'mongoose'

export default mongoose.model('comment', new Schema({
    imdbID: {type: String, required: true},
    text: {type: String, required: true},
    _id: {type: mongoose.Schema.ObjectId, default: mongoose.Types.ObjectId, select: false},
    __v: {type: Number, select: false},
}))