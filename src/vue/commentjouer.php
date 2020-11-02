<?php
ob_start();
?>
<h1>Comment Jouer ?</h1>
<button><a href="index.php?pade=accueil">Accueil</a></button>
<?php
$contenu = ob_get_clean();
require_once("../src/vue/base.php");