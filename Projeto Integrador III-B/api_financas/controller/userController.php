<?php 

namespace Controller;

use Models\User;
require_once('./models/User.php');

class userController extends User {


    function listData($table) {
        $this->setTable($table);

        $result = $this->getData();

        return $result;

    }


    function postRenda($titulo, $valor, $idUser){
        $this->setTable('renda');

        $result = $this->insertRenda($titulo, $valor, $idUser);

        return $result;

    }
    function postDispesa($titulo, $valor, $categoria, $idUser){
        $this->setTable('dispesas');

        $result = $this->insertDispesa($titulo, $valor, $categoria, $idUser);

        return $result;

    }
}