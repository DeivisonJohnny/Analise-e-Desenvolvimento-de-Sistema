<?php
// require "./data/basedata.php";
$searchTerm = isset($_GET['search']) ? $_GET['search'] : '';

?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./public/css/produtos.css">
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <title>Pesquisa e Listagem</title>
</head>

<body>

    <header>
        <h1>Dev Johnny</h1>
    </header>

    <div>
        <form action="/3EA/search" method="post">
            <input type="text" name="search" id="inpSearch">
            <button type="submit">
                <ion-icon name="search-outline"></ion-icon>
            </button>
        </form>
    </div>

    <main>
        <table>
            <thead>
                <tr>
                    <th style="border-radius: 10px 0 0 0;">Nome</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Deletar</th>
                    <th style="border-radius: 0 10px 0 0;">Editar</th>
                </tr>
            </thead>
            <tbody>
                <?php if (empty($produtos)): ?>
                    <tr>
                        <td><a href="#">Nenhum</a></td>
                        <td><a href="#">produto</a></td>
                        <td><a href="#">encontrado</a></td>
                        <td><a href="../3EA/"><ion-icon name="trash-outline"></ion-icon></a></td>
                        <td><a href="../3EA/"> <ion-icon name="create-outline"></ion-icon> </a></td>
                    </tr>
                <?php else: ?>
                    <?php foreach ($produtos as $value): ?>
                        <tr>
                            <td><a href="../3EA/Details?id=<?=$value['id'] ?>"><?=$value['Nome'] ?></a></td>
                            <td><a href="../3EA/Details?id=<?=$value['id'] ?>"><?=$value['Descricao'] ?></a></td>
                            <td><a class="preco" href="../3EA/Details?id=<?=$value['id'] ?>"><?=$value['Preco'] ?></a></td>
                            <td><a href="../3EA/delete?id=<?=$value['id'] ?>"><ion-icon name="trash-outline"></ion-icon></a></td>
                            <td><a href="../3EA/formUpdate?id=<?=$value['id']?>"> <ion-icon name="create-outline"></ion-icon> </a></td>
                            </tr>
                    <?php endforeach ?>
                <?php endif ?>
            </tbody>
        </table>
    </main>

    <footer>
        <h2><a href="https://www.instagram.com/deivisonjohnny" target="_blank">@deivisonjohnny</a></h2>
    </footer>
</body>

</html>

<script src="./public/js/main.js" defer></script>