(function ()
{
	'use strict';

	var slideIndex = 0;
	var interval;
	var slide;
	var slides = [];

	var slideshow = function ($interval, $timeout)
	{
		return {
			restrict: "A",
			link: function (scope, element, attributes)
			{
				scope.$on('portfolio::ready', function (event, data)
				{
					element.addClass('slideshow');

					slides = angular.element(element[0].getElementsByClassName("slide"));

					for (var i = 0; i < slides.length; i++)
					{
						if (i !== 0)
						{
							angular.element(slides[i]).addClass('anim-hide');
						}
						else
						{
							angular.element(slides[i]).addClass('anim-show');
						}
					}

					interval = $interval(rotateSlides, 6000);

					$timeout(function ()
					{
						slides.addClass('anim-fade');
					}, 100);
				});
				
				scope.$on('slideshow::stop', function (event, data)
				{
					$interval.cancel(interval);
				});
				
				scope.$on('slideshow::start', function (event, data)
				{
					$timeout(function ()
					{
						rotateSlides();
					}, 500);
					
					interval = $interval(rotateSlides, 6000);
				});
				
				
				function rotateSlides()
				{
					slide = angular.element(slides[slideIndex]);
					slide.removeClass('anim-show');
					slide.addClass('anim-hide');

					slideIndex++;

					if (slideIndex == slides.length)
					{
						slideIndex = 0;
					}

					slide = angular.element(slides[slideIndex]);
					slide.removeClass('anim-hide');

					$timeout(function ()
					{
						slide.addClass('anim-show');
					}, 1000);
				}
			}
		};
	};

	angular.module('portfolio').directive('slideshow', ['$interval', '$timeout', slideshow]);
})();