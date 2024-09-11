<?php

define("HOST", "localhost");
define("USER", "root");
define("PASS", "");
define("DBNAME", "3EA");


class Connect
{

    protected $conn;


    function __construct()
    {

        $this->connect();

    }


    function connect()
    {

        try {
            $this->conn = new PDO("mysql:host=" . HOST . ";dbname=" . DBNAME, USER, PASS);
        } catch (\PDOException $error) {
            echo $error->getMessage();
        }


    }


}

