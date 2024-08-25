<?php
require_once './data/basedata.php';
require_once './Tree/searchBinary.php';

if (!isset($_GET['id']) || !isset($produtos[$_GET['id']])) {
    header('Location: produto.php');
}

if (
    empty($produtos[$_GET['id']]['nome']) ||
    empty($produtos[$_GET['id']]['descricao']) ||
    empty($produtos[$_GET['id']]['preco'])
) {
    header('Location: produto.php');
    exit();
}


$objSearch = new SearchBinary();
$value = $objSearch->Search($produtos, $_GET['id']);

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/detailsProduct.css">
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <title>Details Product</title>
</head>

<body>


    <main>
        <a href="./produto.php" class="btnBack">
            <ion-icon name="arrow-back-outline"></ion-icon>
        </a>
        <h1>Detalhes do produto</h1>

        <form>
            <div>
                <label for="nome">Nome</label>
                <input type="text" id="nome" value="<?= $value['nome'] ?>" readonly>
            </div>
            <div>
                <label for="preco">Preço</label>
                <input type="text" id="preco" class="preco" value="<?= $value['preco'] ?>" readonly>
            </div>
            <div>
                <label for="descricao">Descrição</label>
                <textarea type="text" id="descricao" value="15.90" readonly
                    rows="5"><?= $value['descricao'] ?></textarea>
            </div>
        </form>



    </main>

</body>

</html>
<script src="./js/main.js" defer></script>