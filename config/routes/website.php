<?php return [

    'homepage' => [
        'path'          => "/",
        'controller'    => "Default#index",
        'methods'       => ["GET"],
    ],

    'books' => [
        'path'          => "/books",
        'children'      => [
            'index'     => [
                'path'      => "",
                'controller'=> "Books#index",
                'methods'   => ["GET"],
            ],
            'create'    => [
                'path'      => "/create",
                'controller'=> "Books#create",
                'methods'   => ["GET"],
                'guards'    => [ROLE_ADMIN],
            ],
            'read'      => [
                'path'      => "/[i:id]",
                'controller'=> "Books#read",
                'methods'   => ["GET"],
            ],
            'update'    => [
                'path'      => "/[i:id]/edit",
                'controller'=> "Books#update",
                'methods'   => ["GET"],
                'guards'    => [ROLE_ADMIN],
            ],
            'delete'    => [
                'path'      => "/[i:id]/delete",
                'controller'=> "Books#delete",
                'methods'   => ["GET"],
                'guards'    => [ROLE_ADMIN],
            ],
        ],
    ],

    /**
     * User profile
     */

    'profile' => [
        'path'          => "/profile",
        'controller'    => "User#resume",
        'methods'       => ["GET"],
        'guards'        => [ROLE_USER],
    ],

];