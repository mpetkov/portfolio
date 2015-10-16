(function ()
{
	'use strict';

	var workController = function (sharedService, configConstant, workService)
	{
		var _this = this;
		_this.shared = sharedService.data;
		_this.config = configConstant;
	};

	angular.module('portfolio').controller('workController', ['sharedService', 'configConstant', 'workService', workController]);
})();