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
	
	grunt.registerTask('workshop', function() {
		var pages = ['00-start.html','01-fail.html','02-fail.html','03-fail.html','04-fail.html','05-fail.html','06-fail.html','07-fail.html','08a-fail.html','08b-fail.html','08c-fail.html','09-fail.html','10-fail.html','11-fail.html','12-fail.html'];		
		var html;
		for (var i = 0; i < pages.length; i++) {
			html = grunt.file.read('./walkthrough/' + pages[i]);
			html = html.replace(/( Game Code \*+)[\s\S]+?(<\/script>)/, '$1\n\n\n\n$2');
			grunt.file.write('./workshop/' + pages[i].replace('-fail', ''), html);
		}
	});
	
	// Default task.
	grunt.registerTask('default', ['qunit']);

};
