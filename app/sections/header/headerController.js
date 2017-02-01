'use strict';
angular.module('app')
.controller('HeaderController', ['$timeout', function($timeout){

	$timeout(function(){
		$(document).on('click', '.navbar-collapse.in', function(e) {
			//Plegamos el menu tras pinchar sobre alguna seccion
			if($(e.target).is('a')) {
				var el = this;
				$timeout(function(){
					$(el).collapse('hide');
				}, 500);
			}
		});
	}, 0);
}]);
