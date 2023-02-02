const elemSearch = document.querySelector("#search");
const containerSearch = elemSearch.parentElement;

elemSearch.addEventListener("focusin", (e) => {
  containerSearch.classList.remove("container-search");
  containerSearch.classList.add("container-search-active");
});
elemSearch.addEventListener("focusout", (e) => {
  containerSearch.classList.add("container-search");
  containerSearch.classList.remove("container-search-active");
});

const apps = [...document.querySelectorAll("main .app")];

apps.forEach((app, index) => {
  app.addEventListener("click", (e) => {
    console.log("App ativado")
    app.classList.add("app-active");
  });
  app.addEventListener("drag", () => {});
  app.addEventListener("dragstart", () => {});
  app.addEventListener("dragend", (e) => {
    const elem = e.target;
    const father = elem.parentElement;
    father.style.top = `${e.clientY}px`;
    father.style.left = `${e.clientX}px`;
  });
});

const appCalculator = document.querySelector(".appCalculator");

async function showCalculator() {
  const response = await fetch("../../calculadora/calculadora.html");
  const html = await response.text();
  document.querySelector(".desktop").innerHTML += html;

  document.querySelector(".calculator").classList.add("calculator-active")
}

appCalculator.addEventListener("click", showCalculator);
