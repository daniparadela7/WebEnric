'use strict';
angular.module('app').service('wdkFunctions', ['$rootScope', '$route', function($rootScope, $route) {
	
	this.init = function(){
		this.isActive();
		this.tamañoPantalla();
	};

	this.animate = function(element, inview, inviewpart, transition, duration, delay) {
		if(!screenSize.is('xs')){
			if(inview && (inviewpart === 'top' || inviewpart === 'bottom' || inviewpart === 'both') && !$(element).hasClass(transition)){
				$(element).css('animation-delay', delay + 's');
				$(element).css('animation-duration', duration + 's');
				$(element).addClass('animated ' + transition);
			}
		}
	};

	this.isActive = function(route) {
        $rootScope.ruta = $route;
    };

    this.tamañoPantalla = function(){
		var windowHeight = $(window).height();
		var tamañoSlider = windowHeight -70;
		$('.sliderInicio').css('height', tamañoSlider + 'px');
	};

	this.goTo = function(id){
		var idSelec = id;
		var idPosition = $('#'+idSelec).offset().top;
		$('html, body').animate({scrollTop : idPosition},800);
	}

}]);
