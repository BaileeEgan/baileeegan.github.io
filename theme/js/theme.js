$(document).ready(function(){
	/*$(".highlight pre").each(function(id) {
		var bolded = ["for ", " in "]
		var text = $(".highlight pre:eq(" + id + ")").html()
		var new_text = ""
		
			
		var lines = text.split("\n")
		$.each(lines, function (j, line) {
			$.each(bolded, function(i, str) {	
				line = line.replace(new RegExp(str, "g"), "<b>" + str + "</b>")
			})
			
			if (line.indexOf("`") != -1) {
				var bactic = line.match(/`((?:\\.|[^"\\])*)`/g)
				line = line.replace(bactic, "<i class='code_highlight1'>" + bactic + "</i>")
			}
			
			if (line.indexOf("#") > -1) {
				var comment_index = line.indexOf("#")
				var commented = line.substring(comment_index, line.length)
				line = line.replace(commented, "<i class = 'code_comment'>" + commented + "</i>")
			}
			
			if (j != 0) {
				new_text += "\n"
			}
			new_text += line
		})
			
		
		
		$(".highlight pre:eq(" + id + ")").html(new_text)
	})*/
})