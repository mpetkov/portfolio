(function ()
{
	'use strict';

	var repeatComplete = function ($rootScope)
	{
		return {
			restrict: "A",
			link: function (scope, element, attributes)
			{
				if (scope.$last)
				{
					$rootScope.$broadcast('portfolio::loaded');
					$rootScope.$broadcast('resize::trigger');
				}
			}
		};
	};

	angular.module('portfolio').directive('repeatComplete', ['$rootScope', repeatComplete]);
})();