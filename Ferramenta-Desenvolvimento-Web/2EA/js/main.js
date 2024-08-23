function formatMoney(value) {

    return new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: 'BRL'
    }).format(value) 
}

const valuePreco = document.querySelectorAll('.preco')

valuePreco.forEach((value, ind) => {
    
    value.textContent = formatMoney(parseFloat(value.textContent))
    
    if(valuePreco[ind].value){

        valuePreco[ind].value = formatMoney(parseFloat(valuePreco[ind].value))
    }
});

