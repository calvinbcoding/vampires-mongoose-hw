const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/vampireData';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.connection.on('connected', ()=> {
    console.log(`Mongoose connect to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose diconnected to ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose err: ${err}`);
});