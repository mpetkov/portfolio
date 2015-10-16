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
		},
		portfolio:
		[
			{
				img: "vivr-bg.jpg",
				color: "333333",
				bgColor: "eaeaea",
				type: "",
				name: "",
				description: "",
				url: ""
			},
			{
				img: "wedding-bg.jpg",
				color: "ffffff",
				bgColor: "ea848f",
				type: "",
				name: "",
				description: "",
				url: ""
			},
			{
				img: "greenhill-bg.jpg",
				color: "ffffff",
				bgColor: "64af84",
				type: "",
				name: "",
				description: "",
				url: ""
			},
			{
				img: "zeoliton-bg.jpg",
				color: "ffffff",
				bgColor: "96bc33",
				type: "",
				name: "",
				description: "",
				url: ""
			}
		]
	};

	angular.module('portfolio').constant('configConstant', configConstant);
})();