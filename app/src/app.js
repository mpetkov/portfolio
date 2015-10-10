(function ()
{
	'use strict';

	var config = function ($logProvider, $translateProvider, configConstant)
	{	 
		$logProvider.debugEnabled(false);

		$translateProvider.useLoader('translationService',
		{
			url: 'json/{lang}.json?v=' + configConstant.version,
			languages: ['en-us']
		});
		
		/*var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
		if(iOS)
		{
			document.documentElement.className += ' ios';
		}*/
		
		$translateProvider.useSanitizeValueStrategy('sanitize');
		$translateProvider.use('en-us');
	};
	
	var init = function ($timeout, sharedService)
	{
		return function (scope, element, attrs)
		{
			scope.shared = sharedService.data;
			
			angular.element(document).ready(function ()
			{
				$timeout(function ()
				{
					scope.shared.isLoaded = true;
				}, 100);
			});
		};
	};

	angular.module('portfolio', ['pascalprecht.translate'])
			  .config(['$logProvider', '$translateProvider', 'configConstant', config])
			  .directive('init', ['$timeout', 'sharedService', init]);
})();