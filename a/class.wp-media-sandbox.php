<?php if (!defined('ABSPATH')) exit;

$d = dirname(__FILE__);

require "$d/class.wp-media-sandbox-menu.php";
require "$d/class.wp-media-sandbox-view.php";

class WP_Media_Sandbox
{
	private $menu;
	private $view;

	public function __construct()
	{
		$this->menu = new WP_Media_Sandbox_Menu();
		$this->view = new WP_Media_Sandbox_View();
	}

	public function menu()
	{
		return $this->menu;
	}

	public function view()
	{
		return $this->view;
	}
}
