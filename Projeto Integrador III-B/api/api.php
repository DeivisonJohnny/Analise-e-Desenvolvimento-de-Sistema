<?php 
header("Access-Control-Allow-Origin: *");


require_once('connect.php');


$conn = new Connect();


$acao = @$_REQUEST['acao'];

$return = array();


if ($acao == 'pegarDesc') {
    $query = "SELECT id, desc_atendimento FROM avaliacoes";

    $consulta = $conn->connection->prepare($query);

    $consulta->execute();

    // var_dump($consulta->fetchAll());

    while($data = $consulta->fetch(PDO::FETCH_ASSOC)) {
        // echo $data['desc_atendimento'] . "<br>";

        $return[] = array(
            "id" => $data['id'],
            'desc' => $data['desc_atendimento'],
        );
    }




} else {
    # code...
}



die(json_encode($return));