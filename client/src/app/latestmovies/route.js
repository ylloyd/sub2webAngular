(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.movieLatest', {
        url: '/movielatest',
        views: {
          '@': {
            template: '<movie-latest></movie-latest>',
          }
        }
      });
  }

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function HomeCtrl() {
    var vm = this;
  }

  angular.module('movie-latest', ['movieLatestDirective'])
    .config(config)
})();
