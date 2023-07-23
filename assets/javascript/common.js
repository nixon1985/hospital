function loadRemotePage2(actionlink){
    
	// $('#inner-content').load(actionlink);
	
	
	
    /* $.ajax({
        url: actionlink,
        context: document.html
      }).done(function(result) {

        // var inject = document.createElement('script');
        // inject.src = 'assets/vendor/pace-progress/pace.min.js';
		// Sinject.src = 'assets/javascript/theme.min.js';
        // document.getElementsByTagName('head')[0].appendChild(inject);

        $("#inner-content").html(result);
      }); */
	  
	  
	  $.ajax({
        type: "POST",
        url: actionlink,
        data: { },
		async: false,
		cache: false,
		contentType: false,
		processData: false,
        success: function(data){
            $('#inner-content').html(data);
        }
    });
}