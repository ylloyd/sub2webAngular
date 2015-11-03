(function(){
	'use strict';

	function MovieNowPlayingService($http, $log){

		var service = {};

		service.movie = []; // MovieService.movie = [];

		/*
		* Get Movie
		*/
		service.getMovieNowPlaying = function(){

			var key = 'b443d2efe7e63b285232e486225b297a';

			return $http.get('https://api.themoviedb.org/3/movie/now_playing', {
				params:{
					api_key: key
				}
			})
			.success(function(data){
				service.movie = data;
			})
			.error(function(){
				console.log('error');
			});
		};

		return service;
	}

	angular.module('services.movie-now_playing', [])
		.factory('MovieNowPlayingService', MovieNowPlayingService);
})();