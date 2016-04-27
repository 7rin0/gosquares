module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/js/main.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        uglify: {
            min: {
                files: {
                    'min/js/main.min.js': ['src/js/main.js']
                }
            }
        },
        cssmin: {
            min: {
                files: {
                    'min/css/main.min.css': ['src/css/main.css']
                }
            }
        },
        htmlmin: {
            min: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'index.html': 'src/html/index.html'
                }
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'src/images',
                    src: ['**/*.{png,jpg,gif,ico}'],
                    dest: 'min/images'
                }]
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'uglify', 'cssmin', 'htmlmin:min', 'watch']
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks
    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'htmlmin:min', 'watch']);

};
