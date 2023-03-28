// Initialize variables
var firstNumber = null;
var operator = null;
var secondNumber = null;
var decimal = false;

// Function to add a number to the result field
function addNumber(number) {
	if (operator === null) {
		if (firstNumber === null) {
			firstNumber = number;
		} else {
			firstNumber += number;
		}
		document.getElementById("result").value = firstNumber;
	} else {
		if (secondNumber === null) {
			secondNumber = number;
		} else {
			secondNumber += number;
		}
		document.getElementById("result").value = secondNumber;
	}
}

// Function to add a decimal point to the result field
function addDecimal() {
	if (!decimal) {
		if (operator === null) {
			if (firstNumber === null) {
				firstNumber = "0.";
			} else {
				firstNumber += ".";
			}
			document.getElementById("result").value = firstNumber;
		} else {
			if (secondNumber === null) {
				secondNumber = "0.";
			} else {
				secondNumber += ".";
			}
			document.getElementById("result").value = secondNumber;
		}
		decimal = true;
	}
}

// Function to add an operator to the calculation
function addOperator(op) {
	operator = op;
	decimal = false;
}

// Function to clear the result field
function clearResult() {
	firstNumber = null;
	operator = null;
	secondNumber = null;
	decimal = false;
	document.getElementById("result").value = "";
}

// Function to perform the calculation
function calculate() {
	if (operator !== null && secondNumber !== null) {
		var result = null;
		var first = parseFloat(firstNumber);
		var second = parseFloat(secondNumber);
		switch (operator) {
			case "+":
				result = first + second;
				break;
			case "-":
				result = first - second;
				break;
			case "*":
				result = first * second;
				break;
			case "/":
				result = first / second;
				break;
			default:
				break;
		}
		if (result !== null) {
			document.getElementById("result").value = result;
			firstNumber = result;
			operator = null;
			secondNumber = null;
			decimal = false;
		}
	}
}
