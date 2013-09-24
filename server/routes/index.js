module.exports = function(app) {
	app.get('/', function(req,res){
		res.render('index');
	});
	
	app.get('/partials/:name', function(req,res){
		var name = req.params.name;
		res.render('partials/' + name);
	});
	
	app.get('/partials/:module/:name', function(req,res){
		var name = req.params.name;
		var module = req.params.module;
		res.render('partials/' + module + '/' +name);
	});
};