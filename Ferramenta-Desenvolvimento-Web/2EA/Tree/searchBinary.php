<?php

require_once "./data/basedata.php";


class SearchBinary
{
    function Search($list, $item)
    {
        $baixo = 0;

        $alto = count($list) - 1;

        while ($baixo <= $alto) {
            $meio = floor(($baixo + $alto) / 2);

            $chute = $list[$meio];

            if ($chute['id'] == $item) {
                return $chute;
            }

            if ($chute['id'] > $item) {
                $alto = $meio - 1;
            } else {
                $baixo = $meio + 1;
            }
        }
        return null;
    }
}










