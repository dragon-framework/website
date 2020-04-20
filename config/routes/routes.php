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
                'guards'    => ["ADMIN"],
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
                'guards'    => ["ADMIN"],
            ],
            'delete'    => [
                'path'      => "/[i:id]/delete",
                'controller'=> "Books#delete",
                'methods'   => ["GET"],
                'guards'    => ["ADMIN"],
            ],
        ],
    ],

];