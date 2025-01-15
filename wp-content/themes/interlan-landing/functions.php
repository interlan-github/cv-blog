<?php
/*
Подключение стилей для темы
*/

// регистрируем стили и скриппты
add_action( 'wp_enqueue_scripts', 'register_plugin_styles' );

function register_plugin_styles() {
    $version = '1.0';
    // Стили
	wp_enqueue_style( 'main', get_stylesheet_uri() );
    wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/stylesheets/vendors/font-awesome.min.css', array('main'), $version );
    wp_enqueue_style( 'animate', get_template_directory_uri() . '/stylesheets/vendors/animate.min.css', array('font-awesome'), $version );
    wp_enqueue_style( 'magnific-popup', get_template_directory_uri() . '/stylesheets/vendors/magnific-popup.css', array('animate'), $version );
    wp_enqueue_style( 'swiper', get_template_directory_uri() . '/stylesheets/vendors/swiper.min.css', array('magnific-popup'), $version );
    wp_enqueue_style( 'materialize', get_template_directory_uri() . '/stylesheets/vendors/materialize.css', array('swiper'), $version );
    wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/stylesheets/vendors/bootstrap.min.css', array('materialize'), $version );
    wp_enqueue_style( 'custom', get_template_directory_uri() . '/stylesheets/style.css', array('bootstrap'), $version );

    // js-скрипты
    wp_enqueue_script( 'bootstrap-js', get_template_directory_uri() .'/javascript/vendors/bootstrap.min.js', array(), $version, true );
    wp_enqueue_script( 'materialize-js', get_template_directory_uri() .'/javascript/vendors/materialize.min.js', array('bootstrap-js'), $version, true );
    wp_enqueue_script( 'markerwithlabel-js', get_template_directory_uri() .'/javascript/vendors/markerwithlabel.min.js', array('materialize-js'), $version, true );
    wp_enqueue_script( 'retina-js', get_template_directory_uri() .'/javascript/vendors/retina.min.js', array('markerwithlabel-js'), $version, true );
    wp_enqueue_script( 'scrollreveal-js', get_template_directory_uri() .'/javascript/vendors/scrollreveal.min.js', array('retina-js'), $version, true );
    wp_enqueue_script( 'swiper-js', get_template_directory_uri() .'/javascript/vendors/swiper.jquery.min.js', array('scrollreveal-js'), $version, true );
    wp_enqueue_script( 'magnific-popup-js', get_template_directory_uri() .'/javascript/vendors/jquery.magnific-popup.min.js', array('swiper-js'), $version, true );
    // custom-js
    wp_enqueue_script( 'custom-js', get_template_directory_uri() .'/javascript/custom.js', array('magnific-popup-js'), $version, true );

}

?>