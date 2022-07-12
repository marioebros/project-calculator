let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplayNumber = document.querySelector("currentNumber");
const previousDisplayNumber = document.querySelector("previousNumber");

const equal = document.querySelector(".equal");

const decimal = document.querySelector(".decimal");

const clear = document.querySelector(".clear");

const numberButtons = document.querySelectorAll(".number");

const operators = document.querySelectorAll(".operator");

numberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
  });
});

function handleNumber(number) {
  console.log(number);
}
