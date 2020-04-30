<?php return [
    'strategy' => "password",
    'token_expiration' => 900,
    'registration_allowed' => true,
    // 'authentication_on_registration' => true,
    // 'activation' => false,

    'redirect_on_login' => "admin:dashboard", // _referer
    // 'redirect_on_login' => "_referer", // _referer
    'redirect_on_logout' => "homepage", // _referer
];