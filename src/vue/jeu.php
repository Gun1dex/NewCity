<?php

ob_start();

?>
<div class="columns">
    <div class="column">
        <h1>Page du jeu</h1>
        <button><a href="index.php?pade=accueil">Accueil</a></button>
    </div>
</div>
<div class="columns mobile">
    <div class="column is-2">
        <div id="affichage_menu">
        </div>
    </div>
    <div class="column is-8" style="text-align:center;">
        <div style="line-height:0px; background-color:#80be1f;" id="affichage_jeu">
        </div>
    </div>
    <div class="column is-2">
        objectif
    </div>

</div>

<script type="module" src="./js/jeu.js"></script>
<?php

$contenu = ob_get_clean();

require_once("../src/vue/base.php");
