<?php

function getPage(){

    $lesPages['accueil']="actionAccueil";
    $lesPages['jeu']="actionJeu";
    $lesPages['sandbox']="actionSandbox";
    $lesPages['tutoriel']="actionTutoriel";

    if(isset($_GET['page'])){
        $page = $_GET['page'];

    } else{
        $page = 'accueil';
    }
    if(!isset($lesPages[$page])){
        $page = 'accueil';
    }

    $contenu = $lesPages[$page];

    return $contenu;
}