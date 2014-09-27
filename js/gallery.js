// Avoid data tracking, enabled by default in Fotorama
blockFotoramaData = true;

$(document).ready(function () {
    var click = true;

    // Add colorbox support to the frames, if possible
    if ($.isFunction($.colorbox)) {
	var transition;
	$('#ss-gallery')
	    .on('fotorama:show', function () {
		transition = true;
	    })
	    .on('fotorama:showend', function () {
		transition = false;
	    })
	    .on('fotorama:load', function (ev, fotorama, extra) {
		extra.frame['$stageFrame'].find('.fotorama__img').not('.fotorama__img--full')
		    .css('cursor', 'zoom-in')
		    .on('click', function () {
			if (transition) return;
			$.colorbox({
			    href: extra.frame.full,
			    title: extra.frame.caption
			});
		    });
	    });
	click = false;
    }

    // Enable the Fotorama gallery
    $('#ss-gallery').fotorama({
	nav: 'thumbs',
	click: click,
	allowfullscreen: 'native',
	width: '100%'
    });
});
