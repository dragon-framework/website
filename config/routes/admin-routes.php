<?php return [

    'dashboard' => [
        'path'          => "/",
        'controller'    => "Dashboard#index",
        'methods'       => ["GET"],
        'guards'        => [ROLE_USER],
    ],

    'books' => [
        'path'          => "/books",
        'controller'    => "Books#index",
        'methods'       => ["GET"],
        'guards'        => [ROLE_USER],
    ],

    'calendar' => [
        'path'          => "/calendar",
        'controller'    => "Calendar#index",
        'methods'       => ["GET"],
        'guards'        => [ROLE_USER],
    ],

    'messages' => [
        'path'          => "/messages",
        'controller'    => "Messages#index",
        'methods'       => ["GET"],
        'guards'        => [ROLE_USER],
    ],

    'notifications' => [
        'path'          => "/notifications",
        'controller'    => "Notifications#index",
        'methods'       => ["GET"],
        'guards'        => [ROLE_USER],
    ],

];