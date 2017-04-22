module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      css: {
        src: [
          'node_modules/flipclock/src/flipclock/css/flipclock.css'
        ],
        dest: 'style/flipclock.css',
      },
      js: {
        src: [     
          'node_modules/flipclock/src/flipclock/js/vendor/*.js',
          'node_modules/flipclock/src/flipclock/js/libs/core.js',
          'node_modules/flipclock/src/flipclock/js/libs/*.js',
          'node_modules/flipclock/src/flipclock/js/faces/twentyfourhourclock.js',
          'node_modules/flipclock/src/flipclock/js/faces/*.js',
          'node_modules/flipclock/src/flipclock/js/lang/*.js',
        ],
        dest: 'js/flipclock.js',
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        files: {
          'js/flipclock.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['<%= concat.js.src %>'],
        tasks: ['concat'],
      },
      css: {
        files: ['<%= concat.css.src %>'],
        tasks: ['concat'],
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);
};