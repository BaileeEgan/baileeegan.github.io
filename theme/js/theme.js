$(document).ready(function(){


	$("img").click(function () {
		var src = $(this).attr('src');
		var id = $(this).attr('id');
		if ((src.includes("#preview") || src.includes("#figure")) && $("#modal-box").css("display") == "none") {
			$("#modal-box").css("display", "block")
			$("#modal-box").find("img").attr("src", src.split("#")[0])
			$(".modal-caption").css("width", $("#modal-box img").css("width"))

			if (typeof $(this).data('caption') !== 'undefined') {
				$(".modal-caption").show()
				$(".modal-caption").html($(this).data('caption'))
			}
			else {
				$(".modal-caption").hide()
			}

		}
	});

	$(".modal-close").click(function () {
		$("#modal-box").css("display", "none")
	})

	$('.img_container').hover(function() {
		$(this).find('div:first').animate({ "opacity": "+=1.0" }, "fast" )
	}, function() {
		$(this).find('div:first').animate({ "opacity": "-=1.0" }, "slow" )
	})

	$('.image_link').hover(function() {
		$(this).animate({ "opacity": "-=0.25" }, "fast" );
	}, function() {
		$(this).animate({ "opacity": "+=0.25" }, "slow" );
	});


	$('.expand-section').each(function (elem) {
		var text = $(this).text()
		var next = $(this).next()
		if (next.css("display") == "none") {
			$(this).html("+ " + text)
			$(this).css("border-bottom", "none")
		}
		else {
			$(this).html("- " + text)
			$(this).css("border-bottom", "1px solid black")
		}
	})

	$('.expand-section').click(function() {
		var text = $(this).text()
		var next = $(this).next()
		if (next.css("display") == "none") {

			$(this).css("border-bottom", "1px solid black")
			$(this).html("- " + text.substr(2))
		}
		else {

			$(this).css("border-bottom", "none")
			$(this).html("+ " + text.substr(2))
		}
		next.toggle("fast")
	})

})