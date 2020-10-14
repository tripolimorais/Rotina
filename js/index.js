function enviouForm(evento) {
    evento.preventDefault();

    const article = document.createElement("article");
    article.classList.add("tarefas")

    criarElementoTarefa("p", article, evento.target.tipoTarefa.value)

    

    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.classList.add("checkbox")
    article.appendChild(checkbox)
    checkbox.addEventListener("change", completarTarefa)

    criarElementoTarefa("h1", article, evento.target.nome_tarefa.value)

    criarElementoTarefa("p", article, evento.target.data.value)

    const button = criarElementoTarefa("button", article,"apagar")
    button.addEventListener("click", apagarTarefa)
    listaTarefas.appendChild(article)

}
function apagarTarefa(evento){
    console.log("apagar tarefa",evento.target.parentElement.remove())
}
function completarTarefa(evento) {
    const pai = evento.target.parentElement
    pai.classList.toggle("fundoRoxo")
}

let listaTarefas

function prepararPagina() {
    const formulario = document.querySelector("#meu-formulario")
    formulario.addEventListener("submit", enviouForm)

    listaTarefas = document.querySelector("#Tarefas")
    console.log(listaTarefas)
}

document.body.onload = prepararPagina;

function tarefas() {
    const formulario = document.querySelector("#meu-formulario")
    formulario.addEventListener("submit", enviouForm)
}

function criarElementoTarefa(tag, elementoPai, valor) {
    const elementoHMTL = document.createElement(tag)
    elementoPai.appendChild(elementoHMTL)
    elementoHMTL.innerHTML = valor
    return elementoHMTL
}

addEventListener

/*
<article class="tarefas">
    <p>
        tipo da tarefa
    </p>
    <input class="checkbox" type="checkbox">
    <h1>
        Nome da tarefa
    </h1>
    <p>
        01/01/2020 12:00am
    </p>
</article>
*/

