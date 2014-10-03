<?php if (!defined('ABSPATH')) exit;

/**
 * Plugin Name: WP Media Sandbox
 * Plugin URI: http://example.com
 * Description: A sandbox for learning wp.media component
 * Version: 1.0.0
 * Author: Vladimir Barbarosh
 * Author URI: mailto:vladimir.barbarosh@gmail.com
 * License: GPLv2 or later
 */

// Make sure we don't expose any info if called directly
if (!function_exists('add_action') ) {
	echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
	exit;
}

require_once dirname(__FILE__) . '/a/class.wp-media-sandbox.php';

function wp_media_sandbox()
{
	static $inst;

	if ($inst === null) {
		$inst = new WP_Media_Sandbox();
	}

	return $inst;
}

wp_media_sandbox();
