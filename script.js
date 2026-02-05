const screens = {
  landing: document.getElementById("landing"),
  proposal: document.getElementById("proposal"),
  celebration: document.getElementById("celebration")
};

const openProposal = document.getElementById("openProposal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const teaseText = document.getElementById("teaseText");
const dateInfo = document.getElementById("dateInfo");

const teaseMessages = [
  "Really? Think again 😘",
  "Nice try, pretty girl 💕",
  "Nope! The universe says yes 🌟",
  "You can run, but love wins 🏹",
  "Caught you! Try pressing yes 💖"
];

let dodgeCount = 0;

function showScreen(key) {
  Object.values(screens).forEach((screen) => {
    screen.classList.remove("screen--active");
    screen.setAttribute("aria-hidden", "true");
  });

  screens[key].classList.add("screen--active");
  screens[key].setAttribute("aria-hidden", "false");
}

function moveNoButton() {
  const bounds = screens.proposal.getBoundingClientRect();
  const maxX = bounds.width - noBtn.offsetWidth - 30;
  const maxY = bounds.height - noBtn.offsetHeight - 30;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  teaseText.textContent = teaseMessages[dodgeCount % teaseMessages.length];
  dodgeCount += 1;

  yesBtn.style.transform = `scale(${Math.min(1.4, 1 + dodgeCount * 0.05)})`;
}

openProposal.addEventListener("click", () => {
  showScreen("proposal");
});

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  showScreen("celebration");
  dateInfo.classList.add("hidden");

  setTimeout(() => {
    dateInfo.classList.remove("hidden");
  }, 5000);
});
