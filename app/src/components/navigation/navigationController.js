(function ()
{
	'use strict';

	var navigationController = function (sharedService, configConstant)
	{
		var _this = this;
		_this.shared = sharedService.data;
		_this.config = configConstant;
	};

	angular.module('portfolio').controller('navigationController', ['sharedService', 'configConstant', navigationController]);
})();