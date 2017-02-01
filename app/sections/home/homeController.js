'use strict';
angular.module('app')
.controller('HomeController', ['$timeout', '$scope', function($timeout, $scope){

	$scope.img_slider = ['/assets/images/1.jpg',
						 '/assets/images/2.jpg',
						 '/assets/images/3.jpg'];

	$scope.dogText = "We specialise in dog walking and collection and drop-off is all included in the price! Group walking is the most popular choice as it is more economical and helps dogs improve on their social skills. However, we can also offer the possibility of individual walks... at an extra cost and can adapt around owners needs as we understand that not all dogs are the same as others, and that is why we love them! Do not hesitate to call us for a free consultation or visit to the home to give you and your pets a chance to get to know us before we assist them with any of your needs.";					 
	$scope.catText = "Cat visits will allow your cat(s) to stay in the comfort of your home, enjoying familiar surroundings and favourite places to nap and relax. The visits are often more cost effective than using catteries and your cat will receive love and attention as well as being fed and cared for. Our team are always on hand if you need to give us a call whilst you are away and simply check how your little feline friends are doing! We are quite happy to cat-sit more than one cat per household for the same price. We offer a morning and afternoon service to suit your cat(s) needs.";
	$scope.otherText = "Our dedicated team of carers offer a number of other professional services to our clients. Puppy visits to help keep your new bundle of joy active and content whilst you are away working or simply out of the house. We also provide a dog-wash and shampoo service where... we will pick your dog up and drop them off lovely and clean and dry smelling fresh, with a healthier, shinier coat of hair. We only use luxury shampoo and conditioner products to maximise the benefits to your dogs skin and hair. If you own other pets such as rabbits, birds, guinea pigs, hamsters or more exotic animals such as snakes or spiders we offer home visits either once or twice a day to clean, feed and exercise your pet.";

	$scope.numLimitDog = 200;
	$scope.numLimitCat = 284;
	$scope.numLimitOther = 215;

	$scope.moreOrLessDog = "Read More";
	$scope.moreOrLessCat = "Read More";
	$scope.moreOrLessOther = "Read More";

	$scope.readMoreDog = function(){
		if($scope.numLimitDog != 1000){
			$scope.numLimitDog = 1000;
			$scope.moreOrLessDog = "Less";
		}
		else{
			$scope.numLimitDog = 200;
			$scope.moreOrLessDog = "Read More";
		}
	};

	$scope.readMoreCat = function(){
		if($scope.numLimitCat != 1000){
			$scope.numLimitCat = 1000;
			$scope.moreOrLessCat = "Less";
		}
		else{
			$scope.numLimitCat = 284;
			$scope.moreOrLessCat = "Read More";
		}
	};

	$scope.readMoreOther = function(){
		if($scope.numLimitOther != 1000){
			$scope.numLimitOther = 1000;
			$scope.moreOrLessOther = "Less";
		}
		else{
			$scope.numLimitOther = 215;
			$scope.moreOrLessOther = "Read More";
		}
	};
	
	$timeout(function(){
		
		$('.sliderHome').owlCarousel({
			dots: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			loop: true,
			items: 1,
			margin: 0,
			stagePadding: 0,
			smartSpeed: 450,
			autoplay: true,
			autoplayTimeout: 4000,
			autoplayHoverPause: false,
			addClassActive: true
		});

		$('.sliderTestimonials').owlCarousel({
			dots: true,
			items: 1,
			margin: 0,
			stagePadding: 0,
			smartSpeed: 450,
			autoplay: true,
			autoHeight: true,
			autoHeightClass: 'owl-height',
			loop: true,
			autoplayTimeout: 8000,
			autoplayHoverPause: false
		});

	}, 300);

}]);
