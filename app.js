window.addEventListener("DOMContentLoaded", () => {
});

const toggleBtn = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    navbar.classList.toggle("active");
})