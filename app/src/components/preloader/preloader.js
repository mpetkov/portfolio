(function ()
{
	'use strict';

	var preloader = function ()
	{
		return {
			restrict: "A",
			link: function (scope, element, attributes)
			{
				scope.$on('portfolio::ready', function (event, data)
				{
					element.addClass('loaded');
				});
			}
		};
	};

	angular.module('portfolio').directive('preloader', [preloader]);
})();