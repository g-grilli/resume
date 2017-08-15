var express = require('express');
var app = express();
var pgp = require('pg-promise')({
 promiseLib: Promise
});

app.set('view engine', 'hbs');
app.use('/static', express.static('public'));


app.get('/main', function (request, response) {
 response.render('main.hbs', {});
}); 

app.get('/test', function (request, response) {
 response.render('test.hbs', {});
}); 
 
app.get('/', function (request, response) {
 response.render('index.hbs', {});
});
 
 
 
 
var PORT = process.env.PORT || 8000;
 app.listen(PORT, function () {
   console.log('I am awakening... I feel awake... I am alive on PORT ' + PORT + '!');
});