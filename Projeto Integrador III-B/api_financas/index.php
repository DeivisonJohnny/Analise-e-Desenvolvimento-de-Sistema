<?php

use Controller\userController;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type");

$rotas = [
    '/' => "notRoute",
    '/getDispesas' => "listDispesas",
    '/postDispesas' => "insertDispesas",
    '/getRenda' => "listRendas",
    '/postRenda' => "insertRendas",
];



function controllerRotas($request)
{
    $endpoint = $_SERVER['REQUEST_URI'];


    global $rotas;

    if (array_key_exists($endpoint, $rotas)) {

        $funcao = $rotas[$endpoint];

        $funcao($request);

    } else {
        http_response_code(404);
        echo "pagina não encontrada";
    }


}


function notRoute($request)
{
    echo 'notRounte';
}

function listDispesas($request)
{
    require_once ('./controller/userController.php');
    $userController = new userController();

    $result = $userController->listData('dispesas');


    $dataJson = array();

    foreach ($result as $values) {
        array_push($dataJson, [
            "id" => $values['id'],
            "titulo" => $values['titulo'],
            "valor" => $values['valor'],
            "categoria" => $values['categoria']
        ]);
    }

    $dataJson = json_encode($dataJson);

    die($dataJson);

}
function listRendas()
{
    require_once ('./controller/userController.php');
    $userController = new userController();

    $result = $userController->listData('renda');

    $dataJson = array();

    foreach ($result as $values) {
        array_push($dataJson, [
            "id" => $values['id'],
            "titulo" => $values['titulo'],
            "valor" => $values['valor'],
        ]);
    }

    $dataJson = json_encode($dataJson);

    die($dataJson);
}

function insertDispesas()
{
    require_once ('./controller/userController.php');

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        die(json_encode(
            array(
                "message" => "Metodo incorreto, utilize POST",
                "response_code" => http_response_code(405),
            )
        ));
    }

    $dadosJson = file_get_contents('php://input');
    $data = json_decode($dadosJson, true);

    $titulo = $data['titulo'];
    $valor = $data['valor'];
    $categoria = $data['categoria'];
    $id = $data['idUser'];

    $userController = new userController();

    $code_response = $userController->postDispesa($titulo, $valor, $categoria, $id);


    die(json_encode(array("response_code" => $code_response)));
}

function insertRendas()
{
    require_once ('./controller/userController.php');

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        die(json_encode(
            array(
                "message" => "Metodo incorreto, utilize POST",
                "response_code" => http_response_code(405),
            )
        ));
    }

    $dadosJson = file_get_contents('php://input');
    $data = json_decode($dadosJson, true);

    $titulo = $data['titulo'];
    $valor = $data['valor'];
    $id = $data['idUser'];

    $userController = new userController();

    $code_response = $userController->postRenda($titulo, $valor, $id);


    die(json_encode(array("response_code" => $code_response)));
}

controllerRotas($_SERVER['REQUEST_URI']);

