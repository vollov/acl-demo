module.exports = function(app) {
	app.get('/users', function(req,res){
		res.render('partials/user/list');
	});
	
	app.get('/user', function(req,res){
		res.render('partials/user/detail');
	});
	
	app.get('/user/:id', function(req,res){
		res.render('partials/user/detail');
	});
	/*
	app.get('/user/:id', function(req,res){
		var name = req.params.name;
		res.render('partials/' + name);
	});


	*/
};