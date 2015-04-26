// Horizontal splitter
var splitterPosition = $.cookie('splitterposition') || 60;
var splitter = $('.dictionary-container').split({
		position: splitterPosition + '%',
		orientation: 'horizontal',
		onDragEnd: function() {
			splitterPosition = Math.round(splitter.position()*100/$('.dictionary-container').height());
			$.cookie('splitterposition', splitterPosition, {expires: 365});
		}
});

$(window).resize(function () {
	splitter.position(splitterPosition + '%')
});

var click = false;
var mainPaddingShow = $('.layout .main-container').css('padding-left');
var mainPaddingHide = $('.layout .sidebar-container').css('margin-left');
$('.layout .vsplitter').click(function () {
	if (!click) {
		$('.layout .sidebar-container').hide();
		$('.layout .main-container').css('padding-left', mainPaddingHide);
		click = !click;
	} else {
		$('.layout .sidebar-container').show();
		$('.layout .main-container').css('padding-left', mainPaddingShow);
		click = !click;
	}
});