import mongoose from 'mongoose';

const animeSchema = mongoose.Schema({
    name: String,
    mc: String,
    status: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        defaul: new Date()
    }
})

const Anime = mongoose.model('Anime', animeSchema);

export default Anime;