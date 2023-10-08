let inputs = document.querySelector("#inputbox");
let symbols = ["+", "*", "/", "="]

//display numbers in input
function display(number){
   if(inputs.value === "" && symbols.includes(number))return;
   inputs.value += number;
}

// Equal operator 
function equal(){
   let result = inputs.value;
   let f_result = eval(result);
   inputs.value = parseFloat(f_result.toFixed(3));
}

//clear
function reset(){
   inputs.value = "";
}

//delete button
function delFun(){
   inputs.value = inputs.value.slice(0, -1);
}


