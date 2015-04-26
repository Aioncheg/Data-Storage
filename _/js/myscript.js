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