'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('centralApp')
	.directive('headerNotification',function($cookies){
		return {
        templateUrl:'scripts/directives/header/header-notification/header-notification.html',
        restrict: 'E',
        replace: true,
        link: function($scope, element){
        	if($cookies.get('uuid')){
        		$scope.employee_uuid = $cookies.get('uuid')
        	}
            $scope.employee_name = $cookies.get('name')
        }
    	}
	});


