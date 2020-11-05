<?php
ob_start();
?>
<div class="container">
        <div class="columns">
            <div class="column">
                <h4 class="is-size-3">NetCoach ? Qu'est-ce que c'est ?</h4>
                <p class="textAccueil is-size-5">NetCoach, c’est votre nouvel outil pour atteindre vos objectifs.
                    Suivez les entraînements, diètes et conseils de coachs professionnels ou passionnés afin d’aller
                    encore plus loin dans vos objectifs sportifs. NetCoach, c’est le partage, c’est la réussite pour tous les niveaux.
                </p>
            </div>

            <figure class="image ">
                <img class="imgAccueil is-rounded" src="img/accueil/accueil1.jpg" style="max-width: 300px; " alt="image de l'accueil">
            </figure>

        </div>
        <hr>
        <div class="columns">
            <figure class="image ">
                <img class="imgAccueil is-rounded" src="img/accueil/couple1.png" style="max-width: 300px;max-height: 300px;" alt="image de l'accueil">
            </figure>
            <div class="column">
                <h4 class="is-size-3">Le partage entre sportifs</h4>
                <p class="textAccueil is-size-5">NetCoach est fondé sur le partage d’expérience : bénéficiez de l’expérience
                    de sportifs dans chaque discipline, ou partagez la vôtre. Suivez vos coachs préférés pour être avertis de
                    leur nouveau contenu, et notez les séances suivies.

                </p>
            </div>
        </div>
        <hr>

        <div class="columns">
            <div class="column">
                <h4 class="is-size-3">Pourquoi nous rejoindre ?</h4>
                <p class="textAccueil is-size-5">Tout est entièrement gratuit !
                    Tout le contenu est gratuit d’accès, et ne peut que devenir plus conséquent, au fur et à mesure que vous ferez
                    de NetCoach une part de votre parcours sportif.
                    En tant que coach, vous pourrez également poster des vidéos depuis l’outil YouTube, afin de bénéficier de la
                    rémunération sur les vues. Augmentez votre notoriété et faites vous découvrir par des sportifs de tous niveaux !</p>
            </div>

            <figure class="image ">
                <img class="imgAccueil is-rounded" src="img/accueil/accueil3.jpg" style="max-width: 300px;" alt="image de l'accueil">
            </figure>

        </div>
        <hr>

    </div>
<?php
$contenu = ob_get_clean();
require_once("../src/vue/base.php");