<?php
require_once "./model/User.php";


class userController extends User
{


    function listProdutos()
    {

        return $this->getProdutos();

    }


    function searchProdutos($item)
    {

        if (empty($item)) {
            header("location: ../3EA/");
        }

        return $this->search($item);

    }


    function details($item)
    {

        if (empty($item)) {
            header("location: ../3EA/");
        }

        return $this->detailsProduct($item);

    }

    function update($id, $nome, $desc, $preco)
    {

        if (empty($id) or empty($nome) or empty($desc) or empty($preco)) {
            header("location: ../3EA/");
        }

        return $this->updateProdutos($id, $nome, $desc, $preco);

    }



    function delete($id)
    {

        if (empty($id)) {

            header("location: ../3EA/");

        }

        return $this->deleteFromId($id);

    }


}