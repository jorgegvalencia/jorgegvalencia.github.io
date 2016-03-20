module.exports = function(grunt) {

    // Configuración de Grunt
    var settings = {
        watch: {
            files: './assets/css/sass/**/*.scss',
            tasks: [ 'sass', 'cssmin' ]
        },
        sass: require( './grunt_tasks/sass' ).task,
        cssmin: require( './grunt_tasks/cssmin' ).task
    };

    // Cargamos configuración de Grunt
    grunt.initConfig(settings);

    // Cargamos plugins (1)
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Definimos tareas disponibles para grunt-cli (2)
    grunt.registerTask('default', ['watch', 'sass']);
};