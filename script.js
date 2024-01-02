function calculateTax() {
    var income = document.getElementById("income").value;
    var resultElement = document.getElementById("result");

    if (income <= 1000000) {
        var tax = (income * 15) / 100;
        resultElement.innerHTML = "The Tax to be collected: " + tax;
    } else if (income <= 1500000) {
        var tax = (income * 20) / 100;
        resultElement.innerHTML = "The Tax to be collected: " + tax;
    } else if (income <= 2000000) {
        var tax = (income * 25) / 100;
        resultElement.innerHTML = "The Tax to be collected: " + tax;
    } else if (income > 2000000) {
        var tax = (income * 30) / 100;
        resultElement.innerHTML = "The Tax to be collected: " + tax;
    }
}
