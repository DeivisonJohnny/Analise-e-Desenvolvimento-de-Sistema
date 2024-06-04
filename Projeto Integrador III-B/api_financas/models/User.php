<?php 

require_once('../configuration/connect.php');

class User extends Connection {

    function __construct()
    {
        parent::__construct();
        $this->listDispesas();
    }

    function listDispesas() {

        $sql = "SELECT * FROM dispesas";

        $query = $this->conn->prepare($sql);

        $result = $query->execute();

        var_dump($query->fetch(PDO::FETCH_ASSOC));



    }

}

new User();