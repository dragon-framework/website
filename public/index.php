<?php

if (!file_exists('../vendor/autoload.php')){
	echo '<p>Vous devez installer les dépendances du projet avec la commande <code>composer install</code>. En effet, ceux-ci ne sont pas versionnés.</p>';
	die();
}
require '../vendor/autoload.php';


// try {
    
    $app = new Dragon\Core;
    $app->run();

    print_r( $app->config() );
// } catch (Exception $e)
// {
//     echo $e->getMessage();
// }


