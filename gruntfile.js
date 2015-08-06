module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

     concat: {   
    dist: {
        src: [
            'src/js/*.js', // All JS files
        ],
        dest: 'src/js/production.js',
		
		src: [
            'src/css/*.css', // All CSS files
        ],
        dest: 'src/css/allcss.css',
    }
},



	uglify: {
    build: {
        files: {
            'dist/js/production.min.js': ['src/js/production.js']
        }
    }
},


imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'src/images/*',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/images'
        }]
    }
},


 // configure cssmin to minify css files ------------------------------------
    cssmin: {
      build: {
        files: {
          'dist/css/style.min.css': 'src/css/allcss.css'
        }
      }
    },

  });
    
	


    // 3. Where we tell Grunt we plan to use this plug-in.
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
    grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	
	grunt.loadNpmTasks('grunt-autoprefixer');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'autoprefixer','cssmin']);

};