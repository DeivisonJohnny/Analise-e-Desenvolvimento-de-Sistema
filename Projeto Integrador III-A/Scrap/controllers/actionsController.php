<?php 

require_once('./models/Actions.php');

class actionsController {

    private $model;

    function __construct(){
        $this->model = new Actions();
    }

    function insert() {
        if($_SERVER['REQUEST_METHOD'] != 'POST'){
            header('Location: ./?error=method');
            die('Metodo utilizado é incorreto');
        }
        require_once('./views/formulario.php');

        $titulo = $_POST['titulo'];
        $url = $_POST['url'];
        $path = $_POST['path'];

        if(!empty($titulo) and !empty($url) and !empty($path)) {
            $res = $this->model->insert($titulo, $url, $path);

            require_once('./views/formulario.php');
            var_dump($res);
        }

    }

    public function form() {
        require_once('./views/formulario.php');
    }

}


