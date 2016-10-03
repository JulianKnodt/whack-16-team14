//To install stuff do npm install from terminal in the root directory of the github repository.
//In order to install another package and save it, do npm i --save <PACKAGE_NAME>
//To start the server, run npm start from the root directory
//To have the server watch for files changes and restart on file change, do npm run startdev
// :D

//Express is a framework built on top of nodejs, which allows for easy server setup.
//If you want to deploy on heroku, it would be pretty quick and painless to do so.
//Just link the github repository and heroku will automatically build for you.
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/client'));
app.get('/', function(req, res) {
  res.render('index.html');
});
//Add other routes here
//If you want, it might be more concise to store routes in a router 

//To open the app go to http://localhost:3000
//Or go to 127.0.0.1:3000
app.listen(3000, function(data) {
  //You could change the port number to 80 which is the default port when accessing through http aka opening in browser.
  console.log('App is listening on port 3000');
});