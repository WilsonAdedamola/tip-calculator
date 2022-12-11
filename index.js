const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const error = document.getElementById('error')
const input1 = document.getElementById('inp1')
const input2 = document.getElementById('inp2')
const input3 = document.getElementById('inp3') 
const amount1 = document.getElementById('amount1') 
const amount2 = document.getElementById('amount2')
const resetBtn = document.getElementById('reset')  

let percentage = [5/100, 10/100, 15/100, 25/100, 50/100]
let result1 = ""
let result2 = ""
let inputValue1 = ""
let inputValue2 = ""
let inputValue3 = ""
let regex = ""
let isValid = ""

function values() {
    inputValue1 = input1.value
    inputValue3 = input3.value
}

function answer(percent) {
    input3.style.outline = "none"
    inputValue1 = input1.value
    inputValue3 = input3.value
    resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)"
    result1 = percent * inputValue1 
    result2 = result1 / inputValue3
    amount1.textContent = "$" + result2.toFixed(2)
    amountValue1 = result2.toFixed(2)
    amount2.textContent = "$" + (inputValue1 / inputValue3 + parseFloat(amountValue1)).toFixed(2)
}

function validation(inputvalues){
    regex = /^\d*\.?\d*$/
    isValid = regex.test(inputvalues.value)
    if(!isValid){
        alert("Invalid input")
        inputvalues.value = ""
    }else{
        inputvalues.style.fontWeight = 700
    }
}

function getValue1() {
    validation(input1)
}

function getValue2() {
    inputValue2 = input2.value
    validation(input2)
    if(input1.value == ""){
        alert("Input the bill")
        input2.value = ""
    }
    else if(input3.value == ""){
        error.textContent = "Can't be zero"
        input3.style.outline = "2px solid rgb(239, 102, 102)"
        input2.value = ""
    }else{
        input2.style.fontWeight = 700
        values() 
        answer(inputValue2/100)
    }
}

function getValue3() {
    error.textContent = ""
    input3.style.outline = "none"
    validation(input3)
}

btn1.addEventListener("click", function() {
    if(input1.value == ""){
        alert("Input the bill")
    }
    else if(input3.value == ""){
        error.textContent = "Can't be zero"
        input3.style.outline = "2px solid rgb(239, 102, 102)"
    }
    
    else{
        values()
        answer(percentage[0])
    }
})

btn2.addEventListener("click", function() {
    if(input1.value == ""){
        alert("Input the bill")
    }
    else if(input3.value == ""){
        error.textContent = "Can't be zero"
        input3.style.outline = "2px solid rgb(239, 102, 102)"
    }else{
        values()
        answer(percentage[1])
    }
})

btn3.addEventListener("click", function() {
    if(input1.value == ""){
        alert("Input the bill")
    }
    else if(input3.value == ""){
        error.textContent = "Can't be zero"
        input3.style.outline = "2px solid rgb(239, 102, 102)"
    }else{
        values()
        answer(percentage[2])
    }
})

btn4.addEventListener("click", function() {
    if(input1.value == ""){
        alert("Input the bill")
    }
    else if(input3.value == ""){
        error.textContent = "Can't be zero"
        input3.style.outline = "2px solid rgb(239, 102, 102)"
    }else{
        values()
        answer(percentage[3])
    }
})

btn5.addEventListener("click", function() {
    if(input1.value == ""){
        alert("Input the bill")
    }
    else if(input3.value == ""){
        error.textContent = "Can't be zero"
        input3.style.outline = "2px solid rgb(239, 102, 102)"
    }else{
        values()
        answer(percentage[4])
    }
})

resetBtn.addEventListener("click", function() {
    input1.value = ""
    input2.value = ""
    input3.value = ""
    amount1.textContent = "$0.00"
    amount2.textContent = "$0.00"
    input1.style.fontWeight = 300
    input2.style.fontWeight = 300
    input3.style.fontWeight = 300
    nput3.style.outline = "none"
    resetBtn.style.backgroundColor = "hsl(186, 14%, 43%)"
})