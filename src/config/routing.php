<?php

function getPage(){

    $lesPages['accueil']="actionAccueil";

    if(isset($_GET['page'])){
        $page = $_GET['page'];

    }else{
        $page = 'accueil';
    }
    if(!isset($lesPages[$page])){
        $page = 'accueil';
    }

    $contenu = $lesPages['accueil'];

    return $contenu;
}