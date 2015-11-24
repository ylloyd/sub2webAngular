	(function(){
	'use strict';

	function MoviePopularService($http, $log){

		var service = {};

		service.movie = []; // MovieService.movie = [];

		/*
		* Get Movies popular
		*/
		service.getMoviePopular = function(){

			var key = 'b443d2efe7e63b285232e486225b297a';

			return $http.get('https://api.themoviedb.org/3/movie/popular', {
				params:{
					api_key: key
				}
			})
			.success(function(data){
				service.movie = data;
			})
			.error(function(error){
				console.log('error');
			});
		};

		return service;
	}

	angular.module('services.moviepopular', [])
		.factory('MoviePopularService', MoviePopularService);
})();
