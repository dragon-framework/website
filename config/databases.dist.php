<?php

use Dragon\Component\Database\Query;
use Dragon\Component\Database\Statements;

return [

    [
        Statements::PARAM_STATEMENT     => "main",
        Statements::PARAM_DRIVER        => "mysql",
        Statements::PARAM_HOST          => "127.0.0.1",
        Statements::PARAM_PORT          => 3306,
        Statements::PARAM_DBNAME        => "",
        Statements::PARAM_UNIXSOCKET    => null,
        Statements::PARAM_USER          => "",
        Statements::PARAM_PASS          => "",
        Statements::PARAM_CHARSET       => "utf8",
        Statements::PARAM_PREFIX        => "",
        Statements::PARAM_FETCHMODE     => Query::FETCH_OBJ,
    ],
];