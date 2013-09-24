
module.exports = function(app) {
	app.get('/', function(req,res){
		res.render('index');
	});
	
	app.get('/:name', function(req,res){
		var name = req.params.name;
		res.render(name);
	});
	
	//redirect all others to the index (HTML5 history)
//	app.get('*', function(req,res){
//		res.render('index');
//	});
};