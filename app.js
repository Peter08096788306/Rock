const sun = document.querySelector(".fa-sun");
const moon = document.querySelector(".fa-moon");
const changed = document.querySelector(".change");
const body = document.querySelector("body");

changed.addEventListener('click', ()=> {
    body.classList.toggle("darker")
    moon.classList.toggle("white")
    sun.classList.toggle("show")
})