const url = 'http://localhost:5200/Analise-e-Desenvolvimento-de-Sistema/Projeto%20Integrador%20III-B/api/api.php?acao=pegarDesc'


let dataList;



    const response = await fetch(url)

    const data = await response.json()

    
    dataList = await data

console.log(dataList)


index()