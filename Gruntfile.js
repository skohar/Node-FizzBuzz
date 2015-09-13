module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    simplemocha: {
      all : {
        src: ['test/mocha/**/*.js']
      },
    },
  });

  grunt.registerTask('test', ['simplemocha']);
};
