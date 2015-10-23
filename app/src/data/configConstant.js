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
		content:
		[
			{
				type: "splash",
				color: "FFFFFF"
			},
			{
				type: "work",
				img: "vivr-bg.jpg",
				color: "333333",
				bgColor: "eaeaea",
				tagline: "",
				name: "",
				description: "",
				url: ""
			},
			{
				type: "work",
				img: "wedding-bg.jpg",
				color: "ffffff",
				bgColor: "ea848f",
				tagline: "",
				name: "",
				description: "",
				url: ""
			},
			{
				type: "work",
				img: "greenhill-bg.jpg",
				color: "ffffff",
				bgColor: "64af84",
				tagline: "",
				name: "",
				description: "",
				url: ""
			},
			{
				type: "work",
				img: "zeoliton-bg.jpg",
				color: "ffffff",
				bgColor: "96bc33",
				tagline: "",
				name: "",
				description: "",
				url: ""
			}
		]
	};

	angular.module('portfolio').constant('configConstant', configConstant);
})();