(function( $ ) {
 
    $.fn.scrapeslider = function(options ) {
	
	// get slick script
	$.getScript('js/slick.min.js',function(){
		console.log('slick.js loaded');
	});
	
	var settings = $.extend({
            // These are the defaults.
            query: "",
			imagescount: "8"			
        }, options );
	
	// get size for thumbs
		
	var baseelement = this;		
	var twidth = baseelement.width() - 4;
	var theight = baseelement.height() - 4;
	
	var url = "http://ajax.googleapis.com/ajax/services/search/images?v=1.0&rsz="+settings.imagescount+"&q="+settings.query;
	$.ajax({
	  type: 'GET',	  
	  dataType: 'jsonp',
	  url: url,
	  xhrFields: {	
		withCredentials: false
	  },	
	  success: function(data) {		
				
		baseelement.html('');
		baseelement.attr('class','autoplay');
		
		$.each(data.responseData.results, function(key, item) {
			var res = item.url;			
			
			baseelement.append("<div id='slider"+key+"'><img order='"+key+"' src='"+res+"' class='thumb' /> </div>");
			
			$("[order="+key+"]").error(function(){					
					$("[order="+key+"]").remove();
					$("#slider"+key).remove();
					console.log(key + "was removed");										
			});			
		});
		
		baseelement.slick({
		
			autoplay: true,
			slidesToShow: 1,
			slidesToScroll: 1,			
			autoplaySpeed: 2000,
		 });
		 
		 $(".thumb").css("width",twidth);
		 $(".thumb").css("height",theight);
		 $(".thumb").css("visibility","visible");
	  },

	  error: function() {	
		console.log("error");	  
	  }
	});


        return this;
 
    };
 
}( jQuery ));