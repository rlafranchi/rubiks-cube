/*global module:false*/

/*Generated initially from grunt-init, heavily inspired by yo webapp*/

module.exports = function(grunt) {
  'use strict';

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);
  //require('load-grunt-tasks')(grunt);

  // Load grunt config
  require('load-grunt-config')(grunt, {
    init: true,
    data: {
      config: {
        // Configurable paths
        app: 'app',
        dist: 'dist'
      }
    },
  });

  grunt.initConfig({
    buildcontrol: {
      options: {
        dir: 'dist',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:example_user/example_webapp.git',
          branch: 'gh-pages'
        }
      },
    }
  });
};
