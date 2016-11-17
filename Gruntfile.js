/*jslint node: true */
/*jshint strict:false */
'use strict';

module.exports = function(grunt) {

    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['Gruntfile.js', 'src/*.js', 'src/*.wppl'],
            options: {
                maxerr: 500,
                camelcase: true,
                nonew: true,
                curly: true,
                noarg: true,
                trailing: true,
                forin: true,
                noempty: true,
                node: true,
                eqeqeq: true,
                strict: false,
                evil: true,
                undef: false,
                bitwise: true,
                browser: true,
                gcl: true,
                newcap: false
            }
        },

        browserify: {
            options: {
                browserifyOptions: { debug: true },
                debug: true
            },
            'assets/<%= pkg.name %>.js': 'src/index.js'
        },

        exorcise: {
            bundle: {
                files: {
                    'assets/<%= pkg.name %>.js.map': ['assets/<%= pkg.name %>.js']
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                sourceMapIn: 'assets/<%= pkg.name %>.js.map',
                sourceMap: 'assets/<%= pkg.name %>.min.js.map'
            },
            build: {
                src: 'assets/<%= pkg.name %>.js',
                dest: 'assets/<%= pkg.name %>.min.js'
            }
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });

    grunt.registerTask('build', ['jshint', 'browserify', 'exorcise', 'uglify']);

    grunt.registerTask('default', ['dev']);

};
