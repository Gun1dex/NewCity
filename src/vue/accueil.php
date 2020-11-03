<?php

ob_start();

?>

<div class="columns is-mobile is-centered">
    <div class="column is-half" id="textCenter">
        <article class="mainMenu">
            <div class="content">
                <p class="title"> NewCity</p>
                <div class="content">
                    <div class="columns is-mobile is-centered">
                        <div class="column is-half" id="textCenter">
                            <button><a href="index.php?page=jeu">Jouer</a></button>
                        </div>
                    </div>
                    <div class="columns is-mobile is-centered">
                        <div class="column is-half" id="textCenter">
                            <button><a href="index.php?page=jeu"> Comment Jouer ?</a></button>

                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>

</div>


<?php
$contenu = ob_get_clean();

require_once("../src/vue/base.php");

