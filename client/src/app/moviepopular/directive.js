(function(){
	'use strict';

	function MoviePopular(){
		return{
			restrict: 'EA',
			replace: true,
			templateUrl: './src/app/moviepopular/template.html',
			scope: {},
			controllerAs: 'vm',
			bindToController: true,
			/*jshint unused:false*/
			controller: function($log, $state, $scope, MoviePopularService){
				var vm = this;
				MoviePopularService.getMoviePopular().then(function(popularmovie){
					$log.info('Route correcte');
					console.log('Route correcte');
					vm.movies = popularmovie.data.results;
				});
			},
			link: function(scope, elm, attrs){

			}
		};
	}

	angular.module('moviePopularDirective', ['services.moviepopular'])
		.directive('moviePopular', MoviePopular);
})();


/*
$q.when(noPromise.getResult()).then(function(result) {
                     $rootScope.status = result.status;
                 });

                 controller: function($log, $q){
				var vm = this;
				$q.when(MovieService.getMovie()).then(function(data){
					vm.movies = data.data.results;
				});
			},*/
