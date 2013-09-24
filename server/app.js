var express = require('express');

var app = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {
    layout: false
  });
  
  app.use(express.favicon());
  //app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/../client'));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

//Views
require('./routes/index')(app);
//require('./routes/user')(app);
/*
	app.get('*', function(req,res){
		res.render('index');
	});
	*/
//API
require('./api/user')(app);

app.listen(80, '0.0.0.0');
console.log("Express server listening...");
