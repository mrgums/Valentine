const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const card = document.getElementById("card");
const celebration = document.getElementById("celebration");

let noClicks = 0;

let yesSize = 18;
let yesPadding = 12;

let noSize = 18;
let noPadding = 12;

const messages = [
    "Are you sure? 😢",
    "Really sure? 🥺",
    "Think again 😭",
    "I’ll buy you food 🍔",
    "Libre kita milktea 🧋",
    "Jollibee treat? 🍗",
    "Please? One chance lang 💔",
    "My heart is loading... 💘",
    "Last chance before I cry 😭",
    "Okay fine… you win… 😞"
];

noBtn.addEventListener("click", () => {

    if (noClicks < 10) {
        message.textContent = messages[noClicks];
        noClicks++;

        // Grow YES button naturally
        yesSize += 4;
        yesPadding += 5;

        yesBtn.style.fontSize = yesSize + "px";
        yesBtn.style.padding = yesPadding + "px " + (yesPadding + 15) + "px";

        // Shrink NO button
        noSize -= 2;
        noPadding -= 2;

        if (noSize > 8) {
            noBtn.style.fontSize = noSize + "px";
            noBtn.style.padding = noPadding + "px " + (noPadding + 10) + "px";
        }

        noBtn.classList.add("shake");
        setTimeout(() => noBtn.classList.remove("shake"), 300);
    }

    if (noClicks === 10) {
        noBtn.style.display = "none";
        message.textContent = "You can’t escape destiny 😌💖";
    }
});

yesBtn.addEventListener("click", () => {
    card.style.display = "none";
    celebration.classList.remove("hidden");
    startHearts();
});

function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
}
