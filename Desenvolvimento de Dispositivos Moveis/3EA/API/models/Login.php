<?php

use Configuration\Connection;

require_once('./configuration/connect.php');


class Login extends Connection{

    protected $table;

    function __construct()
    {
        $this->table = 'usuarios';
        parent::__construct();
    }

    function validAuth($email, $senha) {

        $sql = "SELECT id FROM $this->table WHERE email = :email AND senha = :senha";

        $query = $this->conn->prepare($sql);
        $query->bindParam(':email', $email);
        $query->bindParam(':senha', $senha);

        $result = $query->execute();

        $id = $query->fetchAll(PDO::FETCH_ASSOC);

        if(!$result OR empty($id) OR !isset($id) OR count($id) !== 1) {
            return array(
                'result' => false,
                'response_code' => http_response_code(403),
                'message' => "Acesso negado, verifique suas credenciais",
            );
        }

        $retornRequest = array(
            "result" => $result, 
            "idUser" => $id[0]['id'],
            'response_code' => http_response_code(200),
        );
        return $retornRequest;


    }





}