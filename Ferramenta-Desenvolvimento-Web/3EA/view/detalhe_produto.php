<?php

$update = false;

if ($URI == "/3EA/formUpdate") {
    $update = true;
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./public/css/detailsProduct.css">
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <title>Details Product</title>
</head>

<body>


    <main>
        <a href="../3EA/update" class="btnBack">
            <ion-icon name="arrow-back-outline"></ion-icon>
        </a>
        <h1>Detalhes do produto</h1>

        <form action="/3EA/update" method="post">
            <div>
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" value="<?= $produto[0]['Nome'] ?>" <?= !$update ? 'readonly' : '' ?>>
            </div>
            <div>
                <label for="preco">Preço</label>
                <input type="text" id="preco" name="preco" class="preco" value="<?= $produto[0]['Preco'] ?>" <?= !$update ? 'readonly' : '' ?>>
            </div>
            <div>
                <label for="descricao">Descrição</label>
                <textarea type="text" id="descricao" name="desc" value="15.90" <?= !$update ? 'readonly' : '' ?>
                    rows="5"><?= $produto[0]['Descricao'] ?></textarea>
                <input type="hidden" name="id" value="<?= $produto[0]['id'] ?>">
            </div>
            <? if ($update): ?>
                <input type="submit" value="Atualizar">
            <? endif ?>
        </form>



    </main>

</body>

</html>
<script src="./public/js/main.js" defer></script>