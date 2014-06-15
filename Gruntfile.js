module.exports = function(grunt) {

  // Project configuration.
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),

		text2datauri: {
			'./public/out.uri': './public/index.html'
		}

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('text2datauri');

	// Default task(s).
	grunt.registerTask('default', ['text2datauri']);

};