/*define function that will respond to event */
function calculate() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var solun;
  
  /*finding which radio button is selected*/ 
  var operator_radio_pointers = document.getElementsByName("math");
  var which_operator;
  for (var i = '0'; i < operator_radio_pointers.length; i++) {
    if (operator_radio_pointers[i].checked) {
      which_operator = operator_radio_pointers[i].value;
      break;
    }
  }
  
  if (num1 === "" || num2 === "" || which_operator === "") {
    solun = "Please tell us what to crunch.";
  } else if (which_operator === "+") {
    solun = Number(num1) + Number(num2);
  } else if (which_operator === "-") {
    solun = num1 - num2;
  } else if (which_operator === "*") {
    solun = num1 * num2;
  } else if (which_operator === "/") {
    if (num2 === "0") {
      solun = "Nope. Can't do that.";
    } else {
      solun = num1 / num2;
    }
  }
  document.getElementById("answer").textContent = solun;
}

/*Event Listeners*/
document.getElementById("num1").addEventListener("keyup", calculate, false);
document.getElementById("num2").addEventListener("keyup", calculate, false);

document.getElementById("+").addEventListener("change", calculate, true);
document.getElementById("-").addEventListener("change", calculate, true);
document.getElementById("*").addEventListener("change", calculate, true);
document.getElementById("/").addEventListener("change", calculate, true);
