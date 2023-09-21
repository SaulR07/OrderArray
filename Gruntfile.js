module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: "src/index.js",
				dest: "build/<%= pkg.name %>.min.js"
			}
		}
	});

	grunt.registerTask("init", "Log some stuff.", function () {
		grunt.log.write("Logging some stuff...").ok();
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks("grunt-contrib-uglify");

	// Default task(s).
	grunt.registerTask("default", ["init", "uglify"]);
};
