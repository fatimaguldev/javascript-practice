const btn = document.querySelector("#generateBtn");
const swatch = document.querySelector("#swatch");
const hexLabel = document.querySelector("#hex");
const chipsContainer = document.querySelector("#chips");

const MAX_HISTORY = 6;
let history = [];

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function applyColor(color) {
  swatch.style.backgroundColor = color;
  hexLabel.textContent = color;
}

function addToHistory(color) {
  history.unshift(color);
  if (history.length > MAX_HISTORY) {
    history = history.slice(0, MAX_HISTORY);
  }
  renderHistory();
}

function renderHistory() {
  chipsContainer.innerHTML = "";
  history.forEach((color) => {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.style.backgroundColor = color;
    chip.title = color;
    chip.setAttribute("aria-label", `Use color ${color}`);
    chip.addEventListener("click", () => applyColor(color));
    chipsContainer.appendChild(chip);
  });
}

btn.addEventListener("click", () => {
  const color = getRandomColor();
  applyColor(color);
  addToHistory(color);
});

hexLabel.addEventListener("click", async () => {
  const color = hexLabel.textContent;
  try {
    await navigator.clipboard.writeText(color);
    const original = hexLabel.textContent;
    hexLabel.textContent = "Copied!";
    setTimeout(() => {
      hexLabel.textContent = original;
    }, 700);
  } catch (err) {
    console.log("Clipboard not available:", err);
  }
});

// Start with a color already generated
btn.click();
