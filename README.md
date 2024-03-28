<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Participantes

-   Andersson Hadad 30065693
-   Wilder Varas 30581660
-   Steven Paucar 30612529
-   José Pacheco 30581667
-   Daniel Maury 30644530

## Requerimentos Basicos

1. Instalar XAMPP (Apache y MySQL)
2. Instalar Composer
3. Tener PHP 8.2
4. Tener NodeJS 20

## Instalacion

> Mantemos abierto XAMPP con el servidor apache y mysql contectados !

Despues de clonar el repositorio, en la carpeta htdocs `xampp/htdocs/manyprompts`, instalamos todas las dependencias php con composer.

```
composer install
```

Luego generamos 'AplicationKey'.

```
php artisan key:generate
```

A continuacion copiamos los valores de `.env.example` en el archivo `.env`

Seguido de esto migramos el `schema` de la base de datos a nuestra base de datos

```
php artisan migrate
```

> En caso de que no se cree la base de datos, crear una base datos mysql con nombre manyprompts y seguido ejecutar `php artisan migrate` para que se creen las tablas automaticamente.

Instalamos las dependencias de nodejs con:

```
npm install
```

Ahora ejecutamos el servidor php con:

```
php artisan serve
```

y por ultimo ejecutamos el servidor del frontend con:

```
npm run dev
```

Accede a la aplicacion en `http://localhost:8000`

## Aclaraciones

Para que ciertas funciones que involucren el envio de correos electronicos funcionen, se debe configurar el archivo `.env` con las credenciales de un correo electronico valido. Para pruebas se puede usar un servicio llamado MailTrap.

Los modelos se encuentran en la carpeta `app/Models`, los controladores en `app/Http/Controllers`, las vistas en `resources/views`. Como estamos utilizando ReactJS para el frontend, las vistas son generadas con javascript y se encuentran en `resources/js`.

Las rutas se encuentran ubicadas y definidas en `routes/web.php`. Las migraciones de la base de datos se encuentran en `database/migrations`.

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

-   [Simple, fast routing engine](https://laravel.com/docs/routing).
-   [Powerful dependency injection container](https://laravel.com/docs/container).
-   Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
-   Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
-   Database agnostic [schema migrations](https://laravel.com/docs/migrations).
-   [Robust background job processing](https://laravel.com/docs/queues).
-   [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.
