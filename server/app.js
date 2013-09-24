var express = require('express')
    , fs = require('fs');

var app = express();

app.configure(function(){
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/../client'));
  app.use(app.router);
//  app.use(function(req, res) {
////    res.sendfile(__dirname + '/../client/index.html');
//    fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, content) {
//      res.send(content);
//	});
//  });
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

//Views
//app.get('/', function(req,res){
//	res.render('index');
//});
//
app.get('*', function(req, res, next) {
	fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, content) {
      res.send(content);
	});
});
//require('./routes/index')(app);

//API
require('./api/user')(app);

app.listen(3000, '0.0.0.0');
console.log("Express server listening...");
