<?php

use Dragon\Component\Database\Query;

return [

    [
        'statement' => "main",
        'driver'    => "mysql",
        'host'      => "127.0.0.1",
        'port'      => 3306,
        'schema'    => "dragon_database",
        'user'      => "osw3",
        'pass'      => "myosw3sql",
        'charset'   => "utf8",
        // 'prefix'    => "dragon_",
        'fetch-mode'=> Query::FETCH_OBJ,
    ],

];