/****************************************************
* Assignment 1 - ICT 442: Random Operation Calculator FIRST CUT
* Author: Logan Fidler 
* Date: November 24, 2019
*****************************************************/

function randomCalculator() {
    var num1, num2, randomNum, result, operation;
    
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    
    randomNum = Math.floor(Math.random() * 4);

    switch (randomNum) {
        case 0:
            result = num1 + num2;
            operation = num1.toString() + " + " + num2.toString();
            break;
        case 1:
            result = num1 - num2;
            operation = num1.toString() + " - " + num2.toString();
            break;
        case 2:
            result = num1 * num2;
            operation = num1.toString() + " x " + num2.toString();
            break;
        case 3:
            result = num1 / num2;
            operation = num1.toString() + " / " + num2.toString();
    }

    inputAnswer = prompt("What is the answer to " + operation + "?");

    if (parseFloat(inputAnswer) === result) {
        document.getElementById("result").value = "The answer is " + result + ", you are correct."
    }
    else {
        document.getElementById("result").value = "The answer is " + result + ", you are incorrect."
    }

    document.getElementById("calcButton").disabled = true;
}

function resetForm() {
    document.getElementById("calculatorBody").reset();
    document.getElementById("calcButton").disabled = false;
}