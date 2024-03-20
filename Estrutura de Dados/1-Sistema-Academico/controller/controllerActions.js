
function deleteItem() {
    const matriDado = document.querySelector('#btnDelete').value;
    const ObjFrequencia = new Frequencia();
    const lista = ObjFrequencia.getFrequencia();
    const updatedList = lista.filter(obj => obj.matricula !== matriDado);
    console.log(updatedList)
    ObjFrequencia.frequencia = updatedList;
    ObjFrequencia.Relocate()
}

function updateOrdem() {
    const matriDado = document.querySelector('#btnUpdate').value;
    const select = document.querySelector('select').value - 1;
    const ObjFrequencia = new Frequencia();
    const lista = ObjFrequencia.getFrequencia();
    
    lista.forEach((elem, ind) => {
        if (elem.matricula === matriDado) {
            ObjFrequencia.Update(ind, select, elem);
            return;
        }
    });
}


