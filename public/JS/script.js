//menubtn            menushow
const btn = document.getElementById("menubtn");
btn.addEventListener("click", () => {
    document.getElementById("menushow").classList.toggle("hidden");
})