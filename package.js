Package.describe({
	summary: "Latest version of Ionicons",
	version: "2.0.0",
	name: "pagebakers:ionicons",
	git: "https://github.com/Pagebakers/meteor-ionicons.git"
});

Package.on_use(function (api){
	api.add_files([
    'fonts/ionicons.eot',
    'fonts/ionicons.svg',
    'fonts/ionicons.ttf',
    'fonts/ionicons.woff',
    'css/ionicons.css'
  ], 'client');
});
