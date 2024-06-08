<?php 

namespace Configuration;
use PDO;
use PDOException;
// require_once('.env');

// define("HOST", $_ENV['DB_HOST']);
// define("USER", $_ENV['DB_USER']);
// define("PASS", $_ENV['DB_PASS']);
// define("DB_NAME", $_ENV['DB_NAME']);

define("HOST", 'localhost');
define("USER", 'root');
define("PASS", '');
define("DB_NAME", 'api');

class Connection  {
    protected $conn;


    function __construct()
    {
        $this->connect();
    }


    function connect() {

        try{
            $this->conn = new PDO("mysql:host=".HOST.";dbname=".DB_NAME, USER, PASS );
        } catch(PDOException $e) {
            echo $e->getMessage();
            echo "Erro de conexão";
        }

    }

}

new Connection();

