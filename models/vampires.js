const mongoose = require('mongoose');
const vampireInfo = require('../db/populateVampires')
const Schema = mongoose.Schema;



const vampireSchema = new Schema({
    name: {type: String, required: true},
    hair_color: {type: String, required: true, defaultStatus: 'blonde'}, 
    eye_color: {type: String, required: true},
    loves: [{type:String, required: true}],
    dob: {type: Date, required:true},
    location: {type: String, required: true},
    gender: {type: String, required: true},
    victims: {type: Number, min:1, required: true,}
});
    // loves: {['String'] required: true},
    // location: 
    // {
    //     city: String,
    //     state: String,
    //     country: String
    // },
    // gender: {'m': true, 'f':false},
    // victims: Number
const Vampire = mongoose.model('vampireInfo', vampireSchema);

module.exports = Vampire;