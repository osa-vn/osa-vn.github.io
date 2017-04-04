var $j = jQuery.noConflict();

$j(function() {
	$j('.chart.skills-green').easyPieChart({
		easing: 'easeOutBounce',
		trackColor: '#FFFFFF',
		lineWidth: 8,
		barColor: '#25C289',
		scaleColor: false,
		onStep: function(from, to, percent) { $j(this.el).find('.percent').text(Math.round(percent)); }
	});
	var chart = window.chart = $j('.chart.skills-green').data('easyPieChart');

	$j('.chart.skills-pink').easyPieChart({
		easing: 'easeOutBounce',
		trackColor: '#FFFFFF',
		lineWidth: 8,
		barColor: '#DE6262',
		scaleColor: false,
		onStep: function(from, to, percent) { $j(this.el).find('.percent').text(Math.round(percent)); }
	});
	var chart = window.chart = $j('.chart.skills-pink').data('easyPieChart');

	$j('.chart.skills-blue').easyPieChart({
		easing: 'easeOutBounce',
		trackColor: '#FFFFFF',
		lineWidth: 8,
		barColor: '#19B1DD',
		scaleColor: false,
		onStep: function(from, to, percent) { $j(this.el).find('.percent').text(Math.round(percent)); }
	});
	var chart = window.chart = $j('.chart.skills-blue').data('easyPieChart');

	$j('.chart.skills-dblue').easyPieChart({
		easing: 'easeOutBounce',
		trackColor: '#FFFFFF',
		lineWidth: 8,
		barColor: '#166BA2',
		scaleColor: false,
		onStep: function(from, to, percent) { $j(this.el).find('.percent').text(Math.round(percent)); }
	});
	var chart = window.chart = $j('.chart.skills-dblue').data('easyPieChart');

	$j('.chart.skills-yellow').easyPieChart({
		easing: 'easeOutBounce',
		trackColor: '#FFFFFF',
		lineWidth: 8,
		barColor: '#FFBA00',
		scaleColor: false,
		onStep: function(from, to, percent) { $j(this.el).find('.percent').text(Math.round(percent)); }
	});
	var chart = window.chart = $j('.chart.skills-yellow').data('easyPieChart');

	$j('.chart.skills-violet').easyPieChart({
		easing: 'easeOutBounce',
		trackColor: '#FFFFFF',
		lineWidth: 8,
		barColor: '#852B99',
		scaleColor: false,
		onStep: function(from, to, percent) { $j(this.el).find('.percent').text(Math.round(percent)); }
	});
	var chart = window.chart = $j('.chart.skills-violet').data('easyPieChart');

	$j('.chart').easyPieChart({
		easing: 'easeOutBounce',
		trackColor: '#FFFFFF',
		lineWidth: 8,
		barColor: '#19B1DD',
		scaleColor: false,
		onStep: function(from, to, percent) { $j(this.el).find('.percent').text(Math.round(percent)); }
	});
	var chart = window.chart = $j('.chart').data('easyPieChart');
});


$j(function() {
	$j(".meter > span").each(function() {
		$j(this)
			.data("origWidth", $j(this).width())
			.width(0)
			.animate({
				width: $j(this).data("origWidth")
			}, 1200);
	});
});