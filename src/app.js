import "bootstrap";
import "./style.css";

window.onload = function() {
  // assign random suit, color (black is default) and number
  let symbol = randomSuits();
  if (symbol === "♥" || symbol === "♦") {
    document.querySelector("#top").innerHTML = symbol;
    document.querySelector("#bottom").innerHTML = document.querySelector(
      "#top"
    ).innerHTML;
    document.querySelector("#top").style.color = "red";
    document.querySelector("#bottom").style.color = "red";
    document.querySelector(".number").innerHTML = randomNumber();
    document.querySelector(".number").style.color = "red";
  } else {
    document.querySelector("#top").innerHTML = symbol;
    document.querySelector("#bottom").innerHTML = document.querySelector(
      "#top"
    ).innerHTML;
    document.querySelector(".number").innerHTML = randomNumber();
  }
};

function randomNumber() {
  let cardNumber = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let indexNumber = Math.floor(Math.random() * cardNumber.length);
  return cardNumber[indexNumber];
}

function randomSuits() {
  let suits = ["♣", "♥", "♠", "♦"];
  let indexSuits = Math.floor(Math.random() * suits.length);
  return suits[indexSuits];
}
