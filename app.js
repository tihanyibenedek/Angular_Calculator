var CalculatorApp = angular.module('CalculatorApp', []);

CalculatorApp.controller('FunctionController', function ($scope) {

	var arg = "";
	var value = "";
	$scope.outputString = "";
	var operator = "";

	addition = function (add1, add2) {
		$scope.output = add1*1 + add2*1;

		return $scope.output;
	};

	substraction = function (sub1, sub2) {
		$scope.output = sub1*1 - sub2*1;

		return $scope.output;
	};

	multiplication = function (mult1, mult2) {
		$scope.output = mult1*1 * mult2*1;

		return $scope.output;
	};

	division = function (div1, div2) {
		$scope.output = div1*1 / div2*1;

		return $scope.output;
	};

	$scope.outputWrite = function(number) {

		//console.log( "It is working! " + $scope.outputString );
		$scope.outputString += number;
	};

	$scope.click = function (buttonClick) {

		value += buttonClick;

		$scope.outputWrite(buttonClick);
	};

	$scope.func = function (functionClick) {

		switch( functionClick ) {
		    case '+':
		    	calculate('+');
		        $scope.outputString += " + ";
		        arg = value;
		    	value = "";
		        break;
		    case '-':
		    	calculate('-');
		        $scope.outputString += " - ";
		        arg = value;
		    	value = "";
		        break;
		    case '*':
		        calculate('*');
		        $scope.outputString += " * ";
		        arg = value;
		    	value = "";
		        break;
		    case '/':
		        calculate('/');
		        $scope.outputString += " / ";
		        arg = value;
		    	value = "";
		        break;
		};
	};

	$scope.clear = function() {
		value = "";
		$scope.outputString = "";
	};

	calculate = function(oper) {
		
		if(arg)
		{
			switch( oper ) {
			    case '+':
			    	$scope.outputString = addition(value, arg);
			        arg = $scope.outputString;
			        value = "";
			        break;
			    case '-':
			        $scope.outputString = substraction(value, arg);
			        arg = $scope.outputString;
			        value = "";
			        break;
			    case '*':
			        $scope.outputString = multiplication(value, arg);
			        arg = $scope.outputString;
			        value = "";
			        break;
			    case '/':
			        $scope.outputString = division(value, arg);
			        arg = $scope.outputString;
			        value = "";
			        break;
 
			};
		}

	};
});
