(function ()
{
	'use strict';

	var workController = function (sharedService, configConstant, workService)
	{
		var _this = this;
		_this.shared = sharedService.data;

		workService.get(configConstant.setup.language).success(function (data)
		{
			_this.items = data;
		}).
		error(function (response)
		{

		});
	};

	angular.module('portfolio').controller('workController', ['sharedService', 'configConstant', 'workService', workController]);
})();