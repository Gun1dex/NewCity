<?php

ob_start();

?>
<div class="container">
    <div class="columns is-mobile is-centered">
        <div class="column is-5">
            <p class="textAccueil is-size-5">Pour lancer le jeu, cliquer sur le bouton "Jouer"</p>
        </div>

        <figure class="image ">
            <img class="imgAccueil" src="img/tutoriel/Jouer.gif" style="max-width: 300px; " alt="image de l'accueil">
        </figure>

    </div>
    <hr>
    <div class="columns is-mobile is-centered">
        <figure class="image">
            <img class="imgAccueil" src="img/tutoriel/Placer.gif" style="max-width: 300px;max-height: 300px;" alt="image de l'accueil">
        </figure>
        <div class="column is-5">
            <p class="textAccueil is-size-5">Pour jouer il suffit de choisir un objet dans la liste de gauche puis de le glisser sur le plateau de jeu comme sur l'image ci-contre.

            </p>
        </div>
    </div>
    <hr>

    <div class="columns is-mobile is-centered">
        <div class="column is-5">
            <p class="textAccueil is-size-5">Pour finir le jeu il faut remplir tout les objectifs pour d'abord passer au niveau 2 et enfin après avoir finis le niveau c'est la victoire.</p>
        </div>

        <figure class="image ">
            <img class="imgAccueil" src="img/tutoriel/Suivant.gif" style="max-width: 300px;" alt="image de l'accueil">
        </figure>

    </div>
    <hr>
    <div class="columns is-mobile is-centered">
        <figure class="image">
            <img class="imgAccueil" src="img/tutoriel/Sandbox.gif" style="max-width: 300px;max-height: 300px;" alt="image de l'accueil">
        </figure>
        <div class="column is-5">
            <p class="textAccueil is-size-5">Vous pouvez aussi a créer la ville que vous voulez dans notre mode Sandbox.

            </p>
        </div>
    </div>
    <hr>

</div>

<?php

$contenu = ob_get_clean();

require_once("../src/vue/base.php");
