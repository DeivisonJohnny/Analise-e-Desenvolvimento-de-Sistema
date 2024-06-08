<?php

use Controller\userController;

header("Access-Control-Allow-Origin: *");

$rotas = [
    '/' => "notRoute",
    '/getDispesas' => "listDispesas",
    '/putDispesas' => "insertDispesas",
    '/getRenda' => "listRendas",
    '/putRenda' => "insertRendas",
];



function controllerRotas($request) {
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


function notRoute($request) {
}

function listDispesas($request) {
    require_once('./controller/userController.php');
    $userController = new userController();

    $result = $userController->listData('dispesas');

    
    $dataJson = array();

    foreach($result as $values) {
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
function listRendas(){
    require_once('./controller/userController.php');
    $userController = new userController();

    $result = $userController->listData('renda');

    $dataJson = array();

    foreach($result as $values) {
        array_push($dataJson, [
            "id" => $values['id'],
            "titulo" => $values['titulo'],
            "valor" => $values['valor'],
        ]);
    }

    $dataJson = json_encode($dataJson);

    die($dataJson);
}

function insertDispesas() {
    echo "Função de inserir DISPESAS";
}


function insertRendas(){
    echo "Função de inserir RENDA";
}


controllerRotas($_SERVER['REQUEST_URI']);