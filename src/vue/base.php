<!DOCTYPE html>
<html>
<?php
header('Location : localhost/NewCity/web/index.php');
?>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.0/css/bulma.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <!-- <link rel="stylesheet" href="css/debug.css"> -->
    <title>EcoCity </title>

</head>

<body class="main">

    <section class="accueil">
        <div class="columns is-mobile is-centered">
            <div class="column is-half" id="textCenter">
                <img src="./img/accueil/banner_accueil2.png" class="imgBanner" alt="banniere">
            </div>
        </div>
        <?php

        if (isset($_GET['page'])){
            if($_GET['page']== 'accueil'){

            }
            else{
                ?>
                <div class="columns is-mobile is-centered">
                <div class="column is-half" id="textCenter">
                    <a href="index.php?page=accueil" class="noneColor"><button class="btn"><br>Accueil</button></a>
                    <!-- <img id="loading" src="../web/img/jeu/retourAccueil.png"><div id="loading"></div> -->
                </div>
            </div>
                <?php
            }
        }
        else{

        }
        ?>
        

    </section>

    <section class="section flexible">
        <?php echo $contenu ?>
    </section>

</body>

</html>