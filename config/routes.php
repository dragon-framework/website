<?php return [

    'homepage' => [
        'path'          => "/",
        'controller'    => "Default#index",
        'methods'       => ["GET"],
        'targets'       => ["public", "admin", "api"],
    ],

    'doc' => [
        'path'          => "/doc",
        'children'      => [
            'index'     => [
                'path'          => "",
                'controller'    => "Doc#index",
                'methods'       => ["GET"],
                'targets'       => ["public"]
            ],
            'section'   => [
                'path'          => "/[:section]/[:md5]",
                'controller'    => "Doc#section",
                'methods'       => ["GET"],
                'targets'       => ["public"]
            ]
        ]
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
            ],
            'read'      => [
                'path'      => "/[:id]",
                'controller'=> "Books#read",
                'methods'   => ["GET"],
            ],
            'update'    => [
                'path'      => "/[:id]/edit",
                'controller'=> "Books#update",
                'methods'   => ["GET"],
            ],
            'delete'    => [
                'path'      => "/[:id]/delete",
                'controller'=> "Books#delete",
                'methods'   => ["GET"],
            ],
        ],
    ],


    'security' => [
        'path'          => "/",
        'children'      => [
            'login'     => [
                'path'          => "login",
                'controller'    => "Security#login",
                'methods'       => ["GET", "POST"],
                'targets'       => ["admin"]
            ]
        ]
    ]

];