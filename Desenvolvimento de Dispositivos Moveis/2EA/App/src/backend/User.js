

export async function insertRenda(titulo, valor) {
    const url = "http://localhost/renda"

    const dataBody = {
        titulo: titulo,
        valor: valor,
        idUser: 2
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataBody)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Erro ao inserir renda:', error);
        throw error;
    }
}



export async function insertDespesas(titulo, valor, categoria) {
    let url = 'http://localhost/despesas';

    // Dados a serem enviados no corpo da requisição
    let requestBody = {
        titulo: titulo,
        valor: valor,
        categoria: categoria,
        idUser: 2
    };

    let result = false
    
    // Configuração da requisição
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Indica que estamos enviando JSON
        },
        body: JSON.stringify(requestBody) // Converte o objeto para JSON
    })
    .then(response => {
        result = response.json()
    })
    
    .catch(error => {
        console.error('Erro na requisição:', error);
    });

    return result
}
