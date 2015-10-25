(function ()
{
	'use strict';

	var resizeWork = function ()
	{
		return {
			restrict: "A",
			link: function (scope, element, attributes)
			{
				scope.$on('resize::resize', function (event, data)
				{
					var height = data.height;
					if (height < 350)
					{
						height = 350;
					}

					var fontSize = height * 0.0025;
					
					if (fontSize < 1.2)
					{
						fontSize = 1.2;
					}

					element.css({"font-size": fontSize + "em", "height": height * 0.25 + "px"});
				});
			}
		};
	};

	angular.module('portfolio').directive('resizeWork', [resizeWork]);
})();