(function ()
{
	'use strict';

	var imageonload = function ($timeout)
	{
		return {
			restrict: "A",
			link: function (scope, element, attributes)
			{
				$timeout(function ()
				{
					var src = attributes.ngSrc;
					if (!src)
					{
						var backgroundImage = element.css("backgroundImage");

						if (backgroundImage)
						{
							var pattern = /url\("{0,1}([^"]*)"{0,1}\)/;
							src = pattern.exec(backgroundImage)[1];
							backgroundImage = null;
							pattern = null;
						}
					}

					if (src)
					{
						var image = new Image();

						angular.element(image).bind("load", function (e)
						{
							scope.$emit('image::loaded', attributes.imageonload);
							image = null;
						});

						image.src = src;
					}
				}, 100);
			}
		};
	};

	angular.module('portfolio').directive('imageonload', ['$timeout', imageonload]);
})();