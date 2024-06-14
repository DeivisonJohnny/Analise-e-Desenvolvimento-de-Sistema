<?php

// ADMINISTRAR ROTAS






$rotas = [

    '/' => 'notRoute',
    '/getDispesas' => 'listDispesas',
    '/putDispesas' => 'inserirDispesas',
    '/getRenda' => 'listRenda',
    '/putRenda' => 'inserirRenda',

];



function rotear($requisicao) {
    $endpoint = $_SERVER['REQUEST_URI'];


    global $rotas;


    if(array_key_exists($endpoint, $rotas)) {
        $funcao = $rotas[$endpoint];
        $funcao($requisicao);
        // echo "requisição". var_dump($requisicao);
        // echo "endpoint   --   ". $endpoint;
        // echo "rotas". var_dump($rotas);
    } else {
        http_response_code(404) ;
        echo "Endpoint não encontrado";
    }
}


// var_dump($_SERVER);


function notRoute($requisicao) {

    var_dump($requisicao);
    // echo "notRoute chamada função<br>";
}

rotear($_SERVER);



