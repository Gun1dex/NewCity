<?php

ob_start();

?>

<h1>Sandbox</h1>

<?php

$contenu = ob_get_clean();

require_once("../src/vue/base.php");