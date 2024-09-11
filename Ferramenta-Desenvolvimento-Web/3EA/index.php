<?php
require_once './controller/userController.php';

$controller = new userController();
$URI = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);


switch ($URI) {

    case "/3EA/":
        $produtos = $controller->listProdutos();


        require_once './view/produto.php';
        break;

    case '/3EA/search':
        $produtos = $controller->searchProdutos($_POST['search']);
        require_once './view/produto.php';
        break;

    case '/3EA/Details':

        $id = $_GET['id'];

        $produto = $controller->details($id);

        require_once './view/detalhe_produto.php';
        break;


    case '/3EA/formUpdate':
        $id = $_GET['id'];
        $produto = $controller->details($id);

        require_once './view/detalhe_produto.php';
        break;



    case '/3EA/update':

        $result = $controller->update($_POST['id'], $_POST['nome'], $_POST['desc'], $_POST['preco']);
        if ($result) {
            header("location: ../3EA/");
        }
        break;


    case '/3EA/delete':



        $result = $controller->delete($_GET['id']);

        if ($result) {
            header("location: ../3EA/");
        }

        break;


    default:
        header("location: ../3EA/");
        break;

}
