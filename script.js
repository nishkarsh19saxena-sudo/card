
// Floating hearts background
const heartsContainer = document.getElementById("hearts");

if (heartsContainer) {
    function createHeart() {
        const heart = document.createElement("span");

        heart.className = "floating-heart";
        heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";
        heart.style.animationDuration = (6 + Math.random() * 6) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 12000);
    }

    setInterval(createHeart, 500);
}

// Final page interactions
const talkBtn = document.getElementById("talkBtn");
const laterBtn = document.getElementById("laterBtn");
const response = document.getElementById("response");

if (talkBtn && response) {
    talkBtn.addEventListener("click", () => {
        response.textContent =
            "I'd love to listen whenever you're ready. ❤️";

        talkBtn.textContent = "Thank you, Kokil ♡";
        talkBtn.disabled = true;
    });
}

if (laterBtn && response) {
    laterBtn.addEventListener("click", () => {
        response.textContent =
            "Of course. Take all the time you need. I'll respect that. ♡";
    });
}
const later_Btn = document.getElementById("laterBtn");

if (laterBtn) {
    laterBtn.addEventListener("mouseenter", () => {

        const maxX = window.innerWidth - laterBtn.offsetWidth - 20;
        const maxY = window.innerHeight - laterBtn.offsetHeight - 20;

        const randomX = Math.max(10, Math.random() * maxX);
        const randomY = Math.max(10, Math.random() * maxY);

        laterBtn.style.position = "fixed";
        laterBtn.style.left = randomX + "px";
        laterBtn.style.top = randomY + "px";
    });
}
// Mobile touch support
laterBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();

    const maxX = window.innerWidth - laterBtn.offsetWidth - 20;
    const maxY = window.innerHeight - laterBtn.offsetHeight - 20;

    laterBtn.style.position = "fixed";
    laterBtn.style.left = Math.max(10, Math.random() * maxX) + "px";
    laterBtn.style.top = Math.max(10, Math.random() * maxY) + "px";
});