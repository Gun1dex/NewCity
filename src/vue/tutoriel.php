<?php

ob_start();

?>
<div>
    <h1>Projet EcoCity ("Imaginer la ville de demain...")</h1>

    <p>
    Support : Jeu flash
    </p>

    <h1>Détail du projet</h1>

    <p>
    EcoCity est un jeu flash sur web à but éducatif / ludique, permettant la sensibilisation des utilisateurs au énergies renouvelables / réduction des énergies polluantes.
    </p>

    <h1>Le but</h1>

    <p>
    Modifier la ville de départ pour en faire une ville plus “verte” et atteindre les objectifs définis. L’objectif étant d'arriver à “l’équilibre” des énergies.
    </p>

    <h1>Comment jouer ?</h1>

    <p>
    L’utilisateur possède des objets à placer sur le plateau de jeu et doit, soit en placer des “propre” (tel que des arbres, forêts, panneaux solaires, etc…) 
    soit retirer des objets polluants (tel que des centrales nucléaires, des usines, etc …)
    </p>

    <h1>Technologies utilisées</h1>

    <p>
    - Java / PHP / CSS / HTML
    - WinSrv2019 / Hébergement Web
    </p>

    <h1>Services utilisés</h1>

    <p>
    - SSH / SFTP / DNS / SSL / WAMP
    </p>
</div>

<?php

$contenu = ob_get_clean();

require_once("../src/vue/base.php");