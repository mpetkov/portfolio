(function ()
{
	'use strict';

	var translationService = function ($http, $q)
	{
		return function (options)
		{
			var deferred = $q.defer();

			var lang = options.key;
			if (options.languages.indexOf(lang) === -1)
			{
				lang = options.languages[0];
			}

			var url = options.url.replace('{lang}', lang);
			$http
			({
				method: 'GET',
				url: url
			}).success(function (data)
			{
				deferred.resolve(data);
			}).error(function ()
			{
				deferred.reject(options.key);
			});

			return deferred.promise;
		};
	};

	angular.module('portfolio').service('translationService', ['$http', '$q', translationService]);
})();