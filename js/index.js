function enviouForm(evento) {
    evento.preventDefault();
    const article = document.createElement("article");
    article.classList.add("tarefas")
    const p = document.createElement("p")
    p.innerText = evento.target.tipoTarefa.value
    article.appendChild(p)
    const input = document.createElement("input")
    input.setAttribute("type", "checkbox")
    input.classList.add("checkbox")
    article.appendChild(input)
    const h1 = document.createElement("h1")
    h1.innerText = evento.target.nome_tarefa.value
    article.appendChild(h1)
    listaTarefas.appendChild(article)



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

