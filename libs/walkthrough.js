var headHtml = [
	'<title>Game of Life Unit Test Walkthrough</title>',
	'<link  href="../libs/walkthrough.css" rel="stylesheet" />',
	'<script src="../libs/jquery/jquery.js"></script>',
	'<link  href="../libs/qunit/qunit.css" rel="stylesheet" />',
	'<script src="../libs/qunit/qunit.js"></script>',
	'<link  href="../libs/prettify/prettify-min.css" rel="stylesheet" />',
	'<script src="../libs/prettify/prettify-min.js" id=prettifyjs></script>',
];

document.write(headHtml.join(''));

setTimeout(setupWalkthrough, 0)

function setupWalkthrough() {
$(function() { "use strict";	
	
	QUnit.config.autostart = false;

	var bodyHtml = [
		'<div id=nav><a href="" id=prev></a> | <span id=curr></span> | <a href="" id=next></a></div>',
		'<h2>Unit Tests</h2>',
		'<pre class=prettyprint id=tests></pre>',
		'<h2>Game Code</h2>',
		'<pre class=prettyprint id=game></pre>',
		'<div id=qunit>'
	];
	
	$(document.body).append( $('<div />').html(bodyHtml.join('\n\t')) );
	
	var pages = ['00-start.html','01-fail.html','01-pass.html','02-fail.html','02-pass.html','03-fail.html','03-pass.html','04-fail.html','04-pass.html','05-fail.html','05-pass.html','06-fail.html','06-pass.html','07-fail.html','07-pass.html','08-fail.html','08-pass.html','09-fail.html','09-pass.html','10-fail.html','10-pass.html','11-fail.html','11-pass.html','12-fail.html','12-pass.html'];
	var curr = window.location.href.match(/[^\/]+.html/);
	var idx = pages.indexOf(curr[0]);

	$('#prev').attr('href', pages[idx-1]).html('&laquo; ' + pages[idx-1].replace('.html', ''));
	$('#curr').text(pages[idx]);
	$('#next').attr('href', pages[idx+1]).html(pages[idx+1].replace('.html', '') + ' &raquo;');
		
	var js = $('script').last().text();	
	var parts = js.split(/\/\/ \*{15} [\w ]+ \*{15}/);	
	var tests = $.trim(parts[1]);
	var game = $.trim(parts[2]);
	
	$('#tests').text(tests);
	$('#game').text(game);	
	
	prettyPrint();
	
	QUnit.start();
	
});
}