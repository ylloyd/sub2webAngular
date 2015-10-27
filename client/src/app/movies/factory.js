(function(){
	'use strict';

	function MovieService($http, $log){

		var service = {};

		service.movie = []; // MovieService.movie = [];

		/*
		* Get Movie
		*/
		service.getMovie = function(){

			var key = 'b443d2efe7e63b285232e486225b297a';

			return $http.get('https://api.themoviedb.org/3/movie/popular', {
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

	angular.module('services.movie', [])
		.factory('MovieService', MovieService);
})();