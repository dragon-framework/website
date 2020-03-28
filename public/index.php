<?php

if (!file_exists('../vendor/autoload.php')){
	echo '<p>Vous devez installer les dépendances du projet avec la commande <code>composer install</code>. En effet, ceux-ci ne sont pas versionnés.</p>';
	die();
}
require '../vendor/autoload.php';


// try {
    
    $app = new Dragon\Kernel;
    $app->run();

    // dump( $app->config()->getConfig('title') );
    // dump( $app->routing()->getBase() );
    // dump( $app->routing()->getRoutes() );

    
// } catch (Exception $e)
// {
//     echo $e->getMessage();
// }


