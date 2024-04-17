<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

    <link rel="stylesheet" href="./views/public/css/index.css">
    <link rel="stylesheet" href="./views/public/css/menu.css">

    <script src="./views/public/js/menu.js" defer></script>


    <title>Formulario request</title>
</head>

<body>
    <header>
        <h1>Dev Johnny</h1>
        <button type="button" id="btnMenu">
            <ion-icon name="menu" id="iconMenu"></ion-icon>
        </button>
    </header>
    <menu class="menu">
        <ul>
            <li>
                <a href="./">Adicionar Scrap</a>
            </li>
            <li>
                <a href="./?a=listAll">Lista de Scraps</a>
            </li>
        </ul>
    </menu>

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