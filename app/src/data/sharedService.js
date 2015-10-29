(function ()
{
	'use strict';

	var sharedService = function ()
	{
		var _this = this;
		_this.data = new Object();
	};

	angular.module('portfolio').service('sharedService', [sharedService]);
})();