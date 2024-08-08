alert("this's a simple calculator using javascript");
var display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input
}


function calculate(){
    //clearDisplay();
    display.value = eval(display.value)
}

function clearDisplay(){

    display.value = "";
}