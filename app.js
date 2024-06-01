<<<<<<< HEAD
const express = require('express');
const app = express();
const morgan = require('morgan');

//middleware to parse the request body
app.use(express.json());

//middleware to log the request
app.use(morgan('dev'));

//export the app module
=======
const express = require('express');
const app = express();
const morgan = require('morgan');

//middleware to parse the request body
app.use(express.json());

//middleware to log the request
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('get request to the homepage');
});

app.post('/',(req, res) => {
  //console.log(req.body);
  res.send('post request to the homepage');
});

//export the app module
>>>>>>> 0b815c40779e97aa1319ec5315b809ae3c59cdff
module.exports = app;