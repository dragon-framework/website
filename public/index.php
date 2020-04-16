<?php

if (!file_exists('../vendor/autoload.php')){
	echo '<p>Vous devez installer les dépendances du projet avec la commande <code>composer install</code>. En effet, ceux-ci ne sont pas versionnés.</p>';
	die();
}
require '../vendor/autoload.php';

$app = new Dragon\Kernel;
$app->run();


// Config Methods
// --

// dump( $app );
// dump( $app->config() );
// dump( $app->config()->get('title') );
// dump( $app->config()->get('environment') );
// dump( $app->config()->get('session') );

// dump( $app );
// dump( $app->security() );
// dump( $app->security()->get('authentication') );
// dump( $app->security()->get('strategy') );
// dump( $app->security()->get('property') );


// Routing Methods
// --

// dump( $app->routing()->getBase() );
// dump( $app->routing()->get('base') );
// dump( $app->routing()->get('routes') );
// dump( $app->routing()->get('router') );
// dump( $app->routing()->get('active') );
// dump( $app->routing()->get('router')->generate('books:create') );
// exit;


// Database Methods
// --

// dump( $app->database() );
// dump( $app->database()->dbh('main') );


// Mailer Methods
// --

// dump( $app->mailer()->get('transport') );
// dump( $app->mailer()->get('auth') );
// dump( $app->mailer()->get('tls') );
// dump( $app->mailer()->get('host') );
// dump( $app->mailer()->get('username') );
// dump( $app->mailer()->get('password') );
// dump( $app->mailer()->get('port') );



