const display = document.getElementById("display");
const keys = document.getElementById("keys");

let expression = "";

function updateDisplay() {
  display.textContent = expression || "0";
}

function isOperator(value) {
  return value === "+" || value === "-" || value === "*" || value === "/";
}

function appendValue(value) {
  expression += value;
  updateDisplay();
}

function clearAll() {
  expression = "";
  updateDisplay();
}

function deleteOne() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    expression = eval(expression).toString();
  } catch {
    expression = "";
    display.textContent = "Error";
    return;
  }

  updateDisplay();
}

keys.addEventListener("click", function (event) {
  const button = event.target;

  if (button.dataset.value) {
    appendValue(button.dataset.value);
  }

  if (button.dataset.action === "clear") {
    clearAll();
  }

  if (button.dataset.action === "delete") {
    deleteOne();
  }

  if (button.dataset.action === "equals") {
    calculate();
  }
});

