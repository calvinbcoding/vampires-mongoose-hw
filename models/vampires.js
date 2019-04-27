const mongoose = require('mongoose');

const vampireSchema = mongoose.Schema({
    name: String, 
    hair_color: String, 
    eye_color: String,
    dob: new Date(1971, 2, 13, 7, 47),
    loves: [String, String, String],
    location: 'String, Minnesota, US',
    gender: Boolean,
    victims: Number
})