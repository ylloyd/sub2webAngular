(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.moviePopular', {
        url: '/movie',
        views: {
          '@': {
            template: '<movie-popular></movie-popular>',
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

  angular.module('movie-popular', ['moviePopularDirective'])
    .config(config)
})();
