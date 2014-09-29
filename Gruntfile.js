module.exports = function(grunt) {
    
    // configure the tasks
    grunt.initConfig({

        copy: {
            build: {
                cwd: 'src',
                src: [ '**', '!src/assets/css/*.less' ], // no copia los .less y los .jade
                dest: 'Domofera_MOOC',
                expand: true
            },
        },
        
        clean: {
            build: {
                //src: [ 'Domofera_MOOC' ]
            },
            stylesheets: {
                src: [ 'Domofera_MOOC/assets/css/*.{css,less}', '!Domofera_MOOC/assets/css/main.css' ]  // borra todos los css excepto style.css
            },
            scripts: {
                //src: [ 'build/js/*.js', '!build/js/main.js' ]           // borra todos los js excepto main.js
            },
        },
        
        // estilos
        less: {
            build_less:{
                options: {
                    cleancss: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/assets/css',
                        src: ['*.less'],
                        dest: 'Domofera_MOOC/assets/css',
                        ext: '.css'
                    }
                ]
            },
        },
        autoprefixer: {
            build: {
                expand: true,
                cwd: 'Domofera_MOOC',
                src: [ '**/*.css' ],
                dest: 'Domofera_MOOC/'
            }
        },
        cssmin: {
            build: {
                files: {
                    'Domofera_MOOC/assets/css/main.css': [ 'Domofera_MOOC/assets/css/*.css' ]
                }
            }
        },
        
        // scripts
        uglify: {
            build: {
                options: {
                    mangle: false // previene que cambie nombre de variables
                },
                files: {
                    //'build/js/main.js': [ 'build/js/*.js' ]
                }
            }
        }
    });

    
    // load the tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-newer');
    
    
    // define the tasks
    grunt.registerTask('estilos', [ 'less:build_less', 'autoprefixer', 'cssmin' ]);
   // grunt.registerTask('scripts', [ 'uglify', 'clean:scripts' ]);
    grunt.registerTask('compilar', ['copy', 'estilos', 'clean' /*, 'scripts'*/ ]);
    
    grunt.registerTask('default', [ 'compilar']); // esta se puede llamar solo con escribir "grunt" en consola
};