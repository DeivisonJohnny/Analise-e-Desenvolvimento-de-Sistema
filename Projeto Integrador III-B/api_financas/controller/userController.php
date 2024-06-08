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

}