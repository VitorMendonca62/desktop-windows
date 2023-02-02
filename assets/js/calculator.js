const elemNumbers = [...document.querySelectorAll(".numbers")];
const elemOperador = [...document.querySelectorAll(".operador")];
const display = document.querySelector(".display");
const span = document.querySelector(".container-display span");
const backspace = document.querySelector(".backspace");
const elemClearScreen = document.querySelector(".clear-screen");
const elemClearDisplay = document.querySelector(".clear-display");
const decimal = document.querySelector(".decimal");
const igual = document.querySelector(".igual");

let isSafe = false;

function addNumber(e, number) {
  const elem = number ? number : e.target;
  const numberDisplay = number ? number : elem.innerText;

  if (isSafe) {
    display.value = "";
  }
  if (display.value.length <= 16) {
    display.value += numberDisplay;
    isSafe = false;
    return "";
  }
}

function addOperador(e, operador) {
  const elem = operador ? operador : e.target;
  const operadorDisplay = operador ? operador : elem.innerText;
  const lastDigit = display.value.split("").pop();

  const someElementIs = () => {
    return (
      lastDigit != "+" &&
      lastDigit != "/" &&
      lastDigit != "*" &&
      lastDigit != "-"
    );
  };

  if ([...display.value].pop() === ".") {
    display.value = display.value.replace(".", "");
  }

  if (span.innerHTML.length === 0) {
    if (display.value.length != 0) {
      if (someElementIs()) {
        span.innerHTML = `${display.value} ${operadorDisplay}`;
        isSafe = true;
      }
    }
  } else {
    if (!isSafe) {
      const valueSpan = span.innerHTML;
      const valueDisplay = display.value;

      const stringResult = `${valueSpan} ${valueDisplay}`.replaceAll(" ", "");
      const result = eval(stringResult);

      span.innerHTML = `${result} ${operadorDisplay}`;
      display.value = result;
      isSafe = true;
    } else {
      span.innerHTML = span.innerText.replace(/[\-\/\*\+]/g, operadorDisplay);
    }
  }
}

function deleteLast() {
  const valueDisplay = display.value.split("");
  valueDisplay.pop();
  display.value = "";
  valueDisplay.forEach((elem) => (display.value += elem));
}

function cleanScreen() {
  display.value = "";
  span.innerHTML = "";
}

function cleanDisplay() {
  display.value = "";
}

function addDecimal() {
  if (!display.value.includes(".")) {
    if (display.value.length === 0) {
      display.value = "0.";
    } else {
      display.value += ".";
    }
  }
}

function showResult() {
  if (span.innerHTML.length === 0) {
    span.innerHTML = `${display.value} +`;
  } else if (span.innerHTML.replaceAll(/[^0-9]/g, "") === display.value) {
    const stringResult = `${span.innerHTML} ${display.value}`.replaceAll(
      " ",
      ""
    );
    const result = eval(stringResult);

    span.innerHTML = `${result} + ${display.value} +`;
    display.value = result;
  }

  isSafe = true;
}

window.addEventListener("keydown", () => {
  const key = Number(event.key) ? Number(event.key) : event.key;
  // console.log(key);

  if (!isNaN(key)) addNumber("", key);

  if (key === "+" || key === "/" || key === "x" || key === "-")
    addOperador("", key);

  if (key === "Backspace") deleteLast();
});

igual.addEventListener("click", showResult);
decimal.addEventListener("click", addDecimal);
elemClearDisplay.addEventListener("click", cleanDisplay);
elemClearScreen.addEventListener("click", cleanScreen);
backspace.addEventListener("click", deleteLast);
elemOperador.forEach((elem) => {
  elem.addEventListener("click", addOperador);
});
elemNumbers.forEach((elem) => {
  elem.addEventListener("click", addNumber);
});


