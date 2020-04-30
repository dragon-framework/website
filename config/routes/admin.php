<?php return [

    'dashboard' => [
        'path'          => "/",
        'controller'    => "Dashboard#index",
        'methods'       => ["GET"],
        'guards'        => [ROLE_USER],
    ],

    'books' => [
        'path'          => "/books",
        'children'      => [
            'index'     => [
                'path'          => "",
                'controller'    => "Books#index",
                'methods'       => ["GET"],
                'guards'        => [ROLE_USER],
                'data'          => [
                    'class' => "books-index"
                ]
            ],
            'read'      => [
                'path'          => "/[:id]",
                'controller'    => "Books#read",
                'methods'       => ["GET"],
                'guards'        => [ROLE_USER],
                'data'          => [
                    'class' => "books-read"
                ]
            ]
        ]
    ],

    'calendar' => [
        'path'          => "/calendar",
        'controller'    => "Calendar#calendar",
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