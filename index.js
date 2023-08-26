const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");

let expression = "";     // Store the original expression
let currentInput = "";   // Store the current input (for display)

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let tap = button.innerHTML;
    
    if (tap == "=") {
      try {
        expression = currentInput;
        currentInput = eval(expression).toString();
        display.value = currentInput;
      } catch (error) {
        display.value = "Invalid Syntax";
      }
    } else if (tap == "AC") {
      expression = "";
      currentInput = "";
      display.value = currentInput;
    } else if (tap == "DEL") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else {
      currentInput += tap;
      display.value = currentInput;
    }
  });
});
