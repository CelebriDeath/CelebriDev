'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        jshint: {
            dev: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: ['Gruntfile.js', 'routes/**/*.js', 'models/**/*.js', 'test/**/*.js', 'app/angular/**/*.js']
            }
        },

        jscs: {
            all: {
                options: {
                    config: ".jscsrc"
                },
                files: {
                    src: ['Gruntfile.js', 'routes/**/*.js', 'models/**/*.js', 'test/**/*.js', 'app/angular/**/*.js']
                }
            }
        },

        simplemocha: {
            all: {
                src: ['test/server-side/**/*.js']
            }
        },

        clean: {
            build: {
                src: ['build/']
            }
        },

        copy: {
            build: {
                expand: true,
                cwd: 'app/',
                src: ['**/*.html', '**/*.css', '**/*.png', 'fonts/**/*', 'img/**/*', 'vendors/lodash.js'],
                dest: 'build/',
                flatten: false,
                filter: 'isFile'
            }
        },

        browserify: {
            dev: {
                src: ['app/angular/**/*.js', 'app/react/**/*.js'],
                dest: 'build/bundle.js'
            },
            test: {
                src: ['test/client-side/*-test.js'],
                dest: 'test/client-side/test-bundle.js'
            },
            karmatest: {
                src: ['test/karma_tests/*_test.js'],
                dest: 'test/karma_tests/karma_test_bundle.js'
            },
            options: {
                transform: ['reactify', 'debowerify']
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }

    });

    grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha:all']);
    grunt.registerTask('test-server', ['simplemocha:all']);
    grunt.registerTask('default', ['test']);
    grunt.registerTask('build', ['clean', 'browserify', 'copy']);
    grunt.registerTask('build:test', ['test', 'browserify:test']);
    grunt.registerTask('test:client', ['browserify:karmatest', 'karma:unit']);
    grunt.registerTask('test:all', ['simplemocha:all', 'browserify:karmatest', 'karma:unit']);
};
