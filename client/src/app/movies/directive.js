(function(){
	'use strict';

	function MoviePopular(){
		return{
			restrict: 'EA',
			replace: true,
			templateUrl: './src/app/movies/template.html',
			scope: {},
			controllerAs: 'vm',
			bindToController: true,
			/*jshint unused:false*/
			controller: function($log, MovieService){
				var vm = this;
				MovieService.getMovie().then(function(data){
					console.log(data.data.results);
					vm.movies = data.data.results;
				});
			},
			link: function(scope, elm, attrs){

			}
		};
	}

	angular.module('moviePopularDirective', ['services.movie'])
		.directive('moviePopular', MoviePopular);
})();