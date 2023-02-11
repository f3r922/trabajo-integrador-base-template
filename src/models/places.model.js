const mongoose = require('mongoose')
const { Schema } = mongoose

const placeSchema = new Schema({
    name: String,
    location: String,
    latitude: Number,
    longitude: Number,
    description: String,
    category: String,
    filename: String,
    path: String,
    acerca: String
})

const Place = mongoose.model('Place', placeSchema)

module.exports = {Place}