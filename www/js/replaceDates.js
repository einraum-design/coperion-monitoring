$(document).ready( function () {






	let currentYear = new Date().getFullYear();

	/*var select = document.getElementsByClassName('addTwoYears');
	select.forEach(function(element) {
  		console.log(element);
  		element.innerHTML = currentYear + 2;
	}); */

	var subOne = document.getElementsByClassName('minusOneYear');
    for (var i = 0; i < subOne.length; i++) {
        subOne[i].innerHTML = currentYear - 1;
    }

    var current = document.getElementsByClassName('currentYear');
    for (var i = 0; i < current.length; i++) {
        current[i].innerHTML = currentYear;
    }

	var plusOne = document.getElementsByClassName('addOneYear');
    for (var i = 0; i < plusOne.length; i++) {
        plusOne[i].innerHTML = currentYear + 1;
    }

	var plusTwo = document.getElementsByClassName('addTwoYears');
    for (var i = 0; i < plusTwo.length; i++) {
        plusTwo[i].innerHTML = currentYear + 2;
    }

    
	//document.getElementById('atiTwoYears').innerHTML = currentYear + 2;
	//document.getElementById('atiSameYear').innerHTML = currentYear;*/
});