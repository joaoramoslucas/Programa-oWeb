const button = document.querySelector("button")
const p = document.querySelector("p")

function clicou() {
    alert("Hello, world")
    p.textContent = "Obrigado por clicar"
}

button.onclick = clicou