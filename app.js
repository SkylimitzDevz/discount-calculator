// outputs
let outputEl = document.getElementById("output-el")
let discountEl = document.getElementById("discount-el")
// inputs
let ageInput = document.getElementById("age-input")
let priceInput = document.getElementById("price-input")

//--discounts--

let discounts = {
    childDiscount: 20,
    studentDiscount: 25,
    seniorDiscount: 40
}

let result = 0

// --dicount cal--

function calculate(priceInput){
    result = priceInput + discounts.childDiscount / 100
    console.log(result)
    console.log(priceInput.innerText)
}


