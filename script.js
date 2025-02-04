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
  gameStatus.textContent = ""; // Clear status
  gameStatus.classList.remove("correct", "wrong", "show"); // Reset classes
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
    gameStatus.classList.add("correct", "show"); // Apply correct styling and show
    clickedOption.classList.add("correct"); // Highlight the correct option
    score++;
    document.querySelector(
      '[data-testid="score"]'
    ).textContent = `Score: ${score}`;
    setTimeout(() => {
      initGame(); // Start a new round after a short delay
    }, 1500); // Delay to allow animation
  } else {
    gameStatus.textContent = "Wrong! Try again.";
    gameStatus.classList.add("wrong", "show"); // Apply wrong styling and show
    setTimeout(() => {
      gameStatus.classList.remove("show"); // Remove show class to hide after fade-out
    }, 1000); // Duration of fade-out animation
  }
}

document.querySelector('[data-testid="newGameButton"]').onclick = () => {
  score = 0;
  initGame();
};

initGame();
