var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var member = require('./routes/members');
var events = require('./routes/events');
var app = express();

var path = 3000;
//set static folder
app.use(express.static(path.join(__dirname,'views')));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api/v1/members', member);
app.use('/api/v1/events', events);
//app.use('/api', movies);

app.listen(port, function(){
  console.log("server started on port "+port);
});
