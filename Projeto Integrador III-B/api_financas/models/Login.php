<?php

use Configuration\Connection;

require_once('../configuration/connect.php');


class Login extends Connection{

    protected $table;

    function __construct()
    {
        $this->table = 'usuarios';
        parent::__construct();
    }





}