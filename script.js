function calculateTax(type) {
    var income = document.getElementById("income").value;
    var resultElement = document.getElementById("result");

    if (type === 'weekly') {
        if (income <= 250000) {
            var tax = (income * 3.75) / 100;
            resultElement.innerHTML = "Weekly Tax: " + tax;
        } else if (income <= 375000) {
            var tax = (income * 5) / 100;
            resultElement.innerHTML = "Weekly Tax: " + tax;
        } else if (income <= 500000) {
            var tax = (income * 6.25) / 100;
            resultElement.innerHTML = "Weekly Tax: " + tax;
        } else {
            var tax = (income * 7.5) / 100;
            resultElement.innerHTML = "Weekly Tax: " + tax;
        }
    } else if (type === 'monthly') {
        if (income <= 1000000) {
            var tax = (income * 15) / 100;
            resultElement.innerHTML = "Monthly Tax: " + tax;
        } else if (income <= 1500000) {
            var tax = (income * 20) / 100;
            resultElement.innerHTML = "Monthly Tax: " + tax;
        } else if (income <= 2000000) {
            var tax = (income * 25) / 100;
            resultElement.innerHTML = "Monthly Tax: " + tax;
        } else if (income > 2000000) {
            var tax = (income * 30) / 100;
            resultElement.innerHTML = "Monthly Tax: " + tax;
        }
    }
}
