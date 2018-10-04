import mongoose from 'mongoose'

export default mongoose.model(
  'comment',
  new mongoose.Schema({
    imdbID: { type: String, required: true },
    text: { type: String, required: true },
    username: { type: String, default: 'anonymous' },
    createdAt: { type: String, default: new Date().getTime() },
    _id: {
      type: mongoose.Schema.ObjectId,
      default: mongoose.Types.ObjectId,
      select: false
    },
    __v: { type: Number, select: false }
  })
)
