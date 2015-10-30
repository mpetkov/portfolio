(function ()
{
	'use strict';

	var config = function ($logProvider, $translateProvider, configConstant)
	{
		$logProvider.debugEnabled(false);

		$translateProvider.useLoader('translationService',
		{
			url: 'json/{lang}.json?v=' + configConstant.setup.version,
			languages: configConstant.setup.languages
		});

		$translateProvider.useSanitizeValueStrategy('sanitize');
		$translateProvider.use(configConstant.setup.language);
	};
	
	var run = function (deviceDetector)
	{
		console.log(deviceDetector);
		console.log(deviceDetector.isDesktop());
	};
	
	var init = function (deviceDetector)
	{
		return function (scope, element, attrs)
		{
			var useragent = deviceDetector.os + ' ' + deviceDetector.browser + ' ' + deviceDetector.browser_version + ' ';
			
			if(deviceDetector.isDesktop())
			{
				useragent += 'desktop';
			}
			else
			{
				useragent += 'mobile';
			}
			
			
			scope.useragent = useragent;
		};
	};

	angular.module('portfolio', ['pascalprecht.translate', 'ngSanitize', 'ng.deviceDetector'])
			.config(['$logProvider', '$translateProvider', 'configConstant', config])
			.directive('init', ['deviceDetector', init]);
})();