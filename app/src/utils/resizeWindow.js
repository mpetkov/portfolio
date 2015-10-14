(function ()
{
	'use strict';

	var resizeWindow = function ($window, $timeout)
	{
		return {
			restrict: "A",
			link: function (scope, element, attributes)
			{
				var timer;
				var w = angular.element($window);

				w.on('resize', function (e)
				{
					triggerTimer();
				});

				w.on('orientationchange', function ()
				{
					triggerTimer();
				});

				scope.$on('resize::trigger', function (event, data)
				{
					triggerEvent();
				});

				function triggerTimer()
				{
					$timeout.cancel(timer);
					timer = $timeout(triggerEvent, 400);
				}

				function triggerEvent()
				{
					scope.$broadcast('resize::resize', {width: $window.innerWidth, height: $window.innerHeight});
				}
			}
		};
	};

	angular.module('portfolio').directive('resizeWindow', ['$window', '$timeout', resizeWindow]);
})();