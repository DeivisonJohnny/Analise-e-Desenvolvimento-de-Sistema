<?php 
require_once('./controllers/actionsController.php');

$action = !empty($_GET['a']) ? $_GET['a'] : 'form';
$controller = new actionsController();


$controller->{$action}();