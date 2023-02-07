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
    console.log("App ativado");
    app.classList.add("app-active");
  });
  app.addEventListener("drag", () => {});
  app.addEventListener("dragend", (e) => {
    const elem = e.target;
    const father = elem.parentElement;
    father.style.top = `${e.clientY}px`;
    father.style.left = `${e.clientX}px`;
  });
});

const appCalculator = document.querySelector(".appCalculator");
const footerApps = [...document.querySelectorAll(".footer-app")];

footerApps.forEach((ap) => {
  ap.addEventListener("click", () => {
    const app = ap.getAttribute("app");

    if (app === "calculator") {
      document.querySelector(".calculator").classList.toggle("calculator-active")
    }
  });
});

appCalculator.addEventListener("click", showCalculator);

const elemClose = document.querySelector(".container-close");
const elemMinimizer = document.querySelector(".container-minimizer");

elemClose.addEventListener("click", () => {
  document.querySelector(".calculator").classList.remove("calculator-active");
  document.querySelector(".footer-app").classList.remove("footer-app-active");
});

elemMinimizer.addEventListener("click", () => {
  document.querySelector(".calculator").classList.remove("calculator-active");
});

function showCalculator() {
  document.querySelector(".calculator").classList.add("calculator-active");
  document.querySelector(".footer-app").classList.add("footer-app-active");
}

const openApps = [...document.querySelectorAll(".open-app header")];

openApps.forEach((app) =>
  app.addEventListener("mousemove", (e) => {
    const itemEvent = e.target;
    let father = itemEvent.parentElement;

    if (e.buttons) {
      while (!father.classList.contains("open-app")) {
        father = father.parentElement;
      }
      father.style.cursor = "move";
      father.style.left = `${e.clientX - father.clientWidth / 2}px`;
      father.style.top = `${e.clientY - itemEvent.clientHeight / 2}px`;
    }
    // console.log(father)

    // if (e.buttons) {
    //   itemEvent.style.top = `${event.clientY - itemEvent.clientHeight / 2}px`;
    //   itemEvent.style.left = `${event.clientX - itemEvent.clientWidth / 2}px`;
    // }
  })
);
