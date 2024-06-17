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
    function postDespesa($titulo, $valor, $categoria, $idUser){
        $this->setTable('despesas');

        $result = $this->insertDispesa($titulo, $valor, $categoria, $idUser);

        return $result;

    }

    function getQtd($table) {

        $this->setTable($table);

        $response = $this->getQtdData();

        return $response;

    }


}