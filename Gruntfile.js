'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		qunit: {
			files: ['Game.html']
		},
		watch: {
			files: ['Game.html'],
			tasks: ['qunit']
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('walkthrough15', function() {
		var pages = ['01-fail.html','01-pass.html','02-fail.html','02-pass.html','03-fail.html','03-pass.html','04-fail.html','04-pass.html','05-fail.html','05-pass.html','06-fail.html','06-pass.html','07-fail.html','07-pass.html','08-fail.html','08-pass.html','09-fail.html','09-pass.html','10-fail.html','10-pass.html','11-fail.html','11-pass.html','12-fail.html','12-pass.html'];		
		var find1 = /\/\*\nQUnit[\s\S]+?\*\/\n/;
		var repl1 = '';
		var html;
		for (var i = 0; i < pages.length; i++) {
			html = grunt.file.read('./walkthrough/' + pages[i]);
			grunt.file.write('./walkthrough/' + pages[i], html.replace(find1, repl1));
		}
	});
	
	// Default task.
	grunt.registerTask('default', ['qunit']);

};
