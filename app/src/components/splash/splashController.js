(function ()
{
	'use strict';

	var splashController = function (sharedService, configConstant)
	{
		var _this = this;
		_this.shared = sharedService.data;
		_this.config = configConstant;
	};

	angular.module('portfolio').controller('splashController', ['sharedService', 'configConstant', splashController]);
})();