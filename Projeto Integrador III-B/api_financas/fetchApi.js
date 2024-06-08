let url = 'http://localhost:5201/getDispesas'

fetch(url).then(response => response.json())

.then(data => {
    console.log(data)
})