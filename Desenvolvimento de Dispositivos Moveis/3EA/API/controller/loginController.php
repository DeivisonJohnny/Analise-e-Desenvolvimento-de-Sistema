<?php 
require_once('./models/Login.php');


class LoginController extends Login{

    function __construct()
    {
        parent::__construct();
    }
    
    function authUser($email, $senha) {
        return $this->validAuth($email, $senha);

    }
}