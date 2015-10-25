(function ()
{
	'use strict';

	var pagesController = function (configConstant)
	{
		var _this = this;
		_this.config = configConstant;
	};

	angular.module('portfolio').controller('pagesController', ['configConstant', pagesController]);
})();