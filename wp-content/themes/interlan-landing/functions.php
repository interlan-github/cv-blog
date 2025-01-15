<?php
/*
Подключение стилей для темы
*/

// регистрируем стили
add_action( 'wp_enqueue_scripts', 'register_plugin_styles' );

function register_plugin_styles() {
	wp_enqueue_style( 'main', get_stylesheet_uri() );
    wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/stylesheets/vendors/font-awesome.min.css', array('main'), null );
    wp_enqueue_style( 'animate', get_template_directory_uri() . '/stylesheets/vendors/animate.min.css', array('font-awesome'), null );
}

?>