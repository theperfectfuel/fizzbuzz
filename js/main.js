$(document).ready(function() {

	var myVar = 1;
	while (myVar <= 100) {

		if (myVar%3 == 0 && myVar%5 ==0) {
			$("body").append("FizzBuzz" + "<br />");
			myVar++;
		}

		else if (myVar%3 == 0) {
			$("body").append("Fizz" + "<br />");
			myVar++;
		}

		else if (myVar%5 == 0) {
			$("body").append("Buzz" + "<br />");
			myVar++;
		}

		else {
			$("body").append(myVar + "<br />");
			myVar++;
		}

	}

});