db.user.drop();
db.role.drop();
db.route.drop();

users = [{'password': 'passwd', 'is_active': false, 'email': 'mary@demo.org', 'role':[1]}, 
         {'password': 'foobar', 'is_active': true, 'email': 'wendy@abc.com', 'role':[2]}, 
         {'password': 'passwd', 'is_active': false, 'email': 'dustin@demo.org', 'role':[1,2]}, 
         {'password': 'passwd', 'is_active': true, 'email': 'jenny@demo.org','role':[2]}, 
         {'password': 'blah', 'is_active': true, 'email': 'fred@gmail.ca','role':[2]}];
roles = [{'name':'admin', 'id':1}, {'name':'mamber', 'id':2}, {'name':'guest', 'id':3}];
routes = [{'path':'/home', 'method':'get', 'role': [3]}, 
		  {'path':'/about', 'method':'get', 'role':3},
		  {'path':'/users', 'method':'get', 'role':[1]},
		  {'path':'/user/:id', 'method':'get', role:[1,2]}
		];

db.user.insert(users);
db.role.insert(roles);
db.route.insert(routes);

db.user.ensureIndex({email: 1}, {unique: true});
db.role.ensureIndex({name: 1}, {unique: true});
db.route.ensureIndex({path: 1, method :1}, {unique: true});
