/* global jQuery */

jQuery(function ($) {

	$('#wp-media-sandbox-button').click(function () {
		//var Frame = wp.media.view.Frame.extend({
		//	className: 'media-frame',
		//	template:  wp.media.template('media-frame'),
		//	regions: ['r1', 'r2', 'r3']
		//});
		//var f = new Frame();
		//var m = new wp.media.view.Modal({controller: f});
		//m.open();

		var Frame = wp.media.view.MediaFrame.Select.extend({
		});
		var frame = new Frame();
		frame.open();

	});

	$('#wp-media-sandbox-media-open').click(function () {
		wp.media({title: 'Mauris non sem volutpat'}).open();
	});



	$('#wp-media-sandbox-1').click(function () {

		var frame = wp.media({
			title: '>>> Title <<<',
			button: {
				text: '>>> Button Text <<<'
			},
			multiple: false,
			library: {
				type: 'image' // audio, video, image
			}
		});

		frame.on('ready', function () {
			$('.media-modal').addClass('no-sidebar');
		});

		frame.state('library').on('select', function() {
			// Get the selected attachment. Since we have disabled multiple selection
			// we want the first one of the collection.
			var attachment = this.get('selection').first();
			// Call the function which will output the attachment details
			console.log(attachment);
		});

		frame.open();
	});

	$('#wp-media-sandbox-2').click(function () {

		// wp.media.view.MediaFrame gives us the following container
		//
		// <div class="media-frame wp-core-ui">
		//     <div class="media-frame-menu">...</div>
		//     <div class="media-frame-title">...</div>
		//     <div class="media-frame-router">...</div>
		//     <div class="media-frame-content">...</div>
		//     <div class="media-frame-toolbar">...</div>
		//     <div class="media-frame-uploader"><div class="uploader-window">
		//         <div class="uploader-window-content">
		//             <h3>Drop files to upload</h3>
		//         </div>
		//     </div>
		// </div>
		//

		// How to use
		// ----------
		//
		//    // replace .media-frame-title with custom html
		//    // frame.title.set(new wp.media.View(...));
		//
		//    // replace .media-frame-menu with custom html
		//    // frame.menu.set(new wp.media.View(...));
		//
		//    // replace .media-frame-router with custom html
		//    // frame.router.set(new wp.media.View(...));
		//
		//    // replace .media-frame-content with custom html
		//    // frame.content.set(new wp.media.View(...));
		//
		//    // replace .media-frame-toolbar with custom html
		//    // frame.toolbar.set(new wp.media.View(...));

		var frame = new wp.media.view.MediaFrame({
			state: 'state1',
			states: [
				new wp.media.controller.State({
					id: 'state1',
					menu: 'default', // comment to show
					content: 'content1',
					toolbar: 'toolbar1',
					title: 'Playing with .media-frame-content'
				})
			]
		});

		frame.on('toolbar:create:toolbar1', function () {
			frame.toolbar.set(new wp.media.view.Toolbar({
				controller: frame,
				items: [
					{
						style: '',
						text: '>>> Button 1 <<<',
						priority: 20,
						click: function() {
							alert('Back');
						}
					},
					{
						style: '',
						text: '>>> Button 2 <<<',
						priority: 30,
						click: function () {
							alert('Button 2');
						}
					},
					{
						style: 'primary',
						text: 'Close',
						priority: 40,
						click: function () {
							frame.close();
						}
					}
				]
			}));
		});

		frame.on('content:create:content1', function () {
			frame.content.set(new wp.media.View({
				el: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum, nisi quis gravida posuere, nisl purus vehicula nisl, ac posuere purus urna eleifend metus. Etiam a consectetur erat. Etiam volutpat nibh eu vehicula fermentum. Curabitur molestie sapien et odio condimentum condimentum. Integer quis dictum tellus. Donec vitae viverra quam. Quisque a mauris a turpis mattis rhoncus. Nam quis consequat nisi, luctus consectetur mauris. Nulla sed turpis vel mauris hendrerit tincidunt vitae vel nisl. Proin quam lacus, interdum ac dui a, elementum rutrum eros. Nunc pulvinar porta elit id facilisis.</p><p>Donec lacus tellus, vulputate et consectetur at, luctus id mauris. Etiam cursus, lectus et fringilla rutrum, mauris neque tincidunt felis, id semper nunc nunc ut nisl. Curabitur tempor urna massa, sed pulvinar purus pellentesque vitae. Suspendisse ultrices at nibh sed pellentesque. Donec venenatis massa eu nisi vestibulum accumsan. Sed ut blandit purus, non luctus nulla. Cras pretium hendrerit pulvinar. Suspendisse at tellus eu justo interdum blandit ac commodo felis. Maecenas non arcu malesuada, hendrerit dui et, porta justo. Curabitur egestas laoreet neque. Mauris adipiscing vulputate condimentum. In vestibulum feugiat laoreet. Nulla tristique, mi scelerisque rhoncus tempor, purus felis varius sapien, et hendrerit dui dui et lorem. Vivamus nec libero id elit pulvinar eleifend. Suspendisse lacinia eu nisl id adipiscing. Curabitur varius urna lacus, ut varius lectus rhoncus ac.</p><p>Sed a odio elit. Vestibulum id elementum sapien. Integer volutpat magna vitae eros hendrerit rutrum. Suspendisse non ante vel erat dignissim vestibulum ac eu magna. Proin fermentum tellus mi, vitae ornare erat aliquet nec. Donec sed purus libero. Aliquam erat volutpat. Phasellus faucibus risus blandit lectus varius pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu arcu magna. Donec at risus urna. Proin at volutpat leo.</p><p>Aliquam imperdiet, lorem eget volutpat adipiscing, orci eros tempus orci, vel aliquam magna nisl quis mi. Nunc sed gravida lacus. Ut ut justo sit amet urna commodo tincidunt quis a quam. Nullam feugiat nunc suscipit mauris tristique, faucibus rhoncus felis varius. Cras pulvinar eu magna id molestie. Morbi lorem felis, viverra in nibh in, pharetra sodales risus. Phasellus porttitor iaculis libero eget feugiat. Suspendisse libero metus, vestibulum quis leo eu, rutrum luctus purus. Aliquam tincidunt vitae turpis vitae tempor. Aenean massa dui, luctus nec quam id, semper lacinia dolor. Quisque vel egestas enim.</p><p>Curabitur pharetra nunc vitae sapien dapibus, venenatis vulputate lectus malesuada. Nullam et nisi ligula. Fusce tincidunt euismod odio viverra condimentum. Fusce et dui viverra, bibendum nunc eu, rutrum sem. Curabitur vitae suscipit nunc, id placerat mauris. Mauris lacus ante, venenatis id dolor sed, dapibus elementum ante. Proin mollis orci dolor, vehicula convallis metus vestibulum quis. Aliquam ac dolor vitae magna gravida rutrum. Sed cursus sollicitudin dui non mollis</p>'
			}));
		});

		frame.on('ready', function () {
			// make modal window narrower
			frame.$el.closest('.media-modal').addClass('smaller');
		});

		frame.open();

	});


	$('#wp-media-sandbox-3').click(function () {

		// wp.media.view.MediaFrame gives us the following container
		//
		// <div class="media-frame wp-core-ui">
		//     <div class="media-frame-menu">...</div>
		//     <div class="media-frame-title">...</div>
		//     <div class="media-frame-router">...</div>
		//     <div class="media-frame-content">...</div>
		//     <div class="media-frame-toolbar">...</div>
		//     <div class="media-frame-uploader"><div class="uploader-window">
		//         <div class="uploader-window-content">
		//             <h3>Drop files to upload</h3>
		//         </div>
		//     </div>
		// </div>
		//

		// How to use
		// ----------
		//
		//    // replace .media-frame-title with custom html
		//    // frame.title.set(new wp.media.View(...));
		//
		//    // replace .media-frame-menu with custom html
		//    // frame.menu.set(new wp.media.View(...));
		//
		//    // replace .media-frame-router with custom html
		//    // frame.router.set(new wp.media.View(...));
		//
		//    // replace .media-frame-content with custom html
		//    // frame.content.set(new wp.media.View(...));
		//
		//    // replace .media-frame-toolbar with custom html
		//    // frame.toolbar.set(new wp.media.View(...));

		var Frame = wp.media.view.MediaFrame.extend({
			initialize: function () {
				wp.media.view.MediaFrame.prototype.initialize.apply(this, arguments);
				this.on('router:create:router1', this.createRouter, this);
				this.on('router:render:router1', this.renderRouter, this);
			},
			renderRouter: function (view) {
				view.set({
					tab1: { // triggers content:create:tab1
						text: 'The Sign',
						priority: 20
					},
					tab2: { // triggers content:create:tab2
						text: 'Cruel Summer',
						priority: 30
					},
					tab3: { // triggers content:create:tab3
						text: 'Beautiful Life',
						priority: 40
					}
				})
			}
		});

		var frame = new Frame({
			state: 'state1',
			states: [
				new wp.media.controller.State({
					id: 'state1',
					content: 'tab2',
					menu: 'default', // comment to show
					router: 'router1', // false to hide
					toolbar: 'toolbar1', // false to hide
					title: 'Playing with .media-frame-router'
				})
			]
		});

		frame.on('toolbar:create:toolbar1', function () {
			frame.toolbar.set(new wp.media.view.Toolbar({
				controller: frame,
				items: [
					{
						style: '',
						text: '>>> Button 1 <<<',
						priority: 20,
						click: function() {
							alert('Back');
						}
					},
					{
						style: '',
						text: '>>> Button 2 <<<',
						priority: 30,
						click: function () {
							alert('Button 2');
						}
					},
					{
						style: 'primary',
						text: 'Close',
						priority: 40,
						click: function () {
							frame.close();
						}
					}
				]
			}));
		});

		frame.on('content:create:tab1', function () {
			frame.content.set(new wp.media.View({
				el: '<iframe width="480" height="360" src="//www.youtube.com/embed/DNPjeIamsck?version=3&enablejsapi=1" frameborder="0" allowfullscreen style="display: block; width: 100%; height: 100%;"></iframe>'
			}));
		});

		frame.on('content:create:tab2', function () {
			frame.content.set(new wp.media.View({
				el: '<iframe width="480" height="360" src="//www.youtube.com/embed/PUrAZo50XGE?version=3&enablejsapi=1" frameborder="0" allowfullscreen style="display: block; width: 100%; height: 100%;"></iframe>'
			}));
		});

		frame.on('content:create:tab3', function () {
			frame.content.set(new wp.media.View({
				el: '<iframe width="480" height="360" src="//www.youtube.com/embed/v9hdMSr6Duc?version=3&enablejsapi=1" frameborder="0" allowfullscreen style="display: block; width: 100%; height: 100%;"></iframe>'
			}));
		});

		frame.on('ready', function () {
			// make modal window narrower
			frame.$el.closest('.media-modal').addClass('smaller');
		});

		frame.on('close', function () {
			// a way to stop playing youtube video
			frame.content.render();
		});

		frame.open();

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
