<?php

if (!file_exists('../vendor/autoload.php')){
	echo '<p>Vous devez installer les dépendances du projet avec la commande <code>composer install</code>. En effet, ceux-ci ne sont pas versionnés.</p>';
	die();
}
require '../vendor/autoload.php';

$app = new Dragon\Kernel;


// Config Methods
// --

// dump( $app->config() );
// dump( $app->config()->get('env') );
// dump( $app->config()->get('title') );
// dump( $app->config()->get('theme') );


// Routing Methods
// --

// dump( $app->routing()->getBase() );
// dump( $app->routing()->get('base') );
// dump( $app->routing()->getRoutes() );
// dump( $app->routing()->get('routes') );
// dump( $app->routing()->getRouter() );
// dump( $app->routing()->get('router') );

// dump( $app->database() );
// dump( $app->database()->dbh('main') );



$app->run();

// dump( $app->config()->getConfig() );
// dump( $app->config()->getConfig('title') );
// dump( $app->routing()->getBase() );
// dump( $app->routing()->getRouter() );
// dump( $app->routing()->getRouter()->generate('books:create') );
