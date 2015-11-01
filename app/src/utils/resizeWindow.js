(function ()
{
	'use strict';

	var resizeWindow = function ($window, $timeout, deviceDetector)
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
					$timeout(function ()
					{
						$window.location.reload();
					}, 200);
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
					$window.scrollTo(0,0);
				}
			}
		};
	};

	angular.module('portfolio').directive('resizeWindow', ['$window', '$timeout', 'deviceDetector', resizeWindow]);
})();