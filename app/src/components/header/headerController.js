(function ()
{
	'use strict';

	var headerController = function ($rootScope, configConstant, sharedService)
	{
		var _this = this;
		_this.config = configConstant;
		_this.shared = sharedService.data;

		_this.clickMenu = function ()
		{
			_this.shared.isMenu = !_this.shared.isMenu;
		};

		_this.clickLogo = function ()
		{
			$rootScope.$broadcast('fullpage::change', 1);
		};
	};

	angular.module('portfolio').controller('headerController', ['$rootScope', 'configConstant', 'sharedService', headerController]);
})();