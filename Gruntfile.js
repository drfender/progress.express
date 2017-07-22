module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'src/css/min.style.css': 'src/scss/*.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 10 versions', 'ie 8', 'ie 9']
      },
      dist: {
        files: {
          'dist/css/final.min.css': 'src/css/min.style.css'
        }
      }
    },
    // concat: {
    //   options: {
    //     separator: '/*next*/',
    //   },
    //   work_with_css: {
    //     src: ['src/css/bootstrap.min.css', 'src/css/min.style.css'],
    //     dest: 'dist/css/final.min.css',
    //   },
    // },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: 'src/scss/style.scss',
        tasks: ['sass','autoprefixer']
      },
      html: {
        files: ['dist/*.html']
      }
    },

    express: {
      all: {
        options: {
          port: 1300,
          hostname: 'localhost',
          bases: ['dist']
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-express');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['newer:sass', 'autoprefixer']);
  grunt.registerTask('server', ['express','watch']);

}
