class Calculator {
  constructor(prevDisplay, currDisplay) {
    this.prevDisplay = prevDisplay;
    this.currDisplay = currDisplay;
    this.clear();
  }

  clear() {
    this.current = "";
    this.previous = "";
    this.operation = undefined;
  }

  delete() {
    this.current = this.current.toString().slice(0, this.current.length - 1);
  }

  appendNumber(num) {
    if (num === "." && this.current.includes(".")) {
      return;
    }
    this.current = this.current.toString() + num.toString();
  }

  chooseOperation(op) {
    if (this.current === "") return;

    if (this.previous !== "") {
      this.compute();
    }

    this.operation = op;
    this.previous = this.current;
    this.current = "";
  }

  compute() {
    let result;
    const prevNum = parseFloat(this.previous);
    const currNum = parseFloat(this.current);

    if (isNaN(prevNum) || isNaN(currNum)) return;

    if (this.operation === "+") {
      result = prevNum + currNum;
    } else if (this.operation === "-") {
      result = prevNum - currNum;
    } else if (this.operation === "*") {
      result = prevNum * currNum;
    } else if (this.operation === "÷") {
      result = prevNum / currNum;
    } else {
      return;
    }

    this.current = result;
    this.operation = undefined;
    this.previous = "";
  }

  formatNumber(num) {
    const stringNum = num.toString();
    const integerPart = parseFloat(stringNum.split(".")[0]);
    const decimalPart = stringNum.split(".")[1];

    let formattedInt;

    if (isNaN(integerPart)) {
      formattedInt = "";
    } else {
      formattedInt = integerPart.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }

    if (decimalPart != null) {
      return `${formattedInt}.${decimalPart}`;
    } else {
      return formattedInt;
    }
  }

  updateDisplay() {
    this.currDisplay.innerText = this.formatNumber(this.current);

    if (this.operation != null) {
      this.prevDisplay.innerText = `${this.formatNumber(this.previous)} ${
        this.operation
      }`;
    } else {
      this.prevDisplay.innerText = "";
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-all-clear]");
const prevDisplay = document.querySelector("[data-previous-operand]");
const currDisplay = document.querySelector("[data-current-operand]");

const calc = new Calculator(prevDisplay, currDisplay);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calc.appendNumber(button.innerText);
    calc.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calc.chooseOperation(button.innerText);
    calc.updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  calc.compute();
  calc.updateDisplay();
});

clearButton.addEventListener("click", () => {
  calc.clear();
  calc.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calc.delete();
  calc.updateDisplay();
});
