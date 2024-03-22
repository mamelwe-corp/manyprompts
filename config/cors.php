<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie', '*', 'login', 'logout', 'register', 'password/email', 'password/reset', 'password/confirm', 'password/verification-notification', 'email/verify', 'email/verification-notification', 'email/resend-verification-notification', 'email/verify/*', 'email/resend-verification-notification/*' , 'home', 'profile', 'profile/*', 'prompts', 'prompts/*', 'profile', 'profile/*'
],

    'allowed_methods' => ['*'],

    'allowed_origins' => ['*'],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 3600,

    'supports_credentials' => true,

];
