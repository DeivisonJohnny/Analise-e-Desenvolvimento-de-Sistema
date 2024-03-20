const objFreque = new Frequencia()


// PEGA OS DADOS DOS PARAMETROS DA QUERY STRING 

function pegarDadosParams() {
    const queryString = window.location.search
    const params = new URLSearchParams(queryString)

    if (params.size > 0) {
        const nome = params.get('nome')
        let matricula = params.get('matricula')

        
        if(matricula <=0) {
            matricula = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
        }
        gerenciarDados(nome, matricula)
    }
}


// GERENCIAR O FLUXO DE CHAMADAS DAS FUNCÕES 
function gerenciarDados(nome, matricula) {
    if (localStorage.length > 0) {
        if (localStorage.frequencia.length > 0) {
            if (!isAdd(matricula, nome)) {
                console.log('adicionar dados da class frequencia')
                objFreque.addDados(nome, matricula)
                
            } 
        }
    } else {
        criarFrequencia(nome, matricula)
    }
}

// VERIFICA SE O DADOS JÁ EXISTEM NO " BANCO DE DADOS" 

function isAdd(matricula, nome) {
    const list = JSON.parse(localStorage.getItem('frequencia'))

    let isAdd = false

    for (let i = 0; i < list.length; i++) {
        if (list[i].matricula == matricula || list[i].nome == nome) {

            isAdd = true
            break
        }        
    }
    return isAdd
}




// CRIA TABELA FREQUENCIA DO BANCO DE DADO LOCAL
function criarFrequencia(nome, matricula) {

    console.log('criar frequencia')
    const valor = [
        { 'nome': nome, 'matricula': matricula },
    ]
    localStorage.setItem('frequencia', JSON.stringify(valor))
}


pegarDadosParams()