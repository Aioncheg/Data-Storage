// Horizontal splitter
var splitterPosition = 60;
var splitter = $('.dictionary-container').split({
		position: splitterPosition + '%',
		orientation: 'horizontal',
		onDragEnd: function() {
			splitterPosition = Math.round(splitter.position()*100/$('.dictionary-container').height());
		}
});

$(window).resize(function () {
	splitter.position(splitterPosition + '%')
});