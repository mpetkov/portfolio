(function ()
{
	'use strict';

	var sharedService = function (configConstant)
	{
		var _this = this;
		_this.data = {};

		for (var i = 0; i < configConstant.params.length; i++)
		{
			_this.data[configConstant.params[i].id] = configConstant.params[i].value;
		}
	};

	angular.module('portfolio').service('sharedService', ['configConstant', sharedService]);
})();