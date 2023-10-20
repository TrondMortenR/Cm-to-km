function unitConverter() {
    const myInput = document.querySelector('#myInputID').value;
    const fromValue = document.querySelector('#fromValueID').value;
    const toValue = document.querySelector('#toValueID').value;

    const displayValue = document.querySelector('#displayValueID');

    let result;
    if (fromValue === "cm" && toValue === "m") {
		result = myInput / 100;
	} 
    else if (fromValue === "cm" && toValue === "km") {
		result = myInput / 100000;
	} 
    else if (fromValue === "m" && toValue === "cm") {
		result = myInput * 100;
	} 
    else if (fromValue === "m" && toValue === "km") {
		result = myInput / 1000; 
	} 
    else if (fromValue === "km" && toValue === "cm") {
		result = myInput * 100000; 
	} 
    else if (fromValue === "km" && toValue === "m") {
		result = myInput * 1000;
	} else {
	}

displayValue.textContent = result.toFixed(3);
}