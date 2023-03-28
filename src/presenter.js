import calculadora from "./calculadora";

const cadena = document.querySelector("#cadena");
const form = document.querySelector("#calculadora-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(calculadora(cadena))
  div.innerHTML = "<p>" + parseInt(calculadora(cadena)) + "</p>";
});
