function calculate() {

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter both numbers!");
        return;
    }
    
    var sum = num1 + num2;
    var difference = num1 - num2;
    var product = num1 * num2;
    var quotient = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

    document.getElementById("sum").innerHTML = sum;
    document.getElementById("difference").innerHTML = difference;
    document.getElementById("product").innerHTML = product;
    document.getElementById("quotient").innerHTML = quotient;
}

function clearFields() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("sum").innerHTML = "";
    document.getElementById("difference").innerHTML = "";
    document.getElementById("product").innerHTML = "";
    document.getElementById("quotient").innerHTML = "";
}
