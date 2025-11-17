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

function getDiscount(age){
    if(age <= 0 || isNaN(age)){return "ENTER"}
    if(age <= 6){return "free"}
    if(age >= 6 && age <= 17){return discounts.childDiscount}
    if(age >= 18 && age <= 26){return discounts.studentDiscount}
    if(age >= 27 && age <= 66){return 0}
    else{return discounts.seniorDiscount}
}


function calculate(){
    let age = Number(ageInput.value)
    let price = Number(priceInput.value)
    let discount = getDiscount(age)

    if(discount === "ENTER"){
        outputEl.innerText = "ENTER"
    }
    if(discount === "free"){
        outputEl.innerText = price
        discountEl.innerText = "free"
    }
    else{
        let total = price - (price * (discount /100))
        outputEl.innerText = "$" + total
        discountEl.innerText = discount + "%"
    }
}

