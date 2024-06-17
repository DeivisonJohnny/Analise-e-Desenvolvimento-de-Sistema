let url = 'http://localhost/despesas';  // URL do seu endpoint PHP

// Dados da despesa a serem enviados
let dadosDespesa = {
    titulo: 'Compra de material',
    valor: 150.50,
    categoria: 'Material de Escritório',
    idUser: 2
};

// Opções da requisição POST
let options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',  // Indica que o corpo da requisição é JSON
    },
    body: JSON.stringify(dadosDespesa)  // Converte os dadosDespesa para JSON
};

// Faz a requisição usando fetch
fetch(url, options)
    .then(response => response.json())  // Converte a resposta para JSON
    .then(data => {
        console.log('Resposta do servidor:', data);
        // Aqui você pode lidar com a resposta do servidor, se necessário
    })
    .catch(error => {
        console.error('Erro ao enviar requisição:', error);
        // Aqui você pode tratar erros de requisição
    });
