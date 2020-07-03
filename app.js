class Calculator {
  constructor(calc, clear, numbers, output) {
    this.calc = calc;
    this.clear = clear;
    this.numbers = numbers;
    this.output = output;
    this.numbers.forEach((num) =>
      num.addEventListener(
        "click",
        (e) => (this.output.textContent += e.target.value)
      )
    );
    this.clear.addEventListener("click", this.clearNums);
    this.calc.addEventListener("click", this.clac);
  }

  clearNums = () => {
    this.output.textContent = "";
  };

  clac = () => {
    try {
      this.output.textContent = eval(this.output.textContent);
    } catch {
      return null;
    }
  };
}

const numbers = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");
const output = document.querySelector("#output");
const calc = document.querySelector("#calc");

const myCalculator = new Calculator(calc, clear, numbers, output);
