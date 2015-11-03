(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.movieNowPlaying', {
        url: '/movie_now_playing',
        views: {
          '@': {
            template: '<movie-now_playing></movie-now_playing>',
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

  angular.module('movie-now_playing', ['movieNowPlayingDirective'])
    .config(config)
})();
