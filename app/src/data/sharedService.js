(function ()
{
	'use strict';

	var sharedService = function (configConstant)
	{
		var _this = this;
		_this.data = {};
	};

	angular.module('portfolio').service('sharedService', ['configConstant', sharedService]);
})();