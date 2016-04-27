<?php

use Doctrine\Common\Annotations\AnnotationRegistry;
use Composer\Autoload\ClassLoader;

/**
 * @var ClassLoader $loader
 */
$loader = require __DIR__ . '/../vendor/autoload.php';

AnnotationRegistry::registerLoader([$loader, 'loadClass']);

$dotenv = new \Dotenv\Dotenv(__DIR__ . '/../');
$dotenv->load();

date_default_timezone_set($_SERVER['SYMFONY_TIMEZONE']);

return $loader;
