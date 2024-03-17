
function getListaPessoal(response) {
    const dados = response.res
    dados.forEach(dado => {
        const nuPresenca = gerarNuAle(dado.frequencia)
        createElement(dado.ranking, dado.nome, 8.5, nuPresenca)
    });


}

function createElement(matricula, nome, nota, frequencia) {

    const boxList = document.querySelector('#boxList')
    // Criar o elemento lista <li> 

    const li = document.createElement('li')
    li.classList.add('lineAluno')
    boxList.appendChild(li)


    // Adicionar paragrafos com conteudos API 

    const pMatricula = document.createElement('p')
    const pNome = document.createElement('p')
    const pNota = document.createElement('p')
    const boxPresenca = document.createElement('div')
    const pPresenca = document.createElement('p')
    const pDiasMes = document.createElement('p')
    const pFalta = document.createElement('p')

    const boxBtn = document.createElement('div')
    const btn = document.createElement('button')
    const ionic = document.createElement('ion-icon')

    boxBtn.classList.add('box-btn')

    pMatricula.classList.add('nMatricula')
    pNome.classList.add('nome')
    pNota.classList.add('notas')
    boxPresenca.classList.add('box-presenca')
    pPresenca.classList.add('presenca')
    pDiasMes.classList.add('diasMes')
    pFalta.classList.add('falta')

    btn.classList.add('btn')
    ionic.name = 'checkmark-sharp'



    li.appendChild(pMatricula)
    li.appendChild(pNome)
    li.appendChild(pNota)
    li.appendChild(boxPresenca)
    boxPresenca.appendChild(pPresenca)
    boxPresenca.appendChild(pDiasMes)
    li.appendChild(pFalta)
    li.appendChild(boxBtn)
    boxBtn.appendChild(btn)
    btn.appendChild(ionic)
    btn.setAttribute('data-matricula', matricula)

    pMatricula.textContent = matricula
    pNome.textContent = nome
    pNota.textContent = nota
    pPresenca.textContent = frequencia
    pDiasMes.textContent = ' / ' + getQtdDiasMes()
    pFalta.textContent = coletarFalta(frequencia)
    btn.value = nome

    addFuncClick(btn)

    

}

// Gera numero entre 0 e a quantidade de dias do mês atual (31)
function gerarNuAle(value) {

    const qtdDias = getQtdDiasMes()

    let valorFinal = Math.floor(((value - 0) * (qtdDias - 10) / (10000000 - 0)) + 10);


    if (valorFinal > qtdDias) {
        valorFinal -= 5
    }

    return valorFinal
}

function coletarFalta(frequencia) {
    return getQtdDiasMes() - frequencia
}

// Pega quantos dias tem o mês atual 
function getQtdDiasMes() {
    const dataAtual = new Date();

    const mesAtual = dataAtual.getMonth();

    const ultimoDiaDoMesAtual = new Date(dataAtual.getFullYear(), mesAtual + 1, 0);

    const numeroDeDiasNoMesAtual = ultimoDiaDoMesAtual.getDate();

    return numeroDeDiasNoMesAtual;

}


