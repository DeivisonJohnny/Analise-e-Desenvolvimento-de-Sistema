<?php

use Controller\UserController;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$requestMethod = $_SERVER['REQUEST_METHOD'];

// Rotas
$routes = [
    'GET' => [
        '/despesas' => 'listarDespesas',
        '/despesas/qtd' => 'qtdDespesas',
        '/renda' => 'listarRendas',
        '/renda/qtd' => 'qtdRenda'
    ],
    'POST' => [
        '/despesas' => 'inserirDespesa',
        '/renda' => 'inserirRenda',
        '/auth' => 'login'
    ]
];

// Função para controlar as rotas
function handleRoutes($routes, $requestMethod, $requestBody)
{
    $endpoint = $_SERVER['REQUEST_URI'];

    global $routes;

    if (array_key_exists($endpoint, $routes[$requestMethod])) {

        $functionName = $routes[$requestMethod][$endpoint];

        if ($requestMethod === 'GET') {
            $functionName();
        } elseif ($requestMethod === 'POST') {
            $functionName($requestBody);
        }

    } else {
        http_response_code(404);
        
        echo "Verifique a rota utilizada";
    }
}

// Funções de rota

function listarDespesas()
{
    require_once('./controller/userController.php');
    $userController = new UserController();
    $result = $userController->listData('despesas');
    die(json_encode($result));
}

function listarRendas()
{
    require_once('./controller/userController.php');
    $userController = new UserController();
    $result = $userController->listData('renda');
    die(json_encode($result));
}

function inserirDespesa($requestBody)
{
    require_once('./controller/userController.php');
    $data = json_decode($requestBody, true);
    $titulo = $data['titulo'];
    $valor = $data['valor'];
    $categoria = $data['categoria'];
    $id = $data['idUser'];
    $userController = new userController();
    $codeResponse = $userController->postDespesa($titulo, $valor, $categoria, $id);
    die(json_encode(["response_code" => $codeResponse]));
}

function inserirRenda($requestBody)
{
    require_once('./controller/userController.php');
    $data = json_decode($requestBody, true);
    $titulo = $data['titulo'];
    $valor = $data['valor'];
    $id = $data['idUser'];
    $userController = new UserController();
    $codeResponse = $userController->postRenda($titulo, $valor, $id);
    die(json_encode(["response_code" => $codeResponse]));
}

function login()
{
    require_once('./controller/loginController.php');
    $bodyRequest = file_get_contents('php://input');
    $dataJson = json_decode($bodyRequest, true);
    $email = $dataJson['email'];
    $senha = $dataJson['senha'];
    $loginController = new LoginController();
    $result = $loginController->authUser($email, $senha);
    die(json_encode($result));
}


// PEGAR QUANTIDADES 

function qtdDespesas() {

    require_once('./controller/userController.php');
    $userController = new UserController();

    $response = $userController->getQtd('despesas');

    die(json_encode($response));

}

function qtdRenda() {

    require_once('./controller/userController.php');
    $userController = new UserController();

    $response = $userController->getQtd('renda');

    die(json_encode($response));
}

// Manipular as rotas
handleRoutes($routes, $requestMethod, file_get_contents('php://input'));
