<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./css/index.css">

    <title>Formulario request</title>
</head>

<body>
    <header>
        <h1>Dev Johnny</h1>
    </header>

    <main>
        <form action="./?a=insert" method="post">
            <div>
                <label for="titulo">Titulo</label>
                <input type="text" name="titulo" id="titulo" placeholder="Ex: 5 Series " required>
            </div>
            <div>
                <label for="url">URL</label>
                <input type="text" name="url" id="url" placeholder="Ex: tackcode.com.br" required>
            </div>
            <div>
                <label for="path">PATH do elemento</label>
                <input type="text" name="path" id="path" placeholder="Ex: /div/h2" required>
            </div>
            <div>
                <input type="submit" value="Enviar elementos">
            </div>
        </form>
    </main>
</body>

</html>