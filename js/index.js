function enviouForm(evento) {
    evento.preventDefault();

    const article = document.createElement("article");
    article.classList.add("tarefas")

    criarElementoTarefa("p", article, evento.target.tipoTarefa.value )

    const input = document.createElement("input")
    input.setAttribute("type", "checkbox")
    input.classList.add("checkbox")
    article.appendChild(input)
  
    criarElementoTarefa("h1", article, evento.target.nome_tarefa.value )

    criarElementoTarefa("p", article, evento.target.data.value)


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

function criarElementoTarefa(tag, elementoPai, valor){
    const elementoHMTL = document.createElement(tag)
    elementoPai.appendChild(elementoHMTL)
    elementoHMTL.innerHTML = valor
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

