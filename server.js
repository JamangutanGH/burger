var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();

/*serving static content for the app via public dir*/
app.use(express.static('public'));

/* parse application/x-www-form-urlencoded*/
app.use(bodyParser.urlencoded({ extended: true}));

/*parse application/json*/
app.use(bodyParser.json());

// set Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

//import routes and allow server to access them
var routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(port, function(){
    console.log(`Server listening on: http://localhost:${port}...`)
})