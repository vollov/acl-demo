var express = require('express');

var app = express();

app.configure(function(){
//  app.use(express.logger('dev'));
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
//require('./routes/index')(app);

//API
require('./api/user')(app);

app.listen(3000, '0.0.0.0');
console.log("Express server listening...");
