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
			controller: function($log, $state, $scope){
				var vm = this;
				MovieService.getMovie().then(function(data){
					vm.movies = data.data.results;
				});
				$scope.move = function(number){
					$state.go("root.movie.detail",{id:number });
				}

			},
			link: function(scope, elm, attrs){

			}
		};
	}
	function MovieDetail(MovieService){
		return{
			restrict: 'EA',
			replace: true,
			templateUrl: './src/app/movies/detail.html',
			scope: {},
			controllerAs: 'vm',
			bindToController: true,
			/*jshint unused:false*/
			controller: function($log, $state, $scope, $id){
				var vm = this;
				MovieService.getMovieDetail().then(function(data){
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
