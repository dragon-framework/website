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
];