'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		qunit: {
			files: ['Game*.html']
		},
		jshint: {
			src: {
				options: {
					jshintrc: 'jshint.conf.json'
				},
				src: ['Game*.js']
			}
		},
		watch: {
			files: ['Game*.js', 'Game*.html'],
			tasks: ['qunit']
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task.
	grunt.registerTask('default', ['jshint', 'qunit']);

};
