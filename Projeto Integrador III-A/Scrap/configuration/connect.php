<?php 

define("HOST", 'localhost');
define("USER", 'id22060510_johnny_cesmac');
define("PASS", '93186145De@');
define("DBNAME", 'id22060510_scrap_cesmac');

class Connect {

    protected $conn;

    function __construct(){

        $this->Connectar();

    }

    private function Connectar() {

        try {

            $this->conn = new PDO("mysql:host=" . HOST . ";dbname=". DBNAME, USER, PASS);

        } catch(PDOException $error) {
            echo "Erro de conexão -> " . $error;
        }

    }

}


new Connect();