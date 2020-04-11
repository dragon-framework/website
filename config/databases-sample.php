<?php

use Dragon\Component\Database\Query;

return [

    [
        'statement' => "main",
        'driver'    => "mysql",
        'host'      => "127.0.0.1",
        'port'      => 3306,
        'schema'    => "",
        'user'      => "",
        'pass'      => "",
        'charset'   => "utf8",
        'prefix'    => "",
        'fetch-mode'=> Query::FETCH_OBJ,
    ],

];