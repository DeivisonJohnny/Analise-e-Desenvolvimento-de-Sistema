
// DIRECIONA OS DADOS POR QUERY STRING DOS ALUNOS LISTADOS
function addFuncClick(elem) {
    elem.addEventListener('click', () => {

        const nome = elem.value
        const matricula = elem.getAttribute('data-matricula')

        const url = `./views/frequencia.html?nome=${nome}&matricula=${matricula}`

        window.location.href = url

    })
}

// DIRECIONA OS DADOS PARA ADICIONAR UM NOVO CADASTRO 
function direcAddDado(value) {
    const nome = value
    const url = `./views/frequencia.html?nome=${nome}&matricula=${0}`
    window.location.href = url
    alert('Ola')
}



