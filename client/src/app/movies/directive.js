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
				$scope.back =function(){ $state.go("root.movie");}
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
			controller: function($log, $state, $scope, $stateParams){
				var vm = this;
				$log.log("Mes parametres: ",$stateParams);
				MovieService.getMovieDetail($stateParams.id).then(function(data){
					$scope.movies = data.data;
					$log.info("my data", vm.movies);
				});

			},
			link: function(scope, elm, attrs){

			}
		};
	}
	angular.module('moviePopularDirective', ['services.movie'])
		.directive('moviePopular', MoviePopular)
		.directive('movieDetail', MovieDetail);
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
