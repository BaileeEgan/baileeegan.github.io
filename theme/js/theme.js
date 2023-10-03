$(document).ready(function(){
	$("img").click(function () {
		var src = $(this).attr('src');
		var id = $(this).attr('id');
		if (src.includes("#preview") && $("#modal-box").css("display") == "none") {
			$("#modal-box").css("display", "block")
			$("#modal-box").find("img").attr("src", src.replace("#preview", ""))
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
		$(this).animate({ "opacity": "+=1.0" }, "fast" )
	}, function() {
		$(this).animate({ "opacity": "-=0.25" }, "fast" )
	})
})