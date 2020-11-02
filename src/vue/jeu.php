<?php

ob_start();

?>

<h1>Page du jeu</h1>
<button><a href="index.php?pade=accueil">Accueil</a></button>
<?php

$contenu = ob_get_clean();

require_once("../src/vue/base.php");