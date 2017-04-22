<?php
/*
Plugin Name: FlipClock Shortcode
Plugin URI: https://github.com/bradmkjr/flipclock-shortcode/
Description: Displays a simple FlipClock with a basic shortcode
Version: 1.7.8
Author: Bradford Knowlton
Author URI: http://bradknowlton.com
Text Domain: flipclock-shortcode
Domain Path: /languages
License:     MIT
License URI: https://github.com/objectivehtml/FlipClock/blob/master/license.txt
*/

/**
 * Enqueue scripts and styles
 */
function wpdocs_theme_name_scripts() {
    wp_enqueue_style( 'flipclock-shortcode', plugins_url( 'css/flipclock.css', __FILE__ ) );
    wp_enqueue_script( 'flipclock-shortcode', plugins_url( 'js/flipclock.min.js', __FILE__ ), array('jquery') );
}
add_action( 'wp_enqueue_scripts', 'wpdocs_theme_name_scripts' );