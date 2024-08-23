<?php
require "./data/basedata.php";
$searchTerm = isset($_GET['search']) ? $_GET['search'] : '';

$produtosFiltrados = array_filter($produtos, function ($produto) use ($searchTerm) {
    return stripos($produto['nome'], $searchTerm) !== false ||
        stripos($produto['descricao'], $searchTerm) !== false;
});
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/produtos.css">
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <title>Pesquisa e Listagem</title>
</head>

<body>
    <header>
        <h1>Dev Johnny</h1>
    </header>

    <div>
        <form action="" method="get">
            <input type="text" name="search" id="inpSearch" value="<?= htmlspecialchars($searchTerm) ?>">
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
                    <th style="border-radius: 0 10px 0 0;">Preço</th>
                </tr>
            </thead>
            <tbody>
                <?php if (empty($produtosFiltrados)): ?>
                    <tr>
                        <td><a href="#">Nenhum</a></td>
                        <td><a href="#">produto</a></td>
                        <td><a href="#">encontrado</a></td>
                    </tr>
                <?php else: ?>
                    <?php foreach ($produtosFiltrados as $value): ?>
                        <tr>
                            <td><a href="./detalhe_produto.php?id=<?= $value['id'] ?>"><?= $value['nome'] ?></a></td>
                            <td><a href="./detalhe_produto.php?id=<?= $value['id'] ?>"><?= $value['descricao'] ?></a></td>
                            <td><a class="preco" href="./detalhe_produto.php?id=<?= $value['id'] ?>"><?= $value['preco'] ?></a></td>
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

<script src="./js/main.js" defer></script>