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
					if (height < 320)
					{
						height = 320;
					}
					
					var width = data.width;
					var heightMultiplier = 0.25;
					if(width < 400)
					{
						heightMultiplier = 0.38;
					}

					var fontSize = height * 0.0025;
					
					if (fontSize < 1.5)
					{
						fontSize = 1.5;
					}

					element.css({"font-size": fontSize + "em", "height": height * heightMultiplier + "px"});
				});
			}
		};
	};

	angular.module('portfolio').directive('resizeWork', [resizeWork]);
})();