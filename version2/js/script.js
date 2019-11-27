/****************************************************
* Assignment 1 - ICT 442: Random Operation Calculator SECOND CUT
* Author: Logan Fidler
* Date: November 24, 2019
*****************************************************/

var num1, num2, randomNum, result, operation, inputAnswer;

function runProgram() {
    //grab and store the inputs from the user
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    
    // generate random number to determine operation
    randomNum = Math.floor(Math.random() * 4);
    
    // determine the operation and its solution.
    generateOperator(num1, num2, randomNum);
    
    // take the answer from the user via prompt and store it
    inputAnswer = prompt("What is the answer to " + operation + "?");
    
    // check the answer
    compareAnswer(inputAnswer, result);
    
    //disable the calcButton (is this necessary even?)
    document.getElementById("calcButton").disabled = true;
}

function generateOperator(num1, num2, randomNum) {
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
}

function compareAnswer(inputAnswer, result) {
    if (parseFloat(inputAnswer) === result) {
        document.getElementById("result").value = "The answer is " + result + ", you are correct."
    }
    else {
        document.getElementById("result").value = "The answer is " + result + ", you are incorrect."
    }
}

function resetForm() {
    document.getElementById("calculatorBody").reset();
    document.getElementById("calcButton").disabled = false;
}