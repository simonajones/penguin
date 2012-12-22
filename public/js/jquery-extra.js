/*
 * jQuery Extensions.
 */
jQuery.extend({
	
	/*
	 * Post JSON data to the server using a HTTP POST request.
	 * 
	 * See: http://bugs.jquery.com/ticket/197
	 */
	postJSON: function(url, data, success) {
		return jQuery.ajax({
			type: "POST",
			url: url,
			contentType: "application/json",
			data: data,
			success: success
		});
	}

});
