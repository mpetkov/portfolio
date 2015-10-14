(function ()
{
	'use strict';

	var workService = function ($http)
	{
		var _this = this;

		_this.get = function (language)
		{
			return $http.get('./json/work-' + language + '.json');
		};
	};

	angular.module('portfolio').service('workService', ['$http', workService]);
})();