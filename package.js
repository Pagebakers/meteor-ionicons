Package.describe({
	summary: "Latest version of Ionicons"
});

Package.on_use(function (api){
	api.add_files('fonts/ionicons.eot', 'client');
	api.add_files('fonts/ionicons.svg', 'client');
	api.add_files('fonts/ionicons.ttf', 'client');
	api.add_files('fonts/ionicons.woff', 'client');
	api.add_files('ionicons.css', 'client');
	
	//font path override
	api.add_files('path-override.css', 'client');
});