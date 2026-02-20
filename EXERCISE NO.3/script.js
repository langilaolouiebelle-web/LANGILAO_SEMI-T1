let numbers = [];

function insertNumber() {
    let input = document.getElementById("numberInput");
    let value = Number(input.value);

    if (input.value === "") {
        alert("Please enter a number");
        return;
    }

    numbers.push(value);
    input.value = "";
    displayNumbers();
    calculateStats();
}

function deleteAll() {
    numbers = [];
    displayNumbers();
    calculateStats();
}

function displayNumbers() {
    document.getElementById("numbersList").innerHTML = numbers.join("<br>");
}

function calculateStats() {
    if (numbers.length === 0) {
        document.getElementById("sum").textContent = 0;
        document.getElementById("highest").textContent = 0;
        document.getElementById("lowest").textContent = 0;
        return;
    }

    let sum = numbers.reduce((a, b) => a + b, 0);
    let highest = Math.max(...numbers);
    let lowest = Math.min(...numbers);

    document.getElementById("sum").textContent = sum;
    document.getElementById("highest").textContent = highest;
    document.getElementById("lowest").textContent = lowest;
}