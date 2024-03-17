async function buscarDados() {
    fetch('https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking')
        .then(response => {

            console.log(response.status)

            if (response.status != 200) {
                activeLoad(true)
            } else {
                activeLoad(false)
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
            getListaPessoal(data[0])
        });
}



buscarDados()