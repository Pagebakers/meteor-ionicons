Package.describe({
	summary: "Latest version of Ionicons"
});

Package.on_use(function (api){
	api.add_files([
    'fonts/ionicons.eot',
    'fonts/ionicons.svg',
    'fonts/ionicons.ttf',
    'fonts/ionicons.woff',
    'css/ionicons.css',
    'path-override.css'
  ], 'client');
});