//import the app module
const app = require('./app');

//import the mongoose module
const mongoose = require('mongoose');

//log the message connecting to the MongoDB
console.log('Connecting to MongoDB...');

<<<<<<< HEAD
// import config module
const config = require('./utils/config');


mongoose.connect(config.MONGODB_URI)
=======
//import the dotenv module
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI)
>>>>>>> 0b815c40779e97aa1319ec5315b809ae3c59cdff
 .then(
    () => {
        console.log('Connected to MongoDB');

        // start the server
      app.listen(3001, () => {
       console.log("Server is running on http://localhost:3001");
      });
    }
 )
 .catch((error) => {
    console.log('Error connecting to MongoDB: ', error.message);
 });
 
