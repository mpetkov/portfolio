(function ()
{
	'use strict';

	var pagesController = function (sharedService, configConstant)
	{
		var _this = this;
		_this.shared = sharedService.data;
		_this.config = configConstant;
	};

	angular.module('portfolio').controller('pagesController', ['sharedService', 'configConstant', pagesController]);
})();