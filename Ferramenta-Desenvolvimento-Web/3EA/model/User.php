<?php
require_once("./config/config.php");


class User extends Connect
{


    function getProdutos()
    {

        $sql = "SELECT * FROM produtos";

        $result = $this->conn->query($sql);

        return $result->fetchAll(PDO::FETCH_ASSOC);


    }


    protected function search($item)
    {

        $sql = "SELECT * FROM produtos WHERE Nome LIKE :item OR Descricao LIKE :item OR Preco LIKE :item";

        $query = $this->conn->prepare($sql);

        $searchTerm = "%{$item}%";

        $query->bindParam(":item", $searchTerm, PDO::PARAM_STR);

        $query->execute();

        return $query->fetchAll(PDO::FETCH_ASSOC);

    }

    protected function detailsProduct($id)
    {


        $sql = "SELECT * FROM produtos WHERE id = :id";

        $query = $this->conn->prepare($sql);


        $query->bindParam(":id", $id, PDO::PARAM_STR);

        $query->execute();

        return $query->fetchAll(PDO::FETCH_ASSOC);

    }

    protected function updateProdutos($id, $nome, $desc, $preco)
    {

        $sql = "UPDATE produtos SET Nome = :nome, Descricao = :desc, Preco = :preco WHERE id = :id";

        $query = $this->conn->prepare($sql);

        $query->bindParam(":nome", $nome, PDO::PARAM_STR);
        $query->bindParam(":desc", $desc, PDO::PARAM_STR);
        $query->bindParam(":preco", $preco, PDO::PARAM_STR);
        $query->bindParam(":id", $id, PDO::PARAM_STR);

        return $query->execute();

    }

    protected function deleteFromId($id)
    {

        $sql = "DELETE FROM produtos WHERE id = :id";

        $query = $this->conn->prepare($sql);

        $query->bindParam(":id", $id, PDO::PARAM_STR);

        return $query->execute();


    }


}
