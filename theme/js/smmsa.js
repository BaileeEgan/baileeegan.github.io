$(document).ready(function () {

const NuclColor = {
	"A": "#A0A0FF",
	"T": "#A0FFA0",
	"G": "#FF7070",
	"C": "#FF8C4B",
	"U": "#B8B8B8"
}

const AAColor = {
	"A": "#C8C8C8",
	"R": "#145AFF",
	"N": "#00DCDC",
	"D": "#E60A0A",
	"C": "#E6E600",
	"E": "#E60A0A",
	"G": "#EBEBEB",
	"Q": "#00DCDC",
	"H": "#8282D2",
	"I": "#0F820F",
	"L": "#0F820F",
	"K": "#145AFF",
	"M": "#E6E600",
	"F": "#3232AA",
	"P": "#DC9682",
	"S": "#FA9600",
	"T": "#FA9600",
	"W": "#B45AB4",
	"Y": "#3232AA",
	"V": "#0F820F"
}

const AAFontColor = {
	"A": "#000000",
	"R": "#FFFFFF",
	"N": "#000000",
	"D": "#FFFFFF",
	"C": "#000000",
	"E": "#FFFFFF",
	"G": "#000000",
	"Q": "#000000",
	"H": "#000000",
	"I": "#FFFFFF",
	"L": "#FFFFFF",
	"K": "#FFFFFF",
	"M": "#000000",
	"F": "#FFFFFF",
	"P": "#000000",
	"S": "#000000",
	"T": "#000000",
	"W": "#FFFFFF",
	"Y": "#FFFFFF",
	"V": "#FFFFFF"
}

const AA_CODES = ["A", "R", "N", "D", "C", "Q", "E", "G", "H", "I", "L", "K", "M", "F", "P", "S", "T", "W", "Y", "V", "B", "J", "Z", "X", "*"]

const PAM70 = [
	[5, -4, -2, -1, -4, -2, -1, 0, -4, -2, -4, -4, -3, -6, 0, 1, 1, -9, -5, -1, -1, -3, -1, -1, -11],
	[-4, 8, -3, -6, -5, 0, -5, -6, 0, -3, -6, 2, -2, -7, -2, -1, -4, 0, -7, -5, -4, -5, -2, -1, -11],
	[-2, -3, 6, 3, -7, -1, 0, -1, 1, -3, -5, 0, -5, -6, -3, 1, 0, -6, -3, -5, 5, -4, -1, -1, -11],
	[-1, -6, 3, 6, -9, 0, 3, -1, -1, -5, -8, -2, -7, -10, -4, -1, -2, -10, -7, -5, 5, -7, 2, -1, -11],
	[-4, -5, -7, -9, 9, -9, -9, -6, -5, -4, -10, -9, -9, -8, -5, -1, -5, -11, -2, -4, -8, -7, -9, -1, -11],
	[-2, 0, -1, 0, -9, 7, 2, -4, 2, -5, -3, -1, -2, -9, -1, -3, -3, -8, -8, -4, -1, -3, 5, -1, -11],
	[-1, -5, 0, 3, -9, 2, 6, -2, -2, -4, -6, -2, -4, -9, -3, -2, -3, -11, -6, -4, 2, -5, 5, -1, -11],
	[0, -6, -1, -1, -6, -4, -2, 6, -6, -6, -7, -5, -6, -7, -3, 0, -3, -10, -9, -3, -1, -7, -3, -1, -11],
	[-4, 0, 1, -1, -5, 2, -2, -6, 8, -6, -4, -3, -6, -4, -2, -3, -4, -5, -1, -4, 0, -4, 1, -1, -11],
	[-2, -3, -3, -5, -4, -5, -4, -6, -6, 7, 1, -4, 1, 0, -5, -4, -1, -9, -4, 3, -4, 4, -4, -1, -11],
	[-4, -6, -5, -8, -10, -3, -6, -7, -4, 1, 6, -5, 2, -1, -5, -6, -4, -4, -4, 0, -6, 5, -4, -1, -11],
	[-4, 2, 0, -2, -9, -1, -2, -5, -3, -4, -5, 6, 0, -9, -4, -2, -1, -7, -7, -6, -1, -5, -2, -1, -11],
	[-3, -2, -5, -7, -9, -2, -4, -6, -6, 1, 2, 0, 10, -2, -5, -3, -2, -8, -7, 0, -6, 2, -3, -1, -11],
	[-6, -7, -6, -10, -8, -9, -9, -7, -4, 0, -1, -9, -2, 8, -7, -4, -6, -2, 4, -5, -7, -1, -9, -1, -11],
	[0, -2, -3, -4, -5, -1, -3, -3, -2, -5, -5, -4, -5, -7, 7, 0, -2, -9, -9, -3, -4, -5, -2, -1, -11],
	[1, -1, 1, -1, -1, -3, -2, 0, -3, -4, -6, -2, -3, -4, 0, 5, 2, -3, -5, -3, 0, -5, -2, -1, -11],
	[1, -4, 0, -2, -5, -3, -3, -3, -4, -1, -4, -1, -2, -6, -2, 2, 6, -8, -4, -1, -1, -3, -3, -1, -11],
	[-9, 0, -6, -10, -11, -8, -11, -10, -5, -9, -4, -7, -8, -2, -9, -3, -8, 13, -3, -10, -7, -5, -10, -1, -11],
	[-5, -7, -3, -7, -2, -8, -6, -9, -1, -4, -4, -7, -7, 4, -9, -5, -4, -3, 9, -5, -4, -4, -7, -1, -11],
	[-1, -5, -5, -5, -4, -4, -4, -3, -4, 3, 0, -6, 0, -5, -3, -3, -1, -10, -5, 6, -5, 1, -4, -1, -11],
	[-1, -4, 5, 5, -8, -1, 2, -1, 0, -4, -6, -1, -6, -7, -4, 0, -1, -7, -4, -5, 5, -5, 1, -1, -11],
	[-3, -5, -4, -7, -7, -3, -5, -7, -4, 4, 5, -5, 2, -1, -5, -5, -3, -5, -4, 1, -5, 5, -4, -1, -11],
	[-1, -2, -1, 2, -9, 5, 5, -3, 1, -4, -4, -2, -3, -9, -2, -2, -3, -10, -7, -4, 1, -4, 5, -1, -11],
	[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -11],
	[-11, -11, -11, -11, -11, -11, -11, -11, -11, -11, -11, -11, -11, -11, -11, -11, -11, -11, -11, -11, -11, -11, -11, -11, 1]
]

const ColorCode = {
	"IDENTITY": 0,
	"MISMATCH": 1,
	"SEARCH": 2
}

var getPAM70 = function (A1, A2) {
	return(PAM70[AA_CODES.indexOf(A2)][AA_CODES.indexOf(A1)])
}

var is_transition = function(n1, n2) {
	var pyrimidines = ["C", "T", "U"]
	var purines = ["A", "G", "I"]
	
	return (pyrimidines.indexOf(n1) != -1 && pyrimidines.indexOf(n2) != -1) || (purines.indexOf(n1) != -1 && purines.indexOf(n2) != -1)
}

var records = []

var numWidth = function (x) {
	return String(x).length
}

var spaces = function (i) {
	var str = ""
	for (var j = 0; j < i; j++) {
		str += "&nbsp;"
	}
	return str
}

var settings = {
	"sequence_type": "nucleotide",
	"out_width": 50,
	"color_by": ColorCode.IDENTITY,
	"show_conservation": true,
	"match_color": "black",
	"match_highlight": "none",
	"mismatch_color": "red",
	"mismatch_highlight": "none",
	"semimatch_color": "brown",
	"semimatch_highlight": "none",
	"reference_id": -1,
	"allow_semimatches": true
	
}

class Record {
  constructor () {
    this.id = ""
    this.seq = []
    this.frame = 1
	this.nuc_pos = []
	this.prot_pos = []
	this.mismatch_status = []
	this.search_status = [] // 2D array
  }
	
	format_seq = function (start, end) {
		end = Math.min(this.seq.length, end)
		var seq = this.seq.slice(start, end)
		var str = ""
		
		if (settings.color_by == ColorCode.IDENTITY) {
			for (var i = 0; i < seq.length; i++) {
				if (seq[i] == "-") {
					str += "<span style = 'color: black; background-color: none;'>" + seq[i] + "</span>"
				}
				else {
					if (settings.sequence_type == "nucleotide") {
						str += "<span style = 'color: " + "black" + "; background-color: " + NuclColor[seq[i]] + "'>" + seq[i] + "</span>"
					}
					else if (settings.sequence_type == "protein") {
						str += "<span style = 'color: " + AAFontColor[seq[i]] + "; background-color: " + AAColor[seq[i]] + "'>" + seq[i] + "</span>"
					}
				}
			}
		}

		else if (settings.color_by == ColorCode.MISMATCH) {
			var mismatches = this.mismatch_status.slice(start, end)
			for (var i = 0; i < seq.length; i++) {
				if (mismatches[i] == 1) {
					str += "<span style = 'color: " + settings.mismatch_color + "; background-color: " + settings.mismatch_highlight + "'>" + seq[i] + "</span>"
				}
				else if (mismatches[i] == 0.5) {
					str += "<span style = 'color: " + settings.semimatch_color + "; background-color: " + settings.semimatch_highlight + "'>" + seq[i] + "</span>"
				}
				else if (seq[i] != "-") {
					str += "<span style = 'color: " + settings.match_color + "; background-color: " + settings.match_highlight + "'>" + seq[i] + "</span>"
				}
				else {
					str += seq[i]
				}
			}
		}

		else if (settings.color_by == ColorCode.SEARCH) {
			var searches = this.search_status.slice(start, end)
			for (var i = 0; i < seq.length; i++) {
				if (seq[i] == "-") {
					str += "<span style = 'color: black; background-color: none;'>" + seq[i] + "</span>"
				}
				else {
					if (searches[i] == 0) {
						str += "<span style = 'color: " + "black" + "; background-color: " + "white" + "'>" + seq[i] + "</span>"
					}
					else {
						str += "<span style = 'color: " + "black" + "; background-color: " + "yellow" + "'>" + seq[i] + "</span>"
					}
				}
			}
		}

		

		return str
		
	}
	
	update_positions = function () {
		var current_pos = 0
		this.nuc_pos = []
		for (var i = 0; i < this.seq.length; i++) {
			if (this.seq[i] != "-") {
				current_pos += 1
			}
			this.nuc_pos.push(current_pos)
		}
	}
	// Adjusts positions depending on gap window
	get_position_range = function(start, end) {
		end = Math.min(this.seq.length - 1, end)
		var start_pos = this.nuc_pos[start]
		var end_pos = this.nuc_pos[end]
		var seq = this.seq.slice(start, end + 1)
		if (/^-+$/.test(seq)) {
			return [" ", " "]
		}
		
		for (var i = start; i < end + 1; i++) {
			if (this.seq[i] != "-") {
				start_pos = this.nuc_pos[i]
				break
			}
		}
		// Trim start_pos at front
		return [start_pos, end_pos]
	}

	search_sequence = function (sequence) {
		this.search_status = []
		var matched_positions = []
		var c = 0
		for (var i = 0; i < this.seq.length; i++) {
			var character = this.seq[i]
			this.search_status.push(0)

			if (character == sequence.charAt(c)) {
				matched_positions.push(i)
			}
			else {
				if (matched_positions.length == sequence.length) {
					for (var n = 0; n < matched_positions.length; n++) {
						this.search_status[matched_positions[n]] = 1
					}
				}
				else {
					matched_positions = []
				}
			}
		}
	}
}

var parse_fasta = function (lines) {
	records = []
	for (var i = 0; i < lines.length; i++) {
  	// Remove blanks at front or commented lines
    lines[i] = lines[i].replace(/^[ \t\r\n]+/g,"").replace(/[ \t\r\n]+$/g, "")
    if (lines[i].length > 0 && lines[i][0] != "#") {
			if (lines[i][0] == ">") {
				records.push(new Record())
				records[records.length - 1].id = lines[i].substring(1)
			}
			else {
				var valid_chars = lines[i].match(/[A-Za-z-]+/)
				if (valid_chars) {
					records[records.length - 1].seq += valid_chars.join("")
				}
			}
    }
  }
	init_records()
}

var init_records = function () {
	for (var i = 0; i < records.length; i++) {
		records[i].update_positions()
		
		if (settings.sequence_type == "nucleotide") {
			if (records[i].seq.match(/[ARNDCQEGHILKMFPSTWYVBJZX*-]+/)[0].length == records[i].seq.length) {
				settings.sequence_type = "protein"
			}
			
		}
		else {
			if (records[i].seq.match(/[ATGCNUIRY-]+/)[0].length == records[i].seq.length) {
				settings.sequence_type = "nucleotide"
			}
			
		}
		
	}
	
	$("input:radio[value='" + settings.sequence_type +"']").prop("checked", true)

	update_mismatch_statuses()
	console.log(records)
	update()
}

var update_mismatch_statuses = function () {
	for (var i = 0; i < records.length; i++) {
		records[i].mismatch_status = []
	}
	
	var max_seq_length = Math.max.apply(Math, records.map(function(o) { return o.seq.length; }))
	for (var n = 1; n < max_seq_length + 1; n++) {
		var mismatch_status = get_mismatches(get_chars_at(n))
		for (var i = 0; i < records.length; i++) {
			records[i].mismatch_status.push(mismatch_status[i])
		}
	}
}


var import_sequences = function () {
	var raw_text = $("#input_aln").val()
	parse_fasta(raw_text.split("\n"))
}

// Note that n is the position in the sequence, not the array
var get_chars_at = function (n) {
	var chars = []
	for (var i = 0; i < records.length; i++) {
		if (n <= records[i].seq.length) {
			chars.push(records[i].seq[n - 1])
		}
		else {
			chars.push("!")
		}
	}
	return chars
}

var get_mismatches = function (char_arr) {
	if (settings.reference_id != -1) {
		var ref_char = char_arr[settings.reference_id]
		var mismatch_status = []
		for (var i = 0; i < char_arr.length; i++) {
			if (char_arr[i] == ref_char || char_arr[i] == "!" || char_arr[i] == "-" || ref_char == "-") {
				mismatch_status.push(0)
			}
			else {
				// Check if character is similar to reference
				if (settings.allow_semimatches && ((settings.sequence_type == "protein" && getPAM70(ref_char, char_arr[i]) > 0) || (settings.sequence_type == "nucleotide " && 
is_transition(ref_char, char_arr[i])))) {
					mismatch_status.push(0.5)
				}
				else {
					mismatch_status.push(1)
				}
			}
		}
		return mismatch_status
	}
	else {
		// Count characters
		var num_chars = 0
		var total_chars = 0
		var chars = {}
		for (var i = 0; i < char_arr.length; i++) {
			if (char_arr[i] != "!" && char_arr[i] !=  "-") {
				if (!chars.hasOwnProperty(char_arr[i])) {
					chars[char_arr[i]] = 0
					num_chars += 1
				}
				chars[char_arr[i]] += 1
				total_chars += 1
			}
		}
		
		// Find the highest frequency
		var top_freq = 0
		for (var c in chars) {
			if (chars[c] > top_freq) {
				top_freq = chars[c]
			}
		}
		// Get characters that have the highest frequencies
		var top_chars = []
		for (var c in chars) {
			if (chars[c] == top_freq) {
				top_chars.push(c)
			}
		}
		
		var no_consensus = false
		if (top_chars.length == num_chars && top_chars.length > 1) {
			top_chars = [top_chars[0]]
			no_consensus = true
		}
		
		// Add top chars if similarity is close to top chars
		var close_chars = []
		if (settings.allow_semimatches) {
			for (var c in chars) {
				if (top_chars.indexOf(c) == -1) {
					var is_similar = true
					for (var i = 0; i < top_chars.length; i++) {
						if ((settings.sequence_type == "protein" && getPAM70(top_chars[i], c) < 0) || (settings.sequence_type == "nucleotide" && 
!is_transition(top_chars[i], c))) {	
							is_similar = false
							break
						}
					}
					if (is_similar) {
						close_chars.push(c)
					}
				}
					
			}
		}
		

		var match_status = []
		// Return array: 0 if matched, 1 if mismatched
		for (var i = 0; i < char_arr.length; i++) {
			var char = char_arr[i]
			
			if ((top_chars.indexOf(char_arr[i]) != -1) || char_arr[i] == "!" || char_arr[i] == "-") {
				match_status.push(0)
			}
			else if (close_chars.indexOf(char_arr[i]) != -1) {
				match_status.push(0.5)
			}
			else {
				match_status.push(1)
			}
		}
		
		return match_status
		}
	
}



var update = function () {
	$("#output_aln").html("")
	var id_length = Math.max.apply(Math, records.map(function(o) { return o.id.length; })) + 1
	var max_seq_length = Math.max.apply(Math, records.map(function(o) { return o.seq.length; }))
	
	var out_width = Math.min(max_seq_length, settings.out_width)
	
	var max_seq_width = numWidth(max_seq_length)
	var max_lines = Math.max.apply(Math, records.map(function(o) { return Math.ceil(o.seq.length / settings.out_width); }))
	
	var current_line = 0

	var match_overview = ""

	var html = ""

	for (var n = 0; n < max_seq_length; n++) {
		var max_mismatch_score = Math.max.apply(Math, records.map(function(o) { return o.mismatch_status[n]; }))
		var num_nongaps = 0

		for (var i = 0; i < records.length; i++) {
			if (records[i].seq[n] != "-") {
				num_nongaps += 1
			}
		}

		if (num_nongaps > 1 && max_mismatch_score == 0) {
			match_overview += "*"
		}
		else if (num_nongaps > 1 && max_mismatch_score < 1) {
			match_overview += "."
		}
		else {
			match_overview += "s"
		}
	}
	
	
	while (current_line < max_lines) {
		for (var i = 0; i < records.length; i++) {
			var record = records[i]
			var line = ""
			var position_range = record.get_position_range(current_line * out_width, (current_line + 1) * settings.out_width - 1)
			// Print id along with appropriate number of spaces
			line += "<span class = 'record_id'>" + record.id + "</span>" + spaces(id_length - record.id.length)
			
			// Print first position with spacing
			line += spaces(3 + max_seq_width - numWidth(position_range[0])) + position_range[0] + spaces(3)
			
			// Print sequence
			line += record.format_seq(current_line * out_width, (current_line + 1) * out_width)
			
			// Print last position with spacing
			line += spaces(out_width - record.seq.slice(current_line * out_width, (current_line + 1) * out_width).length) + spaces(max_seq_width - numWidth(position_range[1]) + 3) + 
position_range[1]
			

			html += line + "<br />"
			//$("#output_aln").html($("#output_aln").html() + line + "<br />")
		}

		// Add break between sequence blocks

		if (settings.show_conservation) {
			html += spaces(id_length) + spaces(3 + max_seq_width) + spaces(3) + match_overview.substr(current_line * settings.out_width, settings.out_width).replace(/s/g, "&nbsp;") 
+ "<br />"
		}
		html += "<br />"
		current_line += 1
	}

	$("#output_aln").html("<span style = 'font-family: Courier New, Courier, monospace;'>" + html + "</span>")
	
	if ($("#detail_view").css("display") != "none") {
		update_detail_view()
	}
}

var update_detail_view = function () {
	$("#detail_view table tbody").html("<tr><td>ID</td><td>Length</td><td># Mismatches</td><td># Semimatches</td></tr>")
	for (var i = 0; i < records.length; i++) {
		var html = "<tr>"
		var num_mismatches = 0
		var num_semimatches = 0
		for (var m = 0; m < records[i].mismatch_status.length; m++) {
			if (records[i].mismatch_status[m] == 1) {
				num_mismatches += 1
			}
			if (records[i].mismatch_status[m] == 0.5) {
				num_semimatches += 1
			}
		}
		html += "<td>" + records[i].id + "</td>"
		html += "<td>" + records[i].seq.replace(/-/g, "").length + "</td>"
		html += "<td>" + num_mismatches + "</td>"
		html += "<td>" + num_semimatches + "</td>"
		html += "</tr>"
		
		$("#detail_view table tbody").append(html)
	}
}






$(document).on("click", ".record_id", function() {
	var i = $(".record_id").index($(this)) % records.length
	var new_id = prompt("New ID", records[i].id)
	
	if (new_id && records[i].id != new_id) {
		records[i].id = new_id
		update()
	}
})



$("#input_aln").change(function () {
	import_sequences()
})

$("input:radio[name='sequence_type']").click(function () {
	if (settings.sequence_type != $(this).val()) {
		settings.sequence_type = $(this).val()
		update_mismatch_statuses()
		update()
	}
})

$("#settings_width").change(function () {
	if (!/^\d+$/.test($("#settings_width").val())) {
		$("#settings_width_label").css("color", "red")
	}
	else {
		$("#settings_width_label").css("color", "black")
		settings.out_width = parseInt($("#settings_width").val())
		$("#output_aln").css("width", Math.max(1000, (settings.out_width + 20) * 12) + "px")
		update()
	}
	
})

$("#settings_color_by").change(function () {
	settings.color_by = ColorCode[$("#settings_color_by option:selected").val()]

	if (settings.color_by == ColorCode.MISMATCH) {
		$("#mismatch_settings").show()
		$("#semimatch_settings").show()
	}
	else {
		$("#mismatch_settings").hide()
		$("#semimatch_settings").hide()
	}

	update()
	
})

$("#settings_show_conservation").change(function () {
	settings.show_conservation = $(this).is(':checked')
	update()
	
})

$(".color_setting").change(function () {
	var id = $(this).attr("id")
	var setting_name = id.replace("settings_", "")
	
	settings[setting_name] = $(this).val()
	
	update()
})

$("#settings_allow_semimatches").change(function () {
	settings.allow_semimatches = $("#settings_allow_semimatches").is(':checked')
	update_mismatch_statuses()
	update()
	if (!settings.allow_semimatches) {
		$("#settings_semimatch_color_label").hide()
		$("#settings_semimatch_color").hide()
		$("#settings_semimatch_highlight_label").hide()
		$("#settings_semimatch_highlight").hide()
	}
	else {
		$("#settings_semimatch_color_label").show()
		$("#settings_semimatch_color").show()
		$("#settings_semimatch_highlight_label").show()
		$("#settings_semimatch_highlight").show()
	}
})

$("#settings_reference_id").change(function () {
	// If value is not an integer
	if (!/^\d+$/.test($("#settings_reference_id").val())) {
		$("#settings_reference_id").val("")
		if (settings.reference_id != -1) {
			settings.reference_id = -1
			update_mismatch_statuses()
			update()
		}
	}
	else {
		var n = parseInt($("#settings_reference_id").val())
		if (n < records.length && n > -1) {
			settings.reference_id = n
			update_mismatch_statuses()
			update()
			
		}
		else {
			$("#settings_reference_id").val("")
			if (settings.reference_id != -1) {
				settings.reference_id = -1
				update_mismatch_statuses()
				update()
			}
		}
	}
})

$("#settings_search").change(function () {

	for (var i = 0; i < records.length; i++) {
		records[i].search_sequence($(this).val())
	}

	update()
})



$(document).on("change", "#upload_file", function (event) {
  var this_id = $(this).parent().attr("id")
  var reader = new FileReader();
  var files = event.target.files; // FileList object
  f = files[0];
  // Closure to capture the file information.
  reader.onload = (function(theFile) {
    return function(e) {
      var lines = e.target.result.split("\n")
      if (lines.length > 0) {
				parse_fasta(lines)
      }
    };
  })(f);
  // Read in the image file as a data URL.
  reader.readAsText(f);
})

$("#detail_view_button").click(function () {
	$("#detail_view").toggle()
	if ($("#detail_view").css("display") != "none") {
		update_detail_view()
	}
})

$("#mismatch_settings").hide()
$("#semimatch_settings").hide()
import_sequences()
})
