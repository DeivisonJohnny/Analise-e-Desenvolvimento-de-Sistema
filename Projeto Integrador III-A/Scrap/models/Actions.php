<?php 
require_once('./configuration/connect.php');

class Actions extends Connect{

    function insert($titulo, $url, $path) {
        return $this->getDados($url, $path);
    }

    function getDados( $url, $path) {

        $html = file_get_contents($url);

        if(!$html) {
            die('Falha na requisição');
        }

        $dom = new DOMDocument();
        libxml_use_internal_errors(true);
        $dom->loadHTML($html);
        libxml_clear_errors();

        $xpath = new DOMXPath($dom);

        $elements = $xpath->query($path);

        $listElements = array();
        
        if ($elements) {
            foreach ($elements as $element) {
                $item = $element->nodeValue;
                $listElements[] = $item;
            }
            return $listElements;
        }
        
        return false;



    }

}

