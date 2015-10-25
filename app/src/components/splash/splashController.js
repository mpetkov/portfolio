(function ()
{
	'use strict';

	var splashController = function ($rootScope, configConstant)
	{
		var _this = this;
		_this.config = configConstant;
		
		var loadedCount = 0;
		
		_this.imageLoaded = function()
		{
			loadedCount++;
			
			if(loadedCount === _this.config.slideshow.length)
			{
				$rootScope.$broadcast('fullpage::init');
			}
		};
		
		_this.clickArrow = function()
		{
			$rootScope.$broadcast('fullpage::change', 2);
		};	
	};

	angular.module('portfolio').controller('splashController', ['$rootScope', 'configConstant', splashController]);
})();