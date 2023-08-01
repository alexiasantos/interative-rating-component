const buttons = document.querySelectorAll('.botao')
const form = document.querySelector('#form')
const card = document.querySelector('.card')
const card2 = document.querySelector('.card-two')
const userSelection = document.querySelector('#numero-selecionado')

buttons.forEach(button => {
    button.addEventListener("click", () => {
        tiraSelecaoBotao()
        button.classList.add('selected')
    })
})


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const opcaoSelecionada = document.querySelector('.selected');
    if (!opcaoSelecionada) return
    card.classList.remove('ativo')
    card2.classList.add('ativo')
    userSelection.textContent = `You selected ${opcaoSelecionada.textContent} out of 5`
})



function tiraSelecaoBotao() {
    buttons.forEach(botao => {
        if (botao.className == 'botao selected') {
            botao.classList.remove('selected')
        }

    })
}

