(function ()
{
	'use strict';

	var fullpage = function (configConstant)
	{
		return {
			restrict: "A",
			link: function (scope, element, attributes)
			{
				scope.$on('portfolio::loaded', function (event, data)
				{
					$(element).fullpage
					({
						navigation: true,
						css3: false,
						responsiveHeight: configConstant.setup.minHeight,
						onLeave: function (index, nextIndex, direction) 
						{
							if(configConstant.portfolio[nextIndex-1])
							{
								$('#fp-nav').find('span').css('background-color', '#' + configConstant.portfolio[nextIndex-1].color);
							}
						}
					});
				});
			}
		};
	};

	angular.module('portfolio').directive('fullpage', ['configConstant', fullpage]);
})();