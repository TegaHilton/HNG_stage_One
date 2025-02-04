const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F3FF33",
  "#FF33F3",
  "#33FFF3",
];
let targetColor,
  score = 0;

function initGame() {
  targetColor = colors[(Math.random() * colors.length) | 0];
  document.querySelector('[data-testid="colorBox"]').style.backgroundColor =
    targetColor;
  const gameStatus = document.querySelector('[data-testid="gameStatus"]');
  gameStatus.textContent = "";
  gameStatus.classList.remove("correct", "wrong", "show");
  document.querySelector(
    '[data-testid="score"]'
  ).textContent = `Score: ${score}`;
  const options = document.getElementById("colorOptions");
  options.innerHTML = colors
    .map(
      (c) =>
        `<div class="color-option" style="background:${c}" onclick="checkGuess('${c}', this)"></div>`
    )
    .join("");
}

function checkGuess(guessedColor, clickedOption) {
  const gameStatus = document.querySelector('[data-testid="gameStatus"]');
  if (guessedColor === targetColor) {
    gameStatus.textContent = "Correct!";
    gameStatus.classList.add("correct", "show");
    clickedOption.classList.add("correct");
    score++;
    document.querySelector(
      '[data-testid="score"]'
    ).textContent = `Score: ${score}`;
    setTimeout(() => {
      initGame();
    }, 1500);
  } else {
    gameStatus.textContent = "Wrong! Try again.";
    gameStatus.classList.add("wrong", "show");
    setTimeout(() => {
      gameStatus.classList.remove("show");
    }, 1000);
  }
}

document.querySelector('[data-testid="newGameButton"]').onclick = () => {
  score = 0;
  initGame();
};

initGame();
