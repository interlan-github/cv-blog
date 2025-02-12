<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitd0fe5f1e582baef77a8d8f89a1db7b1e
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInitd0fe5f1e582baef77a8d8f89a1db7b1e', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitd0fe5f1e582baef77a8d8f89a1db7b1e', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitd0fe5f1e582baef77a8d8f89a1db7b1e::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
