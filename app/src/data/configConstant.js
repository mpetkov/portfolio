(function ()
{
	'use strict';

	var configConstant =
	{
		setup:
		{
			version: '1.0.0',
			languages: ['en-us'],
			language: 'en-us'
		},
		content:
		[
			{
				type: 'splash',
				color: 'FFFFFF'
			},
			{
				type: 'work',
				img: 'img/vivr-bg.jpg',
				color: '333333',
				bgColor: 'eaeaea',
				tag:'vivr',
				tagline: '',
				name: '',
				description: '',
				url: ''
			},
			{
				type: 'work',
				img: 'img/wedding-bg.jpg',
				color: 'ffffff',
				bgColor: 'ea848f',
				tagline: '',
				name: '',
				description: '',
				url: ''
			},
			{
				type: 'work',
				img: 'img/greenhill-bg.jpg',
				color: 'ffffff',
				bgColor: '64af84',
				tagline: '',
				name: '',
				description: '',
				url: ''
			},
			{
				type: 'work',
				img: 'img/zeoliton-bg.jpg',
				color: 'ffffff',
				bgColor: '96bc33',
				tagline: '',
				name: '',
				description: '',
				url: ''
			}
		],
		slideshow:
		[
			{
				img: 'img/test/01.jpg'
			},
			{
				img: 'img/test/02.jpg'
			},
			{
				img: 'img/test/03.jpg'
			}
		]
	};

	angular.module('portfolio').constant('configConstant', configConstant);
})();