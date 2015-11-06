var CalculatorApp = angular.module('CalculatorApp', []);

var output = 0;

CalculatorApp.controller('AdditionController', function ($scope) {
	$scope.output = 0;

	$scope.addition = function (val1, val2) {
		$scope.output = val1*1 + val2*1;

		return $scope.output;
	};

});

CalculatorApp.controller('SubstractionController', function ($scope) {
	$scope.output = 0;

	$scope.substraction = function (val1, val2) {
		$scope.output = val1*1 - val2*1;

		return $scope.output;
	};

});

CalculatorApp.controller('MultiplicationController', function ($scope) {
	$scope.output = 0;

	$scope.multiplication = function (val1, val2) {
		$scope.output = val1*1 * val2*1;

		return $scope.output;
	};

});

CalculatorApp.controller('DivisionController', function ($scope) {
	$scope.output = 0;

	$scope.division = function (val1, val2) {
		$scope.output = val1*1 / val2*1;

		return $scope.output;
	};

});

CalculatorApp.controller('ClickButtonController', function (;$scope) {
	
});


