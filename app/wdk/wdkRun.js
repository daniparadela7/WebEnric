'use strict';
angular.module('app')
.run(['$rootScope', '$location', '$routeParams', '$route', '$timeout', '$analytics', '$appConfig', 'apiService', 'wdkFunctions', 'screenSize', 'ngMeta', function($rootScope, $location, $routeParams, $route, $timeout, $analytics, $appConfig, apiService, wdkFunctions, screenSize, ngMeta) {
	$rootScope.wdkFunctions = wdkFunctions;
	$rootScope.$appConfig = $appConfig;

	ngMeta.init();

	$(window).on('resize', function(){
		var windowHeight = $(window).outerHeight();
		$('.headerBG').outerHeight(windowHeight);
	});

	$rootScope.toggleVisible = function() {
		$rootScope.visibleMenu = !$rootScope.visibleMenu;
		$('.c-hamburger').toggleClass('is-active');
		if($rootScope.visibleMenu) {
			$('body, html').addClass('menu-mobile-in');
			if((screenSize.is('xs')) || (screenSize.is('sm'))){
				var windowHeight = $(window).outerHeight();
				$('.headerBG').outerHeight(windowHeight);
			}
		} else {
			$('body, html').removeClass('menu-mobile-in');
		}
	};


	$rootScope.$on('$routeChangeStart', function(){
		NProgress.start();
	});
	$rootScope.$on('$routeChangeSuccess', function(){
		$timeout(function(){	
			NProgress.done();
			wdkFunctions.init();
			$analytics.pageTrack($location.path());
			$('html, body').animate({ scrollTop: 0 }, 'slow');
			$('.navbar-toggle').removeClass('is-active');
			$rootScope.htmlReady();
		}, 0);
	});

	$rootScope.$on('$routeChangeError', function(){
		NProgress.done();
		console.error('$routeChangeError');
	});

}]);
