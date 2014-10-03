/* global jQuery */

jQuery(function ($) {

	var button = $('#wp-media-sandbox-button');

	button.click(function () {

		//wp.media({title: 'aaaaaaaa'}).open();
		wp.media.editor.open();
		return;
		v.open();

		var c = {trigger: function (){}};
		var v = new wp.media.view.Modal({controller: c, title: 'Title'});
		v.open();

	});

	var originalToolbar = wp.media.view.Toolbar.Embed;
	wp.media.view.Toolbar.Embed = originalToolbar.extend({
		// code modified from media-views.js, l 2500
		initialize: function() {

			this.options.items = _.defaults( this.options.items || {}, {
				// keep the original button
				select: {
					style:    'primary',
					text:     wp.media.view.l10n.insertIntoPost,
					priority: 80,
					click:    this.clickSelect,
					requires: false
				},
				// and add a new one
				selectAll: {
					text: 'Select All',
					style: 'primary',
					priority: 80,
					requires: false,
					click: this.selectAll
				}
			});

			wp.media.view.Toolbar.Select.prototype.initialize.apply( this, arguments );
		},

		selectAll: function(){
			console.log('select All');
		}
	});
});
