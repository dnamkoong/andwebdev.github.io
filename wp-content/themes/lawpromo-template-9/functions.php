<?php
/*
 * Simple Child Theme generated by Ultimatum Framework
*/


// Remove p tags wordpress auto generates
remove_filter( 'the_content', 'wpautop' );
remove_filter( 'the_excerpt', 'wpautop' );


function custom_manage_styles() {

    wp_enqueue_style( 'main-style', get_stylesheet_directory_uri() . '/css/main.css', false, '1.0.0' );
    wp_enqueue_style( 'header-style', get_stylesheet_directory_uri() . '/css/header.css', false, '1.0.0' );
    wp_enqueue_style( 'home-style', get_stylesheet_directory_uri() . '/css/home.css', false, '1.0.0' );
    wp_enqueue_style( 'leftPage-style', get_stylesheet_directory_uri() . '/css/leftPage.css', false, '1.0.0' );
    wp_enqueue_style( 'rightPage-style', get_stylesheet_directory_uri() . '/css/rightPage.css', false, '1.0.0' );
    wp_enqueue_style( 'whatwedo-style', get_stylesheet_directory_uri() . '/css/whatwedo.css', false, '1.0.0' );
    wp_enqueue_style( 'ourwork-style', get_stylesheet_directory_uri() . '/css/ourwork.css', false, '1.0.0' );
    wp_enqueue_style( 'favsites-style', get_stylesheet_directory_uri() . '/css/favsites.css', false, '1.0.0' );
    wp_enqueue_style( 'contact-style', get_stylesheet_directory_uri() . '/css/contact.css', false, '1.0.0' );
    wp_enqueue_style( 'progressbar-style', get_stylesheet_directory_uri() . '/css/progressbar.css', false, '1.0.0' );

}
add_action( 'wp_enqueue_scripts', 'custom_manage_styles', 99 );


// Custom JS Added
function custom_manage_scripts() {

	wp_enqueue_script('scrollto js', '//cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.js');	


    wp_enqueue_script( 'custom js', get_stylesheet_directory_uri() . '/js/custom.js','','','',true);
}
add_action( 'wp_enqueue_scripts', 'custom_manage_scripts');






















































































































































