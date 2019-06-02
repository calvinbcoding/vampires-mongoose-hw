// 1. Require your node modules
const mongoose = require('mongoose');

//2. Require your model (and possibly your extra data source);
const vampire = require('../models/vampires')

const vampireInfo = require('../db/populateVampires');

//
// 3. Connect your database and collection name
const connectionString = 'mongodb://localhost/vampireInfo';

// 4. Open your mongoose connection

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

//I also set up error listeners like we do in our lessons:
mongoose.connection.on('connected', ()=> {
    console.log(`Mongoose connect to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose diconnected to ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose err: ${err}`);
});





/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// vampire.collection.insertMany(vampireInfo, (err, data) => {
//     console.log(vampireInfo);
//     mongoose.connection.close();
// });
// ### Add some new vampire data
// vampire.create({
//     name: 'Calvin',
//     hair_color: 'blonde',
//     eye_color: 'blue',
//     dob: 1987,
//     loves: 'finishing this homework',
//     location: 'Denver', 
//     gender: 'm',
//     victims: '1001'
// }, (err, newVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(newVamp);
//     }
// });
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
//find all vampires with less than or equal to150 victims
// vampire.find({victims: {$lte: 150}}, 
// (err, vampsWithouManyKills) => {
// if(err){
//     console.log(err);
// }else{
//     console.log(vampsWithouManyKills);
// }
// });
//have greater than 500 victimes:
// vampire.find({victims: {$gt: 500}}, 
// (err, vampsWithManyKills) => {
// if(err){
//     console.log(err);
// }else{
//     console.log(vampsWithManyKills);
// }
// });

//victim count not equal to 210234
// vampire.find({victims: {$ne: 210234}}, 
//     (err, vampsWithoutTheseKills) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(vampsWithoutTheseKills);
//     }
//     });


//bw 150 and 500 victims:
// vampire.find({victims: {$gt: 150, $lt: 500}}, 
//     (err, vampsWithBetweenKills) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(vampsWithBetweenKills);
//     }
//     });




//all females vamps:
// vampire.find({gender: 'f'},
//  (err, vampChicks)=>{
//         if(err){
//             console.log(err);
//         } else { 
//             console.log(vampChicks);
//         }
//     });

/////////////////////////////////////////////////
// ### Select by exists or does not exist
//  vampire.find({title: {$exists: true}}, (err, vampsWithTitles)=>{
//     if(err){
//         console.log(err);
//     } else { 
//         console.log(vampsWithTitles);
//     }
// });


/////////////////////////////////////////////////
// // ### Select with OR
// vampire.find({$or: [{eye_color: 'blue'}, {hair_color: 'brown'}] },
// (err,vampsWithDiffs) => {
// //     if(err){
// //         console.log(err);

// //     } else { 
//         console.log(vampsWithDiffs);
//     }
// });
/////////////////////////////////////////////////
//### Select objects that match one of several values
//have title:
// vampire.find({
//     title: {$exists: true}},
 
// (err, vampName) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampName);
//     }
//   });

//have no vics:

// vampire.find({
//     victims: {$exists: false}},
 
// (err, vampNoVics) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampNoVics);
//     }
//   });
//title AND no victims
// vampire.find({
//     name: {$exists: true},
//     victims: {$exists: false}
// }, 
// (err, vampNameAndVics) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampNameAndVics);
//     }
//   });


//have title, and victims amount greater than 1000:

// vampire.find({
//     title: {$exists: true},
//     victims: {$gt: 1000}},
 
// (err, vampNameAndManyVics) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampNameAndManyVics);
//     }
//   });





/////////////////////////////////////

///### Select with OR
// Select all the vampires that:

// 1. are from New York, New York, US or New Orleans, Louisiana, US

// vampire.find({
//     $or: [
//         {location: 'New York, New York, US'},
//         {location: 'New Orleans, Louisiana, US'}
//     ] 
// },
// (err, vampFromNYAndLS) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampFromNYAndLS);
//     }
//   });



// 2. love brooding or being tragic

// vampire.find({
//     $or: [
//         {loves: 'brooding'},
//         {loves: 'being tragic'}
//     ] 
// },
// (err, vamps) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vamps);
//     }
//   });
// 3. have more than 1000 victims or love marshmallows
// vampire.find({
//     $or: [
//         {victims: {$gt: 1000}},
//         {loves: 'marshmallows'}
//     ] 
// },
// (err, vampsIncludeCalvin) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vampsIncludeCalvin);
//     }
//   });


// 4. have red hair or green eyes
// vampire.find({
//     $or: [
//         {hair_color: 'red'},
//         {eye_color: 'green'}
//     ] 
// },
// (err, vamps) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(vamps);
//     }
//   });
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 5 - selected more vampires"
// <hr></hr>
/////////////////////////////////////////////////
//### Negative Selection


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
