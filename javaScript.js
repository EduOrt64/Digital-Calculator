let operator = '';
let previousValue = '';
let currentValue = '';
let result = '';

document.addEventListener('DOMContentLoaded', function(){

// Select components in HTML and JS
 const buttonsNumbers = document.querySelectorAll(".numbers");
 const buttonsOperators = document.querySelectorAll("[name=operator]");
 const buttonReset = document.querySelector("[name=reset]");
 const buttonEqual = document.querySelector("[name=equal]");
 const buttonDecimal = document.querySelector(".decimal");
 const buttonPlusMinus= document.querySelector("[name=plus-minus]")

 const currentScreen = document.querySelector(".current");
 const previousScreen = document.querySelector(".previous");
 
//event listener to target the number it's been pressed and update current screen
buttonsNumbers.forEach((number)=> number.addEventListener("click",(e) => {
    targetNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
} ));

//event listener to activate the decimal but.
buttonDecimal.addEventListener("click",function(){
    addDecimal()
});
//event listener to activate the plus minus
buttonPlusMinus.addEventListener("click",function(){
  addMinus();
  currentScreen.textContent = currentValue;
    
});

//event listener to target the operation 
buttonsOperators.forEach((operation)=> operation.addEventListener("click",(e) =>{
targetOperation(e.target.textContent);
previousScreen.textContent = previousValue + " " + operator;
currentScreen.textContent = currentValue;

}));

//event listener to reset calculator AC but
buttonReset.addEventListener('click', () =>{
currentValue = "";
previousValue = "";
operator = "";
currentScreen.textContent = currentValue;
previousScreen.textContent = currentValue;

});

// setting button equal
buttonEqual.addEventListener('click',function(){
 if(previousValue != "" && currentValue !=""){
    calculate();
    previousScreen.textContent = "";
    currentScreen.textContent = previousValue;}
})

})

//function update variable current value
function targetNumber(n){
    if(currentValue.length <= 9){
currentValue += n}
};

//function update varibale operator
function targetOperation(op){
    operator = op;
    previousValue = currentValue;
    currentValue = "";
};

// function to do operations
function calculate(){
previousValue = Number(previousValue);
currentValue = Number(currentValue);

if (operator === "+"){
 result = previousValue += currentValue;
} else if (operator ==="-") {
    previousValue -= currentValue;
} else if (operator ==="X") {
    previousValue *= currentValue;
} else if (operator ==="÷"){
    previousValue /= currentValue;
} else (previousValue / currentValue) * 100 

};
//function to add decimal
function addDecimal(){
    if(!currentValue.includes(".")){
   currentValue += "."

    }
};
//function to add plus minus
function addMinus() {
    if (currentValue.startsWith("-")) {
        currentValue = currentValue.slice(1); 
    } else {
        currentValue = "-" + currentValue; 
    }
}