module.exports = function(grunt) {
	grunt.initConfig ({
		// basic setting 
		pkg: grunt.file.readJSON('package.json'),
		
        sass: {                              // Task
		    dist: {                            // Target
		      options: {                       // Target options
		        style: 'expanded'
		      },
		      files: {                         // Dictionary of files
		        'dist/css/main.css': 'dist/scss/main.scss',       // 'destination': 'source'
		        
		      }
		    }
		  },
		
		watch: {
		    'normal': {
	    	  options:{livereload:true},
		      files: ['dist/**', 'dist/js/**', 'dist/css/**', 'dist/scss/**'],
		      tasks: [ 'sass'],
		    },
		},
		express:{
            all:{
                options:{
                    port:9000,
                    hostname:'localhost',
                    bases:['dist/'], //where yout localhost:9000/ is
                    livereload:true 
                }
            }
        },
		
	}); //CLOSE grunt.initConfig
	// load the plug in
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');  
	grunt.loadNpmTasks('grunt-contrib-sass');
	// do the task
	grunt.registerTask('server', ['express','watch', 'sass']);

};//CLOSE FUNCTION