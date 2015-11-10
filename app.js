var CalculatorApp = angular.module('CalculatorApp', []);

CalculatorApp.controller('FunctionController', function ($scope) {

	var arg1 = "";
	var arg2 = "";
	$scope.outputString = "";
	var operator = "";

	addition = function (add1, add2) {
		//console.log( "Osszeadas " );
		add1 = add1*1;
		add2 = add2*1;
		$scope.output = add1 + add2;

		return $scope.output;
	};

	substraction = function (sub1, sub2) {
		//console.log( "Kivonas " );
		sub1 = sub1*1;
		sub2 = sub2*1;
		$scope.output = sub1 - sub2;

		return $scope.output;
	};

	multiplication = function (mult1, mult2) {
		//console.log( "Szorzas " );
		//console.log(mult1 + " " + mult2);
		mult1 = mult1*1;
		mult2 = mult2*1;
		//console.log(mult1 + " " + mult2);

		$scope.output = mult1 * mult2;

		return $scope.output;
	};

	division = function (div1, div2) {
		//console.log( "Osztas " );
		div1 = div1*1;
		div2 = div2*1;

		$scope.output = div1*1 / div2*1;

		return $scope.output;
	};

	$scope.outputWrite = function(number) {

		//console.log( "It is working! " + $scope.outputString );
		$scope.outputString += number;
	};

	$scope.click = function (selectedNumber) {

		if(arg1.length == 0 && arg2.length == 0)
		{
			$scope.outputString = "";
		}

		//console.log( "eleje: " + "arg1: " + arg1 + " operator: " + operator + " arg2: " + arg2 );

		arg2 += selectedNumber;

		$scope.outputWrite(selectedNumber);

		//console.log( "vege: " + "arg1: " + arg1 + " operator: " + operator + " arg2: " + arg2 );
	};

	$scope.func = function (functionClick) {
		
		if(functionClick == "=")
		{
			calculate(functionClick);
		}
		else
		{
			calculate(operator);
		}

		if(arg1.length == 0)
		{
			arg1 = arg2;
			arg2 = "";
		}
		operator = functionClick;
		if(operator != '=')
		{
			$scope.outputString += " " + operator + " ";
		}
	};

	$scope.clear = function() {
		arg1 = "";
		arg2 = "";
		operator = "";
		$scope.outputString = "";
	};

	calculate = function(oper) {
		//console.log( "arg1 " + arg1 + " arg2 " + arg2 );

		if(arg1.length != 0 && arg2.length != 0)
		{
			//console.log( arg1 + " " + operator + " " + arg2 );
			switch( oper ) {
				case '+':
					arg2 = addition(arg1, arg2);
		 	        $scope.outputString = arg2;
		 	        arg1 = "";
					break;
				case '-':
					arg2 = substraction(arg1, arg2);
		 	        $scope.outputString = arg2;
					arg1 = "";
					break;
				case '*':
					arg2 = multiplication(arg1, arg2);
		 	        $scope.outputString = arg2;
					arg1 = "";
					break;
				case '/':
					arg2 = division(arg1, arg2);
		 	        $scope.outputString = arg2;
					arg1 = "";
					break;
				case '=':
					calculate(operator);
					arg1 = "";
					arg2 = "";
					operator = "";
					//console.log( "end of equal" );
					break;
			};
		}	
	};
});
