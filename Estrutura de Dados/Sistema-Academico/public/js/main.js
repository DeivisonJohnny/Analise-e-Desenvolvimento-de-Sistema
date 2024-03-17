
// ATIVA LOAD DE CARREGAMENTO
function activeLoad(on) {
    if (on) {
        document.querySelector('.loadOpen').classList.remove('loadClose')
    } else {
        document.querySelector('.loadOpen').classList.add('loadClose')
    }
}

// ABRIR MENU 
function openForm() {
    const boxForm = document.querySelector('.boxForm')
    
        if (boxForm.classList[1] == 'closeForm') {
            boxForm.classList.remove('closeForm')

        } else {
            closeForm()
        }
    
}

// FECHA MENU 
function closeForm() {
    const boxForm = document.querySelector('.boxForm')
    boxForm.classList.add('closeForm')
    console.log('closse')
}


document.querySelector('.btnSubmit').addEventListener('click', function() {
    const value = document.querySelector('input').value
    direcAddDado(value)
})
document.querySelector('#btnClose').addEventListener('click', closeForm)
