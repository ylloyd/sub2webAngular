(function(){
	'use strict';

	function MovieNowPlaying(){
		return{
			restrict: 'EA',
			replace: true,
			templateUrl: './src/app/nowplaying/template.html',
			scope: {},
			controllerAs: 'vm',
			bindToController: true,
			/*jshint unused:false*/
			controller: function($log, MovieNowPlayingService){
				var vm = this;
				MovieNowPlayingService.getMovieNowPlaying().then(function(movieNowPlayingData){
					vm.movies = movieNowPlayingData.data.results;
					console.log('toto');	
					console.log(vm.movies);
					//console.log(movieData.data.original_title);
				});
			},
			link: function(scope, elm, attrs){

			}
		};
	}

	angular.module('movieNowPlayingDirective', ['services.movie-now_playing'])
		.directive('movieNowPlaying', MovieNowPlaying);
})();