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
            $res = $this->model->insertScrap($titulo, $url, $path);

            if($res){
                echo "<script>window.location.href = './?a=listAll';</script>";
            } else {
                echo "<script>alert('Falha na requisição -> URL negada')</script>";
                die();

            }
        }

    }

    function listAll(){
        $data = $this->model->listAll();
        require_once('./views/listScrap.php');

    }

    public function form() {
        require_once('./views/formulario.php');
    }

}


