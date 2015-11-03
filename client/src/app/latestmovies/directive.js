(function(){
	'use strict';

	function MovieLatest(){
		return{
			restrict: 'EA',
			replace: true,
			templateUrl: './src/app/latestmovies/template.html',
			scope: {},
			controllerAs: 'vm',
			bindToController: true,
			/*jshint unused:false*/
			controller: function($log, MovieLatestService){
				var vm = this;
				MovieLatestService.getMovieLast().then(function(data){
					console.log(data.data.results);
					vm.movies = data.data.results;
				});
			},
			link: function(scope, elm, attrs){

			}
		};
	}

	angular.module('movieLatestDirective', ['services.movielatest'])
		.directive('movieLatest', MovieLatest);
})();