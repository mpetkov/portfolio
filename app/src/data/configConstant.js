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
				url: 'https://vivr.com/'
			},
			{
				type: 'work',
				img: 'img/wedding-bg.jpg',
				color: 'ffffff',
				bgColor: 'ea848f',
				tag:'wedding',
				url: 'http://www.kristineandmarin.com/'
			},
			{
				type: 'work',
				img: 'img/greenhill-bg.jpg',
				color: 'ffffff',
				bgColor: '64af84',
				tag:'greenhill',
				url: 'http://www.greenhill.bg/'
			},
			{
				type: 'work',
				img: 'img/zeoliton-bg.jpg',
				color: 'ffffff',
				bgColor: '96bc33',
				tag:'zeoliton',
				url: 'http://www.zeoliton.com/'
			}
		],
		slideshow:
		[
			{
				img: 'img/splash-01.jpg'
			},
			{
				img: 'img/splash-02.jpg'
			},
			{
				img: 'img/splash-03.jpg'
			}
		],
		menuIcons:
		[
			{
				url: 'https://www.linkedin.com/in/mpetkov',
				type: 'linkedin'
			},
			{
				url: 'http://www.marinpetkov.com/resume.pdf',
				type: 'cv'
			},
			{
				url: 'https://github.com/mpetkov',
				type: 'github'
			}
		]
	};

	angular.module('portfolio').constant('configConstant', configConstant);
})();