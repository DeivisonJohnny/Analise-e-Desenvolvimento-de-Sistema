<?php
require_once './data/basedata.php';
require_once './Tree/searchBinary.php';

if (!isset($_GET['id']) or empty($produtos[$_GET['id']]['nome']) or empty($produtos[$_GET['id']]['descricao']) or empty($produtos[$_GET['id']]['preco'])) {
    header('./index.php');
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
    <title>Details Product</title>
</head>

<body>


    <main>

        <h1>Detalhes do produto</h1>

        <form>
            <div>
                <label for="nome">Nome</label>
                <input type="text" id="nome" value="<?= $value['nome'] ?>" readonly>
            </div>
            <div>
                <label for="preco">Preço</label>
                <input type="text" id="preco" value="<?= $value['preco'] ?>" readonly>
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