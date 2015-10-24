(function ()
{
	'use strict';

	var slideIndex = 0;
	var slide;

	var slideshow = function ($interval, $timeout)
	{
		return {
			restrict: "A",
			link: function (scope, element, attributes)
			{
				scope.$on('fullpage::ready', function (event, data)
				{
					console.log('fullpage::ready');
					
						console.log('TIMEOUT');
					element.addClass('slideshow');
				var slides = angular.element(element[0].getElementsByClassName("slide"));
				
				for(var i = 0; i < slides.length; i++)
				{
					
					if(i !== 0)
					{
						angular.element(slides[i]).addClass('anim-hide');
					}
					else
					{
						angular.element(slides[i]).addClass('anim-show');
					}
					
					angular.element(slides[i]).addClass('anim-fade');
					//angular.element(slides[i]).addClass('anim-grow');
					
				}
				
				 $timeout(function() 
					 {
					//angular.element(slides[0]).addClass('anim-show');
					  }, 1000);

console.log('111111111111111');
				console.log(slides);
				
				$interval(function () 
				{
					slide = angular.element(slides[slideIndex]);
					slide.removeClass('anim-show');
					slide.addClass('anim-hide');
					
					console.log(slideIndex);
					slideIndex++;
					
					if(slideIndex == slides.length)
					{
						slideIndex = 0; 
					}
					
					slide = angular.element(slides[slideIndex]);
					slide.removeClass('anim-hide');
					
					 $timeout(function() 
					 {
						slide.addClass('anim-show');
					  }, 1000);
					//slide.addClass('anim-show');
					
				}, 6000);
				});
				
				
				// $timeout(function() 
				//{
					console.log('TIMEOUT');
					element.addClass('slideshow');
				var slides = angular.element(element[0].getElementsByClassName("slide"));
				
				for(var i = 0; i < slides.length; i++)
				{
					
					if(i !== 0)
					{
						angular.element(slides[i]).addClass('anim-hide');
					}
					/*else
					{
						angular.element(slides[i]).addClass('anim-show');
					}*/
					
					angular.element(slides[i]).addClass('anim-fade');
					//angular.element(slides[i]).addClass('anim-grow');
					
				}

console.log('111111111111111');
				console.log(slides);
				
				/*$interval(function () 
				{
					slide = angular.element(slides[slideIndex]);
					//slide.removeClass('anim-show');
					slide.addClass('anim-hide');
					
					console.log(slideIndex);
					slideIndex++;
					
					if(slideIndex == slides.length)
					{
						slideIndex = 0; 
					}
					
					slide = angular.element(slides[slideIndex]);
					slide.removeClass('anim-hide');
					
					 $timeout(function() 
					 {
						slide.addClass('anim-show');
					  }, 1000);
					//slide.addClass('anim-show');
					
				}, 6000);*/
					 
					 
				// }, 5000);
					  
				
			}
		};
	};

	angular.module('portfolio').directive('slideshow', ['$interval', '$timeout', slideshow]);
})();