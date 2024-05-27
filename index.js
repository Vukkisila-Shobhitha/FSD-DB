//import the app module
const app = require('./app');

//import the mongoose module
const mongoose = require('mongoose');

//log the message connecting to the MongoDB
console.log('Connecting to MongoDB...');

mongoose.connect(`mongodb+srv://shobitha6294:shobi6294@mongodb1.wvf3nob.mongodb.net/`)
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
 
