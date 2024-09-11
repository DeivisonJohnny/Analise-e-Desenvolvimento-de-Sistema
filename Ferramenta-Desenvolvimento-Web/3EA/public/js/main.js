function formatMoney(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: 'BRL'
    }).format(value);
}

function unformatMoney(value) {
    return parseFloat(value.replace(/[^\d,.-]/g, '').replace(',', '.'));
}

const valuePreco = document.querySelectorAll('.preco');

valuePreco.forEach((value) => {
    if (value.textContent) {
        value.textContent = formatMoney(parseFloat(value.textContent));
    }

    if (value.value) {
        value.value = formatMoney(parseFloat(value.value));
    }
});

document.querySelector('form').addEventListener('submit', (event) => {
    valuePreco.forEach((value) => {
        if (value.value) {
            value.value = unformatMoney(value.value);
        }
    });
});
