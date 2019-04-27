const mongoose = require('mongoose');
const Vampires = require('../db/populateVampires')
const Schema = mongoose.Schema;

const Name = new Schema({
    first_name: "", type: String, required: true,
    last_name: "", type: String, required: true});

const dob = new Date({
    year: Number,
    month: Number,
    day: Number,
    hour: Number,
    minute: Number
});


const vampireSchema = new Schema({
    Name: ({
        first_name: "", type: String, required: true,
        last_name: "", type: String, required: true}),
    hair_color: {type: String, required: true, defaultStatus: 'blonde'}, 
    eye_color: {type: String, required: true},
    dob: Date({
        year: Number,
        month: Number,
        day: Number,
        hour: Number,
        minute: Number
    })
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
const Vampire = mongoose.model(Vampires, vampireSchema)

module.exports = Vampire;