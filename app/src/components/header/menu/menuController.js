(function ()
{
	'use strict';

	var menuController = function (configConstant, sharedService)
	{
		var _this = this;
		_this.config = configConstant;
		_this.shared = sharedService.data;
	};

	angular.module('portfolio').controller('menuController', ['configConstant', 'sharedService', menuController]);
})();