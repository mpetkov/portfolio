(function ()
{
	'use strict';

	var workController = function ($rootScope, sharedService)
	{
		var _this = this;
		_this.shared = sharedService.data;
		_this.items = [{id:2, img:"work-wedding.jpg", color:'ea848f'},{id:1, img:"work-greenhill.jpg", color:'64af84'},{id:3, img:"work-zeoliton.jpg", color:'96bc33'}];
 
	};

	angular.module('portfolio').controller('workController', ['$rootScope', 'sharedService', workController]);
})();