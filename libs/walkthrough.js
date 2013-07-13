$(function() {
	var pages = ['00-start.html','01-fail.html','01-pass.html','02-fail.html','02-pass.html','03-fail.html','03-pass.html','04-fail.html','04-pass.html','05-fail.html','05-pass.html','06-fail.html','06-pass.html','07-fail.html','07-pass.html','08-fail.html','08-pass.html','09-fail.html','09-pass.html','10-fail.html','10-pass.html','11-fail.html','11-pass.html','12-fail.html','12-pass.html'];
	var curr = window.location.href.match(/[^\/]+.html/);
	var idx = pages.indexOf(curr[0]);
	var $p = $('<p />');
	if (pages[idx-1]) {
		$('<a>&laquo; Prev</a>').attr('href', pages[idx-1]).appendTo($p);
	}
	if (pages[idx+1]) {
		$('<span>&nbsp;</span>').appendTo($p);
		$('<a>Next &raquo;</a>').attr('href', pages[idx+1]).appendTo($p);
	}
	$p.prependTo(document.body);
});
