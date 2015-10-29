(function ()
{
	'use strict';

	var fullpage = function ($rootScope, configConstant, sharedService)
	{
		return {
			restrict: "A",
			link: function (scope, element, attributes)
			{
				var currentIndex = '';

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

									currentIndex = nextIndex - 1;
									if (configConstant.content[currentIndex])
									{
										var color = configConstant.content[currentIndex].color;

										if (sharedService.data.isMenu)
										{
											color = 'FFFFFF';
										}

										changeColor(color);

										color = null;
									}
								}
							});
				});

				scope.$on('fullpage::change', function (event, index)
				{
					$.fn.fullpage.moveTo(index);
				});

				scope.$on('fullpage::color', function (event, color)
				{
					changeColor(color);
				});

				function changeColor(color)
				{
					if (color == 'current')
					{
						if (configConstant.content[currentIndex])
						{
							color = configConstant.content[currentIndex].color;
						}
						else
						{
							color = null;
						}
					}

					if (color)
					{
						$('#fp-nav').find('span').css('background-color', '#' + color);
						$('.header .bar').css('background-color', '#' + color);
						$('.header path').css('fill', '#' + color);
					}
				}
			}
		};
	};

	angular.module('portfolio').directive('fullpage', ['$rootScope', 'configConstant', 'sharedService', fullpage]);
})();