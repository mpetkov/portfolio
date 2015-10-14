(function ()
{
	'use strict';

	var configConstant =
	{
		setup:
		{
			version: '1.0.0',
			languages: ['en-us'],
			language: 'en-us',
			minHeight: 350
		}
	};

	angular.module('portfolio').constant('configConstant', configConstant);
})();