(function ()
{
	'use strict';
	
	var configConstant =
	{
		version: '1.0.4',
		menuItems:
		[
			{id: 'splash'},
			{id: 'map'},
			{id: 'engagement'},
			{id: 'rsvp'},
			{id: 'gifts'}
		],
		eventMenuItems:
		[
			{id: 'portfolio'},
			{id: 'hotel'}
		],
		params:
		[
			{id: 'menu', value: 'splash'},
			{id: 'event', value: 'portfolio'}
		]
	};
	
	angular.module('portfolio').constant('configConstant', configConstant);
})();