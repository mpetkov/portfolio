(function ()
{
	'use strict';

	var config = function ($logProvider, $translateProvider, $analyticsProvider, configConstant)
	{
		$logProvider.debugEnabled(false);

		$translateProvider.useLoader('translationService',
		{
			url: 'json/{lang}.json?v=' + configConstant.setup.version,
			languages: configConstant.setup.languages
		});

		$translateProvider.useSanitizeValueStrategy('sanitize');
		$translateProvider.use(configConstant.setup.language);
		
		$analyticsProvider.firstPageview(true);
		$analyticsProvider.withAutoBase(true);
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
	
	angular.module('portfolio', ['pascalprecht.translate', 'ngSanitize', 'ng.deviceDetector', 'angulartics', 'angulartics.google.analytics'])
			.config(['$logProvider', '$translateProvider', '$analyticsProvider', 'configConstant', config])
			.directive('init', ['deviceDetector', init]);
})();