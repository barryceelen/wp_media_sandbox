/* global jQuery */

jQuery(function ($) {

	$('#wp-media-sandbox-media-open').click(function () {
		wp.media({title: 'Mauris non sem volutpat'}).open();
	});

	$('#wp-media-sandbox-media-editor-open').click(function () {
		wp.media.editor.open();
	});

	$('#wp-media-sandbox-media-featuredImage-frame-open').click(function () {
		wp.media.featuredImage.frame().open();
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
