// let url = 'http://localhost:5201/postRenda'

// fetch(url).then(response => response.json())

// .then(data => {
//     console.log(data)
// })



const dispesas = {
    titulo: 'Vendas',
    valor: 134.4,
}

const uri = 'http://localhost:5201/postDispesas'

const renda = {
    titulo: "Passeio",
    valor: 300,
    categoria: "lazer",
    idUser: 18
};

fetch(uri, {
    method: 'POST',
    // headers: {
    //     'Content-Type': 'application/json'
    // },
    body: JSON.stringify(renda)
})
.then(response => response.json())
.then(data => {
    console.log(data)
})
