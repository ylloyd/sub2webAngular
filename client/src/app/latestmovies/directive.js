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
				MovieLatestService.getMovieLast().then(function(movieData){
					vm.movies = movieData.data;
					console.log('toto');	
					console.log(vm.movies);
					//console.log(movieData.data.original_title);
				});
			},
			link: function(scope, elm, attrs){

			}
		};
	}

	angular.module('movieLatestDirective', ['services.movielatest'])
		.directive('movieLatest', MovieLatest);
})();