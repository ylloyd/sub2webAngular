(function(){
	'use strict';

	function AppHeaderComponent(){
		return{
			restrict: 'EA',
			replace: true,
			templateUrl: './src/app/components/app-header/template.html',
			scope: {},
			controllerAs: 'vm',
			bindToController: true,
			/*jshint unused:false*/
			controller: function($log){
				var vm = this;
				vm.bar = 'foo';
				$log.debug('Header loaded');
			},
			link: function(scope, elm, attrs){

			}
		};
	}

	angular.module('appHeaderComponent', [])
		.directive('appHeader', AppHeaderComponent);
})();