<?php

namespace Models;

use Configuration\Connection;
use PDO;

require_once ('./configuration/connect.php');

class User extends Connection
{

    private $table;

    function __construct()
    {
        parent::__construct();
        // $this->getData();
    }
    public function setTable($table)
    {
        $this->table = $table;
    }

    function getData()
    {

        $sql = "SELECT * FROM $this->table";
        $query = $this->conn->prepare($sql);
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    function insertRenda($titulo, $valor, $idUser)
    {
    
        if ($this->table !== 'renda') {
            return http_response_code(404);
        }
    
        $sql = "INSERT INTO $this->table (titulo, valor, idUser) values(:titulo, :valor, :idUser)";
    
        $query = $this->conn->prepare($sql);
    
        $query->bindParam(':titulo', $titulo);
        $query->bindParam(':valor', $valor);
        $query->bindParam(':idUser', $idUser);
    
        if (!$query->execute()) {
            return http_response_code(404);
        }
    
        return http_response_code(200);
    }
    
    function insertDispesa($titulo, $valor, $categoria, $idUser)
    {
        if ($this->table !== 'despesas') {
            return http_response_code(401);
        }
    
        $sql = "INSERT INTO $this->table (titulo, valor, categoria, idUser) values(:titulo, :valor, :categoria, :idUser)";
    
        $query = $this->conn->prepare($sql);
    
        $query->bindParam(':titulo', $titulo);
        $query->bindParam(':valor', $valor);
        $query->bindParam(':categoria', $categoria);
        $query->bindParam(':idUser', $idUser);
    
        if (!$query->execute()) {
            return http_response_code(404);
        }
    
        return http_response_code(200);
    }

    function getQtdData() {

        $nameReturn = 'Despesas';
        if($this->table !== 'despesas') {

            $nameReturn = 'Renda';
        }

        $sql = "SELECT COUNT(*) as qtd$nameReturn from $this->table";

        $query = $this->conn->prepare($sql);

        $query->execute();

        $response = $query->fetch(PDO::FETCH_ASSOC);

        return $response;


    }

}

new User();