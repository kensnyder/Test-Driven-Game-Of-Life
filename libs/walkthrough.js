// put some scripts and css in the head
var headHtml = [
	'<title>Unit Test Walkthrough: Game of Life</title>',
	'<link  href="../libs/walkthrough.css" rel="stylesheet" />',
	'<script src="../libs/jquery/jquery.js"></script>',
	'<link  href="../libs/qunit/qunit.css" rel="stylesheet" />',
	'<script src="../libs/qunit/qunit.js"></script>',
	'<link  href="../libs/prettify/prettify-min.css" rel="stylesheet" />',
	'<script src="../libs/prettify/prettify-min.js" id=prettifyjs></script>',
];
document.write(headHtml.join(''));

// run our setup method after the scripts above are parsed and run
setTimeout(setupWalkthrough, 0)

function setupWalkthrough() {
	// setup page functionality on document ready
	$(function() { "use strict";

		// don't autostart qunit
		QUnit.config.autostart = false;

		// add our code to the body
		var bodyHtml = [
			'<div id=nav><a href="" id=prev></a> | <span id=curr></span> | <a href="" id=next></a></div>',
			'<h2>Unit Tests</h2>',
			'<pre class=prettyprint id=tests></pre>',
			'<h2>Game Code</h2>',
			'<pre class=prettyprint id=game></pre>',
			'<div id=qunit>'
		];
		$(document.body).append( $('<div />').html(bodyHtml.join('\n\t')) );

		// generate the navigation
		var pages = ['00-start.html','01-fail.html','01-pass.html','02-fail.html','02-pass.html','03-fail.html','03-pass.html','04-fail.html','04-pass.html','05-fail.html','05-pass.html','06-fail.html','06-pass.html','07-fail.html','07-pass.html','08a-fail.html','08a-pass.html','08b-fail.html','08b-pass.html','08c-fail.html','08c-pass.html','09-fail.html','09-pass.html','10-fail.html','10-pass.html','11-fail.html','11-pass.html','12-fail.html','12-pass.html','12-refactor.html'];
		var curr = window.location.href.match(/[^\/]+.html/);
		var idx = pages.indexOf(curr[0]);
		var $prev = $('#prev');
		var $next = $('#next');

		if (pages[idx-1]) {		
			$prev.attr('href', pages[idx-1]).html('&laquo; ' + pages[idx-1].replace('.html', ''));
		}
		$('#curr').text(pages[idx].replace('.html', ''));
		if (pages[idx+1]) {
			$next.attr('href', pages[idx+1]).html(pages[idx+1].replace('.html', '') + ' &raquo;');
		}

		// pull out the javascript for the unit tests and game code
		var js = $('script').last().text();	
		var parts = js.split(/\/\/ \*{15} [\w ]+ \*{15}/);	
		var tests = $.trim(parts[1]).replace(/\t/g, '    ');
		var game = $.trim(parts[2]).replace(/\t/g, '    ');

		// put that code into our pre elements
		$('#tests').text(tests);
		$('#game').text(game);	

		// add syntax highlighting to the pre elements
		prettyPrint();

		// start qunit now
		QUnit.start();
		
		// go previous and next on certain keypresses
		$(window).keyup(function(evt) {
			if ($prev.length > 0 && [37].indexOf(evt.which) > -1) {
				window.location.href = $prev.attr('href');
			}
			else if ($next.length > 0 && [39].indexOf(evt.which) > -1) {
				window.location.href = $next.attr('href');
			}
		});

	});
}