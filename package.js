Package.describe({
	summary: "Latest version of Ionicons",
	version: "2.0.1-1",
	name: "pagebakers:ionicons",
	git: "https://github.com/Pagebakers/meteor-ionicons.git"
});

Package.on_use(function (api){
	api.add_files([
    'ionicons.js'
  ], 'client');
});
