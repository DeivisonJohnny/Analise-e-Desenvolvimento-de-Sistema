const url = "http://localhost/auth";

const id = false

export async function Acessar(email, senha) {

    let resposta = 'vazia';

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            senha: senha
        })

    }).then(response => {
        resposta = response.json()
        if (resposta.result) {
            id = resposta.idUser
        }
        console.log("id do usuario defenido " + id)
    })

    return resposta

}