(function ()
{
	'use strict';

	var fullpage = function ($rootScope, configConstant)
	{
		return {
			restrict: "A",
			link: function (scope, element, attributes)
			{
				scope.$on('fullpage::init', function (event, data)
				{
					$(element).fullpage
					({
						navigation: true,
						css3: false,
						responsiveHeight: 320,
						controlArrows: false,
						afterRender: function ()
						{
							$rootScope.$broadcast('portfolio::ready');
							$rootScope.$broadcast('resize::trigger');
						},
						onLeave: function (index, nextIndex, direction)
						{
							if (index == '1')
							{
								$rootScope.$broadcast('slideshow::stop');
							}
							else if (nextIndex == '1')
							{
								$rootScope.$broadcast('slideshow::start');
							}

							if (configConstant.content[nextIndex - 1])
							{
								$('#fp-nav').find('span').css('background-color', '#' + configConstant.content[nextIndex - 1].color);
								$('.header .bar').css('background-color', '#' + configConstant.content[nextIndex - 1].color);
								$('.header path').css('fill', '#' + configConstant.content[nextIndex - 1].color);
							}
						}
					});
				});

				scope.$on('fullpage::change', function (event, index)
				{
					$.fn.fullpage.moveTo(index);
				});
			}
		};
	};

	angular.module('portfolio').directive('fullpage', ['$rootScope', 'configConstant', fullpage]);
})();