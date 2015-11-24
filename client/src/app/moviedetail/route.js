(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.movie.detail', {
        url: '/detail/:id',
        views: {
          '@': {
            template: '<movie-detail></movie-detail>',
          }
        },
        resolve: {
          movie: function($q, MovieDetailService){
            var deferred = $q.defer();
            MovieDetailService.getMovieDetail($stateParams.id).then(function(data){
            deferred.resolve(data.data);
            });
          return deferred.promise;
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
