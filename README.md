# scrapercarousel
Images carousel that search images for you

The Carousel is based on slick.js plugin.

Simply define a container (any DOM element, like div) and call the silder.

the plugin require jquery 1.11.2 or higher.

There are 2 parameters: "query", the search term, and "imagescount", any number from 1-8. Both are lowercase and optional.

Be sure to give the dOM element width and height.

Let me know if it jelps you, or if there are any bug.

# Demo Code

<html>
    <head>
           <link rel="stylesheet" type="text/css" href="css/style.css" />		  
    </head>
    <body>
    <div id="results">	
    </div>		
			
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>   
	<script src="js/scrapercarousel.js"></script>
	<script>
		$("#results").scrapeslider(
		{
			query: "sky",
			imagescount: "8"			
		});
	</script>
    </body>
</html>

