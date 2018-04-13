currentInput = "0"


//NumberPress is a function that handles when a button is pressed.
 //Its parameter will intake a single character and if that character is not zero
 //then it is added on to the string of other characters.
function numberPress(value) {
    value = value.toString()
    if (currentInput === "0") {
        currentInput = value;
        console.log(currentInput)
    }
    else {
        currentInput += value;
        console.log(currentInput)
    }
    document.getElementById("main").value = currentInput
}
