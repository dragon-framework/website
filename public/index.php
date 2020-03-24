<?php

// if (!file_exists('../vendor/autoload.php')){
// 	echo '<p>Vous devez installer les dépendances du projet avec la commande <code>composer install</code>. En effet, ceux-ci ne sont pas versionnés.</p>';
// 	die();
// }
require '../vendor/autoload.php';

$app = new Dragon\App();
$app->run();

// echo "Hello Dragon !";