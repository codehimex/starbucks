const dark = document.getElementById("Dark");
const body = document.getElementById("body");
dark.addEventListener("click", (pop) => {
    body.classList.toggle("dark")
    pop.preventDefault()
})