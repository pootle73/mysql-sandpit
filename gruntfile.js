module.exports = function (grunt) {
  "use strict";

  var outDir = './server';
  var buildTasks = ['newer:tslint', 'ts'];

  grunt.initConfig({
    ts: {
      default: {
        tsconfig: true
      }
    },
    tslint: {
      options: {
        configuration: 'tslint.json',
        rulesDirectory: 'node_modules/tslint-microsoft-contrib'
      },
      files: {
        src: ['src/*.ts']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', buildTasks);
  grunt.registerTask('default', ['build']);
};
