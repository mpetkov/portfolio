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

	angular.module('portfolio', ['pascalprecht.translate', 'ngSanitize'])
			.config(['$logProvider', '$translateProvider', 'configConstant', config]);
})();