
    
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

    <link rel="stylesheet" href="./views/public/css/listScrap.css">
    <link rel="stylesheet" href="./views/public/css/menu.css">

    <script src="./views/public/js/menu.js" defer></script>

    <title>listagem de scrap</title>
</head>

<body>
    <header>
        <h1>Dev Johnny</h1>
        <button type="button" id="btnMenu">
            <ion-icon name="menu" id="iconMenu"></ion-icon>
        </button>
    </header>
    <menu class="menu">
        <ul>
            <li>
                <a href="./">Adicionar Scrap</a>
            </li>
            <li>
                <a href="./?a=listAll">Lista de Scraps</a>
            </li>
        </ul>
    </menu>

    <main>
        <span>
            <h2>Listagem de scrap realizadas</h2>
        </span>
        <section>
            <ul>
                <?php if(!empty($data)):?>

                    <?php foreach($data as $value):?>
                <li>
                    <div>
                        <span>
                            <h3>Titulo</h3>
                            <p><?=$value['titulo']?></p>
                        </span>

                        <span>
                            <h3>URL</h3>
                            <p><?=$value['url']?></p>
                        </span>

                        <span>
                            <h3>Path</h3>
                            <p><?=$value['path']?></p>
                        </span>
                    </div>

                    <div>
                        <textarea cols="auto" rows="auto"><?=$value['data']?></textarea>
                    </div>
                </li>
                <?php endforeach?>

                <?php else:?>
                    <h1>Não fizeram nenhuma scrap até o momento</h1>
                <?php endif?>
            </ul>
        </section>
    </main>
</body>

</html>

