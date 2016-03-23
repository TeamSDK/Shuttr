var express  = require('express');
var app      = express();                   // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var env = require('node-env-file');         //Environment variables for local development
var request = require('request');

env(__dirname + '/.env');
var NASA_API_KEY = process.env.NASA_API_KEY
var FLICKR_API_KEY = process.env.FLICKR_API_KEY

var port = process.env.PORT || 3000;

// Middleware Configuration 

app.use(express.static(__dirname + '/../client'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json


//////////////////////////////////////////////////////////////////
//Set up request in order to avoid CORS issue with flickr
///////////////////////////////////////////////////////////////////

app.get('/api/photos/:photoId', function (req, ourResponse, next) {
  
  // set options
  var options = {
    // append the user's handle to the url
    url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + FLICKR_API_KEY + '&text=' + req.params.photoId + '&per_page=10&page=1&format=json&nojsoncallback=1'
  };

  // Send a get request to twitter, notice that the response that we send in the callback is the response from the outer-function passed in through closure.
  request(options, function (err, responseFromFlickr, body) {
    // console.log(JSON.parse(body));
    ourResponse.status(200).send(JSON.parse(body));
  });
});


// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port:" + port);


