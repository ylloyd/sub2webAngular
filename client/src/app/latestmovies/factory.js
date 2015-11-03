(function(){
	'use strict';

	function MovieLatestService($http, $log){

		var service = {};

		service.movie = []; // MovieService.movie = [];

		/*
		* Get Movie
		*/
		service.getMovieLast = function(){

			var key = 'b443d2efe7e63b285232e486225b297a';

			return $http.get('https://api.themoviedb.org/3/movie/latest', {
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

	angular.module('services.movielatest', [])
		.factory('MovieLatestService', MovieLatestService);
})();