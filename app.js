
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var lost = require('./routes/lost');
var lost_B = require('./routes/lost_B');
var found = require('./routes/found');
var signin = require('./routes/signin');
var create = require('./routes/create');
var post = require('./routes/post');
var add = require('./routes/add');
var account = require('./routes/account');
var addAcc = require('./routes/addAcc');
var sortLost = require('./routes/sortLost');
var sortFound = require('./routes/sortFound');
var sortNewLost = require('./routes/sortNewLost');
var sortNewFound = require('./routes/sortNewFound');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/lost', lost.view);
app.get('/lost_B', lost_B.view);
app.get('/found', found.viewLF);
app.get('/signin', signin.viewLF);
app.get('/create', create.viewLF);
app.get('/post', post.viewLF);
app.get('/add', add.addPost);
app.get('/account', account.view);
app.get('/addAcc', addAcc.addAcc);
app.get('/sortLost', sortLost.view);
app.get('/sortFound', sortFound.view);
app.get('/sortNewLost', sortNewLost.view);
app.get('/sortNewFound', sortNewFound.view);




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
