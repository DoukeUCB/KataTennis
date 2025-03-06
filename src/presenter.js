import getScore from "./tennis";

const playerOneScoreInput = document.querySelector("#first-score");
const playerTwoScoreInput = document.querySelector("#second-score");
const form = document.querySelector("#form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const playerOneScore = Number.parseInt(playerOneScoreInput.value);
  const playerTwoScore = Number.parseInt(playerTwoScoreInput.value);

  div.innerHTML = "<p>" + getScore(playerOneScore, playerTwoScore) + "</p>";
});
