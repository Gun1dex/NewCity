<?php

ob_start();

?>

<h1>Page du jeu</h1>
<button><a href="index.php?pade=accueil">Accueil</a></button>
<div style="line-height:0px" id="affichage_jeu"></div>
<div id="affichage_menu"></div>
<script type="module" src="./js/jeu.js"></script>
<?php

$contenu = ob_get_clean();

require_once("../src/vue/base.php");