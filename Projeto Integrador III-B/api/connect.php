<?php 

    define("HOST", 'localhost');
    define("USER", 'root');
    define("PASS", '');
    define("DBNAME", 'jirituba');



class Connect {
    public $connection;


    function __construct()
    {
        $this->connDatabase();
    }


    function connDatabase() {

        try{

            $this->connection = new PDO('mysql:host='.HOST.';dbname='.DBNAME, USER, PASS);

            // echo "conexção feita com sucesso<br><br><br>";

            
            $result = $this->connection->query("SELECT * FROM avaliacoes");

            // // var_dump($result->fetchAll());

            // foreach($result->fetchAll() as $sal) {
            //     echo $sal['desc_atendimento']. "<br>";
            // }

        }catch(PDOException $e) {
            echo $e;
        }

    }

}


