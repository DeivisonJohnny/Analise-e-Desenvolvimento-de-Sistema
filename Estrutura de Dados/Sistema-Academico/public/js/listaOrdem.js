
// VERIFICA A SE A LISTA FOI PREENCHIDA COM DADOS 
function verifyList() {
    const frequencia = new Frequencia()
    if (frequencia.getFrequencia() != null) {
        listDados(frequencia.getFrequencia())
    } else {
        alert('lista vazia')
    }
}


// CRIA OS ELEMENTO DAS LISTAS PARA UM CONTIDO NA LISTA PASSADA 
function listDados(listaDados) {
    const boxList = document.querySelector('#box-list')

    
    listaDados.forEach((dado, ind) => {
        
        
        
        // CRIA ELEMENTO 
        const line = document.createElement('div')
        const pOrdem = document.createElement('p')
        const pNome = document.createElement('p')
        const pMatricula = document.createElement('p')
        const boxBtn = document.createElement('p')
        const ionic = document.createElement('ion-icon')
        const button = document.createElement('button')
        const select = document.querySelector('select')
        const options = document.createElement('option')
        
        
        line.classList.add('line')
        pOrdem.classList.add('ordem')
        pNome.classList.add('nome')
        pMatricula.classList.add('matricula')
        button.classList.add('btnEdit')
        ionic.setAttribute('name', 'create-outline')


        boxList.appendChild(line)
        line.appendChild(pOrdem)
        line.appendChild(pNome)
        line.appendChild(pMatricula)
        line.appendChild(boxBtn)
        boxBtn.appendChild(button)
        button.appendChild(ionic)



        pOrdem.textContent = `${ind + 1} °`
        pNome.textContent = dado.nome
        pMatricula.textContent = dado.matricula



        options.classList.add('pText')

        select.appendChild(options)
        options.value = ind + 1
        options.textContent = `${ind + 1} °`



    });

    
    const btnEdit = document.querySelectorAll('.btnEdit')

    btnEdit.forEach((btn, ind) => {
        btn.addEventListener('click', function () {
            openForm(ind)
        })

    });

}

// ABRI O FORM 
function openForm(ind) {
    const boxForm = document.querySelector('.boxForm')
    console.log(boxForm.classList.length)
    if (ind != null && boxForm.classList[1] == 'closeForm') {
        insertDadosForm(ind)
        boxForm.classList.remove('closeForm')

    } else {
        if (boxForm.classList[1] == 'closeForm') {
            boxForm.classList.remove('closeForm')

        } else {
            closeForm()
        }
    }
}

// FECHA O FORM 
function closeForm() {
    const boxForm = document.querySelector('.boxForm')
    boxForm.classList.add('closeForm')
    console.log('closse')
}


// INSERE OS DADOS NO FORM DE ACORDO COM O INDICE PASSADO
function insertDadosForm(ind) {
    document.querySelectorAll('option').forEach(elem => {

        if (elem.selected) {
            elem.removeAttribute('selected')
        }
    })
    const nomes = document.querySelectorAll('.nome')
    const matriculas = document.querySelectorAll('.matricula')
    const ordens = document.querySelectorAll('.ordem')

    const pText = document.querySelectorAll('.pText')

    const inputs = document.querySelectorAll('.inputs')
    inputs[0].value = nomes[ind].textContent
    pText[0].textContent = nomes[ind].textContent
    inputs[1].value = matriculas[ind].textContent
    pText[1].textContent = matriculas[ind].textContent
    inputs[2].value = ordens[ind].textContent
    document.querySelector('#btnDelete').value = matriculas[ind].textContent
    document.querySelector('#btnUpdate').value = matriculas[ind].textContent


    document.querySelectorAll('option')[ind].setAttribute('selected', '')


}


verifyList()

document.querySelector('#btnClose').addEventListener('click', closeForm)


document.querySelector('#reloadList').addEventListener('click', () => {
    location.reload()
})


document.querySelector('#btnDelete').addEventListener('click', function () {
    deleteItem()
})
document.querySelector('#btnUpdate').addEventListener('click', function () {
    updateOrdem()
})