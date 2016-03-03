$(function(){ 

	$(".button-collapse").sideNav(); 

	/** Redireccionar al index si se da clic en logo  **/
	$(".nav-wrapper .logo").on("click", function(){ 
		window.location.href = "./index.html";
	});

	$(".navbtns a").hover(function(){
		var menu = $(this).attr("data-activates");
		var width = $(this).parent().width();
		var start = $(this).offset().left; 

		if(menu != undefined) {					
			var drop = $(".dropdown-content#"+menu);
			drop.width(width);
			drop.css("left", start);

			if(drop.css("display") == "block")
				drop.hide();			
			else 
				drop.show();				
		}
	});

	$(".dropdown-content").hover(function(){
		var menu = $(this);
		menu.show();
	}, function(){
		var menu = $(this);
		menu.hide();
	});

});