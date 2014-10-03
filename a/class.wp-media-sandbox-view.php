<?php if (!defined('ABSPATH')) exit;

class WP_Media_Sandbox_View
{
	public function render_str($rel, $param = array())
	{
		ob_start();
		$this->render($rel, $param);
		return ob_get_clean();
	}

	public function render($rel, $param = array())
	{
		$d = dirname(__FILE__);

		extract($param);
		include "$d/view/$rel";
	}
}
