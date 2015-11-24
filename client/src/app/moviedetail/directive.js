(function(){
	'use strict';

	function MovieDetail(MovieService){
		return{
			restrict: 'EA',
			replace: true,
			templateUrl: './src/app/moviedetail/detail.html',
			scope: {},
			controllerAs: 'vm',
			bindToController: true,
			/*jshint unused:false*/
			controller: function($log, $state, $scope, $stateParams, movie){
				/*var vm = this;
				$log.log("Mes parametres: ",$stateParams);
				MovieService.getMovieDetail($stateParams.id).then(function(data){
					vm.movies = data.data;
					$log.info("my data", vm.movies);
				});*/
				this.movie = movie;
			},
			link: function(scope, elm, attrs){

			}
		};
	}
	angular.module('moviePopularDirective', ['services.movie'])
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
