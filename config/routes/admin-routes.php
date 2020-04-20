<?php return [

    'dashboard' => [
        'path'          => "/",
        'controller'    => "Default#index",
        'methods'       => ["GET"],
        'guards'        => [ROLE_USER],
    ],

];