"use strict"

function getInputEntryNumber1() {
    return  document.forms["calculate"]["number1"].value
}

function getInputEntryNumber2() {
    return document.forms["calculate"]["number2"].value
}




function checkIfInputEntriesIsEmpty() {
    if (getInputEntryNumber1() == '' || getInputEntryNumber1() == undefined)
        return true
    if (getInputEntryNumber2() == '' || getInputEntryNumber2() == undefined)
        return true
}

function RetrieveAndCalculate() {
    
    if (checkIfInputEntriesIsEmpty()) {
        window.alert("enter input number into the box");
    }
    
    else {
        let number1_str = getInputEntryNumber1()
        let number2_str = getInputEntryNumber2()
        let number1_int = Number.parseInt(number1_str)
        let number2_int = Number.parseInt(number2_str)
        let result = number1_int + number2_int
        let resultElement = document.getElementById("result")
        resultElement.innerHTML = result
    }
}
