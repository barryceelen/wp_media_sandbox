<?php if (!defined('ABSPATH')) exit;

?>
<style type="text/css">pre { tab-size: 4px; }</style>

<script type="text/html" id="tmpl-wp-media-sandbox-frame">
	<div class="media-frame-menu"></div>
	<div class="media-frame-title"></div>
	<div class="media-frame-router"></div>
	<div class="media-frame-content"></div>
	<div class="media-frame-toolbar"></div>
	<div class="media-frame-uploader"></div>
</script>

<div class="wrap">

	<h2>WP Media Sandbox</h2>

	<button id="wp-media-sandbox-button" class="button">BUTTON</button>

	<br/>
	<button id="wp-media-sandbox-1">demo 1</button> <br/>
	<button id="wp-media-sandbox-2">demo 2</button> <br/>
	<button id="wp-media-sandbox-3">demo 3</button> <br/>
	<button id="wp-media-sandbox-4">demo 4</button> <br/>

<br/>
<button id="wp-media-sandbox-view-modal">new wp.media.view.Modal</button>
<pre>
// Initialize modal container view.
if ( this.options.modal ) {
	this.modal = new media.view.Modal({
		controller: this,
		title:      this.options.title
	});

	this.modal.content( this );
}
</pre>

<button id="wp-media-sandbox-view-uploader_window">new wp.media.view.UploaderWindow</button>
<pre>
// Initialize window-wide uploader.
if ( this.options.uploader ) {
	this.uploader = new media.view.UploaderWindow({
		controller: this,
		uploader: {
			dropzone:  this.modal ? this.modal.$el : this.$el,
			container: this.$el
		}
	});
	this.views.set( '.media-frame-uploader', this.uploader );
}
</pre>

	<br/>
	<button id="wp-media-sandbox-media-open" class="button">wp.media.open()</button>
	<br/>
	<button id="wp-media-sandbox-media-select-open" class="button">wp.media({frame: 'select'}).open()</button>
<pre>
// Creates one of the wp.view.MediaFrame and returns it
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
</pre>

<br/>
<button id="wp-media-sandbox-media-editor-open" class="button">Insert Media into Editor | wp.media.editor.open()</button>
<pre>
if (window.tinymce) {

}
</pre>

	<p>
		<button id="wp-media-sandbox-media-featuredImage-frame-open" class="button">Set Featured Image | wp.media.featuredImage.frame().open()</button>

		<br/>

		<br/>
		<button id="wp-media-sandbox-media-post-open" class="button">wp.media({frame: 'post'}).open</button>

		<br/>
		<button id="wp-media-sandbox-media-manage-open" class="button">wp.media({frame: 'manage'}).open()</button>

		<br/>
		<button id="wp-media-sandbox-media-image-open" class="button">wp.media({frame: 'image'}).open()</button>

		<br/>
		<button id="wp-media-sandbox-media-audio-open" class="button">wp.media({frame: 'audio'}).open()</button>

		<br/>
		<button id="wp-media-sandbox-media-video-open" class="button">wp.media({frame: 'video'}).open()</button>

		<br/>
		<button id="wp-media-sandbox-media-edit-attachments-open" class="button">wp.media({frame: 'edit-attachments'}).open()</button>
	</p>

<pre style="tab-size: 4;">
PHP
media.php
media-template.php

JAVASCRIPT
<a href="<?php echo site_url() ?>/wp-includes/js/media-audiovideo.js">media-audiovideo.js</a>
<a href="<?php echo site_url() ?>/wp-includes/js/media-editor.js">media-editor.js</a>
<a href="<?php echo site_url() ?>/wp-includes/js/media-grid.js">media-grid.js</a>
<a href="<?php echo site_url() ?>/wp-includes/js/media-models.js">media-models.js</a>
<a href="<?php echo site_url() ?>/wp-includes/js/media-views.js">media-views.js</a>

FUNCTIONS
_wp_image_editor_choose                                       media.php
_wp_post_thumbnail_class_filter                               media.php
_wp_post_thumbnail_class_filter_add                           media.php
_wp_post_thumbnail_class_filter_remove                        media.php
add_image_size                                                media.php
adjacent_image_link                                           media.php
attachment_url_to_postid                                      media.php
gallery_shortcode                                             media.php
get_attached_media                                            media.php
get_attachment_taxonomies                                     media.php
get_image_tag                                                 media.php
get_intermediate_image_sizes                                  media.php
get_media_embedded_in_content                                 media.php
get_post_galleries                                            media.php
get_post_galleries_images                                     media.php
get_post_gallery                                              media.php
get_post_gallery_images                                       media.php
get_taxonomies_for_attachments                                media.php
has_image_size                                                media.php
image_constrain_size_for_editor                               media.php
image_downsize                                                media.php
image_get_intermediate_size                                   media.php
image_hwstring                                                media.php
image_make_intermediate_size                                  media.php
image_resize_dimensions                                       media.php
img_caption_shortcode                                         media.php
next_image_link                                               media.php
previous_image_link                                           media.php
remove_image_size                                             media.php
set_post_thumbnail_size                                       media.php
wp_audio_shortcode                                            media.php
wp_constrain_dimensions                                       media.php
wp_convert_hr_to_bytes                                        media.php
wp_embed_defaults                                             media.php
wp_embed_handler_audio                                        media.php
wp_embed_handler_googlevideo                                  media.php
wp_embed_handler_video                                        media.php
wp_embed_handler_youtube                                      media.php
wp_embed_register_handler                                     media.php
wp_embed_unregister_handler                                   media.php
wp_enqueue_media                                              media.php
wp_expand_dimensions                                          media.php
wp_get_attachment_id3_keys                                    media.php
wp_get_attachment_image                                       media.php
wp_get_attachment_image_src                                   media.php
wp_get_audio_extensions                                       media.php
wp_get_image_editor                                           media.php
wp_get_video_extensions                                       media.php
wp_image_editor_supports                                      media.php
wp_imagecreatetruecolor                                       media.php
wp_max_upload_size                                            media.php
wp_maybe_generate_attachment_metadata                         media.php
wp_maybe_load_embeds                                          media.php
wp_mediaelement_fallback                                      media.php
wp_oembed_add_provider                                        media.php
wp_oembed_get                                                 media.php
wp_oembed_remove_provider                                     media.php
wp_playlist_scripts                                           media.php
wp_playlist_shortcode                                         media.php
wp_plupload_default_settings                                  media.php
wp_prepare_attachment_for_js                                  media.php
wp_underscore_playlist_templates                              media.php
wp_video_shortcode                                            media.php
wpview_media_sandbox_styles                                   media.php
wp_underscore_audio_template                                  wp-template.php
wp_underscore_video_template                                  wp-template.php
wp_print_media_templates                                      wp-template.php

JAVASCRIPT
wp.media.audio                                                media-audiovideo.js
wp.media.controller.AudioDetails                              media-audiovideo.js
wp.media.controller.VideoDetails                              media-audiovideo.js
wp.media.mixin                                                media-audiovideo.js
wp.media.model.PostMedia                                      media-audiovideo.js
wp.media.playlist                                             media-audiovideo.js
wp.media.video                                                media-audiovideo.js
wp.media.view.AudioDetails                                    media-audiovideo.js
wp.media.view.MediaDetails                                    media-audiovideo.js
wp.media.view.MediaFrame.AudioDetails                         media-audiovideo.js
wp.media.view.MediaFrame.MediaDetails                         media-audiovideo.js
wp.media.view.MediaFrame.VideoDetails                         media-audiovideo.js
wp.media.view.VideoDetails                                    media-audiovideo.js

=== media-editor.js =========================================
{}
	wp.media._galleryDefaults                                 media-editor.js {}
	wp.media.editor                                           media-editor.js {}
	wp.media.embed                                            media-editor.js {}
	wp.media.featuredImage                                    media-editor.js {}
	wp.media.galleryDefaults                                  media-editor.js {}
	wp.media.string                                           media-editor.js {}
function
	wp.media.coerce                                           media-editor.js function
	wp.media.collection                                       media-editor.js function
etc
	wp.media.gallery                                          media-editor.js new wp.media.collection({...})

=== media-grid.js ===========================================
Backbone.Router
	wp.media.view.MediaFrame.Manage.Router                    media-grid.js Backbone.Router
media.controller.State
	wp.media.controller.EditAttachmentMetadata                media-grid.js media.controller.State
wp.Backbone.View
	wp.media.View
		wp.media.view.Attachment
			wp.media.view.Attachment.Details
				wp.media.view.Attachment.Details.TwoColumn    media-grid.js media.view.Attachment.Details
		wp.media.view.AttachmentFilters
			wp.media.view.DateFilter                          media-grid.js media.view.AttachmentFilters
		wp.media.view.Button
			wp.media.view.DeleteSelectedButton                media-grid.js media.view.Button
			wp.media.view.SelectModeToggleButton              media-grid.js media.view.Button
		wp.media.view.EditImage
			wp.media.view.EditImage.Details                   media-grid.js media.view.EditImage
		wp.media.view.Frame
			wp.media.view.MediaFrame
				wp.media.view.MediaFrame.EditAttachments      media-grid.js media.view.MediaFrame
				wp.media.view.MediaFrame.Manage               media-grid.js media.view.MediaFrame

=== media-models.js =========================================
Backbone.Model
	wp.media.model.Attachment                                 media-models.js Backbone.Model
	wp.media.model.PostImage                                  media-models.js Backbone.Model
wp.media.model.Attachments                                    media-models.js Backbone.Collection
	wp.media.model.Query                                      media-models.js wp.media.model.Attachments
	wp.media.model.Selection                                  media-models.js wp.media.modal.Attachments
{}
	wp.media                                                  media-models.js {}
function
	wp.media.attachment                                       media-models.js function
	wp.media.query                                            media-models.js function
etc
	wp.media.frame                                            media-models.js current frame?
	wp.media.model.l10n                                       media-models.js
	wp.media.model.settings                                   media-models.js

=== media-views.js ==========================================
wp.media.controller.Region                                    media-views.js {} && Backbone.Model
wp.media.controller.State                                     media-views.js {} && Backbone.Model
	wp.media.controller.Cropper                               media-views.js
	wp.media.controller.EditImage                             media-views.js
	wp.media.controller.Embed                                 media-views.js
	wp.media.controller.ImageDetails                          media-views.js
	wp.media.controller.Library                               media-views.js
		wp.media.controller.CollectionAdd                     media-views.js
		wp.media.controller.CollectionEdit                    media-views.js
		wp.media.controller.FeaturedImage                     media-views.js
		wp.media.controller.GalleryAdd                        media-views.js
		wp.media.controller.GalleryEdit                       media-views.js
		wp.media.controller.MediaLibrary                      media-views.js
		wp.media.controller.ReplaceImage                      media-views.js
wp.media.controller.StateMachine                              media-views.js {} && Backbone.Collection && Backbone.Model && Backbone.Events

=== media-views.js ==========================================
wp.Backbone.View
	wp.media.View                                             media-views.js
		wp.media.view.Attachment                              media-views.js && {}
			wp.media.view.Attachment.Details                  media-views.js
			wp.media.view.Attachment.EditLibrary              media-views.js
			wp.media.view.Attachment.Library                  media-views.js
			wp.media.view.Attachment.Selection                media-views.js
				wp.media.view.Attachment.EditSelection        media-views.js
		wp.media.view.AttachmentCompat                        media-views.js
		wp.media.view.AttachmentFilters                       media-views.js
			wp.media.view.AttachmentFilters.All               media-views.js
			wp.media.view.AttachmentFilters.Uploaded          media-views.js
		wp.media.view.Attachments                             media-views.js
			wp.media.view.Attachments.Selection               media-views.js
		wp.media.view.AttachmentsBrowser                      media-views.js
		wp.media.view.Button                                  media-views.js
		wp.media.view.ButtonGroup                             media-views.js
		wp.media.view.Cropper                                 media-views.js
		wp.media.view.EditImage                               media-views.js
		wp.media.view.EditorUploader                          media-views.js
		wp.media.view.Embed                                   media-views.js
		wp.media.view.EmbedUrl                                media-views.js
		wp.media.view.FocusManager                            media-views.js
		wp.media.view.Frame                                   media-views.js && wp.media.controller.StateMachine
			wp.media.view.MediaFrame                          media-views.js && {}
				wp.media.view.MediaFrame.Select               media-views.js
					wp.media.view.MediaFrame.ImageDetails     media-views.js
					wp.media.view.MediaFrame.Post             media-views.js
		wp.media.view.Iframe                                  media-views.js
		wp.media.view.Label                                   media-views.js
		wp.media.view.MenuItem                                media-views.js
			wp.media.view.RouterItem                          media-views.js
		wp.media.view.Modal                                   media-views.js
		wp.media.view.PriorityList                            media-views.js
			wp.media.view.Menu                                media-views.js
				wp.media.view.Router                          media-views.js
			wp.media.view.Sidebar                             media-views.js
		wp.media.view.Search                                  media-views.js
		wp.media.view.Selection                               media-views.js
		wp.media.view.Settings                                media-views.js
			wp.media.view.EmbedLink                           media-views.js
			wp.media.view.Settings.AttachmentDisplay          media-views.js
				wp.media.view.EmbedImage                      media-views.js
				wp.media.view.ImageDetails                    media-views.js
			wp.media.view.Settings.Gallery                    media-views.js
			wp.media.view.Settings.Playlist                   media-views.js
		wp.media.view.Spinner                                 media-views.js
		wp.media.view.Toolbar                                 media-views.js
			wp.media.view.Toolbar.Select                      media-views.js
				wp.media.view.Toolbar.Embed                   media-views.js
		wp.media.view.UploaderInline                          media-views.js
		wp.media.view.UploaderStatus                          media-views.js
		wp.media.view.UploaderStatusError                     media-views.js
		wp.media.view.UploaderWindow                          media-views.js
etc
	wp.media.events                                           media-views.js
	wp.media.model.settings.post                              media-views.js
	wp.media.selectionSync                                    media-views.js
	wp.media.transition                                       media-views.js
</pre>

<h3>Reference</h3>

<ul>
	<li><a href="http://wordpress.stackexchange.com/q/78881/58387">Wordpress 3.5 Media Manager - add a button</a></li>
	<li><a href="http://wordpress.stackexchange.com/a/82057/58387">Add a menu item to Wordpress 3.5 Media Manager</a></li>
	<li><a href="https://gist.github.com/Fab1en/4586865">Draft plugin example to add a javascript menu into the WP3.5 Media Library popup</a></li>
	<li><a href="https://github.com/thomasgriffin/New-Media-Image-Uploader">New Media Image Uploader</a></li>
	<li><a href="http://wordpress.stackexchange.com/q/130585/58387">Customizing the 3.5 “Add Media” popup (Backbone.js)</a></li>
</ul>

</div>
