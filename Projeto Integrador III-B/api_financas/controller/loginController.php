<?php 
require_once('../models/Login.php');


class LoginController {
    
    function authUser($email, $senha) {


        return array($email, $senha);

    }
}