function enviouForm(evento) {
    console.log("enviou")
}
const formulario = document.querySelector("#meu-formulario")


formulario.addEventListener("submit",enviouForm)