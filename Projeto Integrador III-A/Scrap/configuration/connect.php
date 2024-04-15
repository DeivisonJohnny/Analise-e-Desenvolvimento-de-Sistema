<?php 

define("HOST", 'localhost');
define("USER", 'root');
define("PASS", '');
define("DBNAME", 'scrap_cesmac');

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