<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tutti Fruti</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <figure>
             <img src="img\logo.png" alt="">
        </figure>
    </header>
    <main>
        <section id="page-entrer">
            <button id="btn">Jouer</button>
            <figure id="tbl">
                <img src="img\tab-score.png" alt="">
                <ol>
                    <li>1 :</li>
                    <li>2 :</li>
                    <li>3 :</li>
                    <li>4 :</li>
                    <li>5 :</li>
                </ol>
            </figure>
        </section>
        <section id="page-jeu">
            <div>
                <h1 id="coups"></h1>
                <h1 id="times"></h1>
            </div>
            <article id="deck">
            </article>
        </section>
        <section id="page-fin">
        </section>
    </main>

<script src="script.js"></script>
</body>
</html>