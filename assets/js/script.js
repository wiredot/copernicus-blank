jQuery(document).ready(function() {
	svg4everybody();
	galleryInit();
});
function galleryInit() {
	jQuery('.wp-block-image a, .wp-block-gallery a').each(function(index, el) {
		var figcaption = jQuery(el).parents('figure').find('figcaption');

		if ( figcaption.length ) {
			jQuery(el).attr('data-caption', figcaption.text());
		}
	});
	
	jQuery('.wp-block-image a, .wp-block-gallery a').attr('data-fancybox', 'gallery');

	jQuery().fancybox({
		loop: true,
	});
}
//# sourceMappingURL=script.js.map
