(function (){	'use strict';	var header = function ($rootScope)	{		return{			scope: {},			restrict: 'A',			templateUrl: 'src/components/header/header.html',			replace: true,			link: function (scope, element, attributes)			{				scope.isMenu = false;								scope.clickLogo = function()				{					$rootScope.$broadcast('fullpage::change', 1);				};									scope.clickMenu = function()				{										/*var menu = angular.element(element[0].getElementsByClassName('menu-button'));					console.log(menu);					if(isMenu)					{						menu.removeClass('close');					}					else					{						menu.addClass('close');					}					*/					scope.isMenu = !scope.isMenu;				};			}		};	};	angular.module('portfolio').directive('header', ['$rootScope', header]);})();