import mongoose from 'mongoose'

// Database schema
const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

// SQL tables = Collections
export default mongoose.model('cards', cardSchema);