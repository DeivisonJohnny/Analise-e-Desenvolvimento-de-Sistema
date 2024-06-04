<?php
include_once('./configuration/connect.php');

class Teste extends Connection{
    function __construct()
    {
        parent::__construct();
    }
}


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
    echo "Função de listar DISPESAS";
}

function insertDispesas() {
    echo "Função de inserir DISPESAS";
}

function listRendas(){
    echo "Função de listar RENDA";
}

function insertRendas(){
    echo "Função de inserir RENDA";
}


controllerRotas($_SERVER);