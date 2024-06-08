<?php 

namespace Models;

use Configuration\Connection;
use PDO;
require_once('./configuration/connect.php');

class User extends Connection {

    private $table;

    function __construct()
    {
        parent::__construct();
        // $this->getData();
    }
    public function setTable($table) {
        $this->table = $table;
    }

    function getData() {

        $sql = "SELECT * FROM $this->table";
        $query = $this->conn->prepare($sql);
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);

    }




}

new User();