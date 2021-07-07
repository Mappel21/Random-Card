import "bootstrap";
import "./style.css";

window.onload = function() {
  let symbol = randomSuits();
  if (symbol === "♥" || symbol === "♦") {
    document.querySelector("#top").innerHTML = symbol;
    document.querySelector("#bottom").innerHTML = document.querySelector(
      "#Top"
    ).innerHTML;
};
