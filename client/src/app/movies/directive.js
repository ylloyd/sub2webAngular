(function(){
	'use strict';

	function MoviePopular(MovieService){
		return{
			restrict: 'EA',
			replace: true,
			templateUrl: './src/app/movies/template.html',
			scope: {},
			controllerAs: 'vm',
			bindToController: true,
			/*jshint unused:false*/
			controller: function($log){
				var vm = this;
				MovieService.getMovie().then(function(data){
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