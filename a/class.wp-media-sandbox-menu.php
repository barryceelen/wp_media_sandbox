<?php if (!defined('ABSPATH')) exit;

class WP_Media_Sandbox_Menu
{
	public function __construct()
	{
		if (is_admin()) {
			$this->add_admin_actions();
		}
	}

	private function add_admin_actions()
	{
		add_action('admin_menu', array($this, '_admin_action_admin_menu'));
		add_action('add_meta_boxes', function () {
			var_dump('add_meta_boxes');
		});
	}

	/**
	 * @internal
	 */
	public function _admin_action_admin_menu()
	{
		$capability = 'manage_options';
		add_menu_page(__('WP Media Sandbox'), __('WP Media Sandbox'), $capability, 'wp-media-sandbox-hello', array($this, '_wp_media_sandbox_hello_page'));
	}

	public function _wp_media_sandbox_hello_page()
	{
		$d = rtrim(plugin_dir_url(dirname(__FILE__)), '/');

		wp_enqueue_media();
		wp_enqueue_script('wp-media-sandbox', "$d/static/wp-media-sandbox.js", array('jquery'));

		wp_media_sandbox()->view()->render('page-hello.php');
	}
}
