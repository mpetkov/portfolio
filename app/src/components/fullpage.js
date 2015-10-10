(function ()
{
	'use strict';

	var fullpage = function ()
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
						navigationTooltips: ['firstSlide', 'secondSlide'],
						css3: false,
						responsiveHeight: 350
					});
				});
			}
		};
	};

	angular.module('portfolio').directive('fullpage', [fullpage]);
})();