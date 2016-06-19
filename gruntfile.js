/**
 * Created by andrey on 19.06.16.
 */

module.exports = function (grunt) {
    grunt.initConfig({
        notify: {
            test: {
                options: {
                    title  : 'SCSS to CSS',
                    message: 'main.css successfully generated...'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', ['notify:test']);
};