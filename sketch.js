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

function showPassword() {
  let p = document.getElementById("pass");
  p.type = p.type === "password" ? "text" : "password";
};

let publish = document.getElementById("publishBtn");
publish.addEventListener("click", () => {
    if(document.getElementById("titlep").value != "" && document.getElementById("describe").value != "" && document.getElementById("file").value != ""){
    alert("Your post has been successfully published.");
    }
})