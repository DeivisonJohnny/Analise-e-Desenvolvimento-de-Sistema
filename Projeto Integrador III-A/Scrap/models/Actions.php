<?php
require_once ('./configuration/connect.php');

class Actions extends Connect
{


    // Inserção da scrap 
    function insertScrap($titulo, $url, $path){
        
        
        if (empty($titulo) or empty($url) or empty($path)) {
            header('Location: ./?error=empty');
            die('Dados coletados estão vázios');
        }

        $data = $this->getDados($url, $path);
        if(empty($data)) {
            return false;
        }

        $sql = "INSERT INTO scrap_collection (titulo, url, path) VALUES (:titulo, :url, :path)";

        try {

            $query = $this->conn->prepare($sql);

            $query->bindParam(':titulo', $titulo);
            $query->bindParam(':url', $url);
            $query->bindParam(':path', $path);

            $result = $query->execute();

            $idInsert = $this->conn->lastInsertId();

            if (!$result) {
                header('Location: ./?error=falidQuery');
                die();
            }
            return $this->insertData($idInsert, $data);

        } catch (PDOException $error) {
            $error = $error->getCode();
            header("Location: ./?error=inesperado&code=$error->");
            
        }

        return false;
    }

    private function insertData($idInsert,$data)
    {
        if (!$data) {
            return false;
        }

        $sql = "INSERT INTO data_collection (id, data) VALUES (:id, :data)";

        try {

            $query = $this->conn->prepare($sql);
    
            $query->bindParam(':id', $idInsert);
    
            foreach ($data as $value) {
                $query->bindParam(':data', $value);
                $result = $query->execute();
    
                if (!$result) {
                    return false;
                }
            }

        } catch(PDOException $error) {
            header('Location: ./?error=insertData');
            die('Error de inserção dos dados, inesperado');
        }

        return true;

    }

    function getDados($url, $path)
    {

        $html = @file_get_contents($url);

        if (!$html) {
            return false;
        }

        $dom = new DOMDocument();
        libxml_use_internal_errors(true);
        $dom->loadHTML($html);
        libxml_clear_errors();

        $xpath = new DOMXPath($dom);

        $elements = $xpath->query($path);

        if (empty($elements) or !isset($elements)) {
            return false;
        }

        $listElements = array();

        for ($i = 0; $i < $elements->count(); $i++) {
            $listElements[] = $elements->item($i)->nodeValue;
        }

        return $listElements;

    }


    //Listagem das scrap


    function listAll() {

        $sql = "SELECT scrap_collection.titulo, scrap_collection.url, scrap_collection.path, GROUP_CONCAT(data_collection.data) AS data
        FROM scrap_collection
        LEFT JOIN data_collection ON data_collection.id = scrap_collection.id
        GROUP BY scrap_collection.id";



        $query = $this->conn->prepare($sql);
        $query->execute();
        $result = $query->fetchAll();

        return $result;

    }



}

