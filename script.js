const display = document.getElementById("display");
let currentInput = "";

//for numbers
document.querySelectorAll(".number").forEach(button => {
  button.onclick = () => {
    currentInput += button.textContent;
    display.value += button.textContent;
  };
});

//for functions
document.getElementById("plus").onclick = () => { 
    currentInput += "+";  
    display.value += "+"; 
};
document.getElementById("minus").onclick = () => { 
    currentInput += "-";  
    display.value += + "-";
};
document.getElementById("times").onclick = () => { 
    currentInput += "*"; 
    display.value += "×";
};
document.getElementById("over").onclick = () => { 
    currentInput += "/"; 
    display.value += "÷";
};
document.getElementById("clear").onclick = () => { currentInput = ""; display.value = ""; };

//solving
document.getElementById("equals").onclick = () => {
  try {
    display.value = eval(currentInput);
    currentInput = display.value;
  } catch {
    display.value = "Error";
    currentInput = "";
  }
};