(function ()
{
	'use strict';

	var fullpage = function ($rootScope, $timeout, $interval, configConstant)
	{
		var interval;

		return {
			restrict: "A",
			link: function (scope, element, attributes)
			{
				scope.$on('portfolio::loaded', function (event, data)
				{
					$timeout(function ()
					{
						$(element).fullpage
						({
							navigation: true,
							css3: false,
							responsiveHeight: configConstant.setup.minHeight,
							controlArrows: false,
							afterRender: function () 
							{
								$rootScope.$broadcast('fullpage::ready');
								console.log('1111');
								//on page load, start the slideshow
								/*interval = $interval(function () {
									$.fn.fullpage.moveSlideRight();
								},8000);*/
							},
							onLeave: function (index, nextIndex, direction)
							{
								if (index == '1') 
								{
									$interval.cancel(interval);
								}


								if (configConstant.content[nextIndex - 1])
								{
									$('#fp-nav').find('span').css('background-color', '#' + configConstant.content[nextIndex - 1].color);
									$('.navigation .bar').css('background-color', '#' + configConstant.content[nextIndex - 1].color);
									$('.navigation path').css('fill', '#' + configConstant.content[nextIndex - 1].color);
								}
							},
							onSlideLeave: function (anchorLink, index, slideIndex, direction) {
								//$.fn.fullpage.setScrollingSpeed(0);
								//$('.fp-section').find('.fp-slidesContainer').hide();
							},
							// Display the slides container by fading it in after the next slide has been loaded.
							afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
								//$('.fp-section').find('.fp-slidesContainer').fadeIn(700);
								//$.fn.fullpage.setScrollingSpeed(700);
							}
						});
					}, 400);

				});
			}
		};
	};

	angular.module('portfolio').directive('fullpage', ['$rootScope', '$timeout', '$interval', 'configConstant', fullpage]);
})();