$(document).ready(function(){
	$("img").click(function () {
		var src = $(this).attr('src');
		if (src.includes("#preview")) {
			$("body").css("background", "#001A33");
			var full = $('<img id="full_image">'); //Equivalent: $(document.createElement('img'))
			full.attr('src', src.replace("#preview", ""));
			full.appendTo('body');
		}
		
	});
})