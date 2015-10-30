(function ()
{
	'use strict';

	var sharedService = function ()
	{
		var _this = this;
		_this.data = {};
	};

	angular.module('portfolio').service('sharedService', [sharedService]);
})();