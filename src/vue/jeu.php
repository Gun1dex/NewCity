<?php

ob_start();

?>

<script type="module" src="./js/jeu.js"></script>
<div class="columns is-mobile is-centered">
    <div class="column is-half" id="textCenter">
        <h1>Page du jeu</h1>
        <a href="index.php?page=accueil" class="noneColor"><img id="loading" src="../web/img/jeu/retourAccueil.png"><br>Accueil</a>
        <!-- <img id="loading" src="../web/img/jeu/retourAccueil.png"><div id="loading"></div> -->
    </div>
</div>

<div class="columns is-mobile is-centered">
    <div class="column is-2" id="scrollMenu">
        <div id="affichage_menu">
        </div>
    </div>
    <div class="column is-8">
        <div style="line-height:0px; background-color:#80be1f;" id="affichage_jeu">

        </div>
    </div>
    <div class="column is-2">
        <div id="affichage_objectif">
        </div>
    </div>

</div>

<!--  -->



<?php

$contenu = ob_get_clean();

require_once("../src/vue/base.php");
