<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.0/css/bulma.min.css">
        <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
        <link rel="stylesheet" href="css/style.css">
        <!-- <link rel="stylesheet" href="css/debug.css"> -->
        <title>EcoCity </title>
    </head>

    <body class="main">

        <section class="accueil">
            <div class="columns is-mobile is-centered">
                <div class="column is-half" id="textCenter">
                    <img src="../web/img/accueil/banner_accueil2.png" class="imgBanner" alt="banniere">
                </div>
            </div>
        </section>

        <section class="section flexible">
            <?php echo $contenu ?>
        </section>
        
    </body>
</html>