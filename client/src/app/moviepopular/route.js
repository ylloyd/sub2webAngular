(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.moviePopular', {
        url: '/moviepopular',
        views: {
          '@': {
            template: '<movie-popular></movie-popular>' ,
          }
        }
      });
  }

  angular.module('moviePopular', ['moviePopularDirective'])
    .config(config);
})();
