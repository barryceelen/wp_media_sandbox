/* global jQuery */

jQuery(function ($) {

	$('#wp-media-sandbox-button').click(function () {
		var Frame = wp.media.view.Frame.extend({
			className: 'media-frame',
			template:  wp.media.template('media-frame'),
			regions: ['r1', 'r2', 'r3']
		});
		var f = new Frame();
		var m = new wp.media.view.Modal({controller: f});
		console.log(f);
		m.open();
	});

	$('#wp-media-sandbox-media-open').click(function () {
		wp.media({title: 'Mauris non sem volutpat'}).open();
	});




	$('#wp-media-sandbox-view-modal').click(function () {
		var c = {};
		var m = new wp.media.view.Modal({controller: c});
		m.open();
	});

	$('#wp-media-sandbox-view-uploader_window').click(function () {
		var c = {};
		var u = new wp.media.view.UploaderWindow({controller: c});
		u.open();
	});

	$('#wp-media-sandbox-media-editor-open').click(function () {
		wp.media.editor.open();
		// wp.media.editor.insert('<p>helllo</p>').open();
	});




	$('#wp-media-sandbox-media-featuredImage-frame-open').click(function () {
		wp.media.featuredImage.frame().open();
	});

	$('#wp-media-sandbox-media-select-open').click(function  () {
		wp.media({frame: 'select'}).open();
	});

	$('#wp-media-sandbox-media-post-open').click(function () {
		wp.media({frame: 'post'}).open();
	});

	$('#wp-media-sandbox-media-manage-open').click(function () {
		wp.media({frame: 'manage'}).open();
	});

	$('#wp-media-sandbox-media-image-open').click(function () {
		wp.media({frame: 'image'}).open();
	});

	$('#wp-media-sandbox-media-audio-open').click(function () {
		wp.media({frame: 'audio'}).open();
	});

	$('#wp-media-sandbox-media-video-open').click(function () {
		wp.media({frame: 'video'}).open();
	});

	$('#wp-media-sandbox-media-edit-attachments-open').click(function () {
		wp.media({frame: 'edit-attachments'}).open();
	});

	/*
	if ( 'select' === attributes.frame && MediaFrame.Select ) {
		frame = new MediaFrame.Select( attributes );
	} else if ( 'post' === attributes.frame && MediaFrame.Post ) {
		frame = new MediaFrame.Post( attributes );
	} else if ( 'manage' === attributes.frame && MediaFrame.Manage ) {
		frame = new MediaFrame.Manage( attributes );
	} else if ( 'image' === attributes.frame && MediaFrame.ImageDetails ) {
		frame = new MediaFrame.ImageDetails( attributes );
	} else if ( 'audio' === attributes.frame && MediaFrame.AudioDetails ) {
		frame = new MediaFrame.AudioDetails( attributes );
	} else if ( 'video' === attributes.frame && MediaFrame.VideoDetails ) {
		frame = new MediaFrame.VideoDetails( attributes );
	} else if ( 'edit-attachments' === attributes.frame && MediaFrame.EditAttachments ) {
		frame = new MediaFrame.EditAttachments( attributes );
	}
*/

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
