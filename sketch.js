const modeBtn = document.getElementById("mode");
modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const likeBtns = document.querySelectorAll(".likeBtn");
likeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        let count = btn.querySelector(".count");
        count.innerText = Number(count.innerText) + 1;
    });
});