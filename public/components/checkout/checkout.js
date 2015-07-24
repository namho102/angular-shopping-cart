'use strict';

angular.module('checkout', ['ngNewRouter'])
.controller('CheckoutController', ['$scope','CommonProp',function($scope,CommonProp) {
	$scope.items = CommonProp.getItems();
	$scope.total = CommonProp.getTotal();
}]);
