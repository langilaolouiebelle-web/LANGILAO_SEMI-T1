function generateFullName() {

    var first = document.getElementById("fname").value;
    var middle = document.getElementById("mname").value;
    var last = document.getElementById("lname").value;

    var full = first + " " + middle + " " + last;

    document.getElementById("fullname").innerHTML = full;
}

function clearEntries() {
    document.getElementById("fname").value = "";
    document.getElementById("mname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("fullname").innerHTML = "";
}