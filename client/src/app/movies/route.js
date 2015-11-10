(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.movie', {
        url: '/movie',
        views: {
          '@': {
            template: '<movie-popular></movie-popular>',
          }
        }
      })
      .state('root.movie.detail', {
        url: '/detail/:id',
        views: {
          '@': {
            template: '<movie-detail></movie-detail>',
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
