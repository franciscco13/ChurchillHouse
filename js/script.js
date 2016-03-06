$(function(){ 

	$(".button-collapse").sideNav(); 


 

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

	//Ocultar boton de llamadas
	// //Firefox
	//  
	var phone = $(".phone_button");
	var auxup = 0;
	var auxdown = 0;

	$('body').bind('DOMMouseScroll', function(e){
	    if(e.originalEvent.detail > 0) {
	    	
	    	auxup = (auxup < 5) ? auxup+1 : 0; 
	        //scroll down
	        if(auxup == 5)
	        	phone.addClass('disappear');
	    }else {
	    	auxdown = (auxdown < 5) ? auxdown+1 : 0; 
	        //scroll up
	        if(auxdown == 5)
	        	phone.removeClass('disappear');
	    }
	    //prevent page fom scrolling
	    return false;
	});

	 //IE, Opera, Safari
	$('body').bind('mousewheel', function(e){
	    if(e.originalEvent.wheelDelta < 0) {
	       //scroll down
	        phone.addClass('disappear');
	    }else {
	        //scroll up
	       phone.removeClass('disappear');
	    }
 
	});

	var dropbtn = $(".droplist"); 

	dropbtn.click(function(){
		$(this).parent().find("li").toggle(400);
		$(this).parent().find(".ico-up").toggle(400);
		$(this).parent().find(".ico-down").toggle(400);
	});


	//Abrir visor
	var visor = $(".image-viewer");
	var ws = {};
	var imgs = {};
 	var origs = {};
 	var parent;
	var main_img = visor.find(".main-image");


	$(".imgpreview").on("click", function(){

		//Toggle visor
		visor.fadeIn(300);
		//Almacena la imagen en una variable
		var img = $(this).find("img");
		//Almacena la url de la imagen en una variable
		var src = img.attr("src"); 
		//consigue la altura y ancho original de la imagen
		origs["w"] = imgs["w"] = img[0].width;
		origs["h"] = imgs["h"] = img[0].height; 
		//Establece un tamaño adecuado de la imagen dentro del visor
		normalize();		 
		//Coloca la imagen como fondo del visor.
		main_img.css("background-image", "url("+src+")");
		
		//Consigue cuando miniaturas se mostrarán
		parent = $(this).parent();
		var thumbs = parent.find(".imgpreview");
		thumbs.each(function(index, value){
			var img_thumb = $(this).find("img").attr('src');
			visor.find(".previews").append('<div class="thumb z-depth-1" src = "'+img_thumb+'"></div>');
		});

		$(".thumb").each(function(){
			var thumb_src = $(this).attr('src');
			if(thumb_src == src )
				$(this).addClass("active");
			$(this).css("background-image", "url("+thumb_src+")");
		});
	});


	//Cambiar de imagen al dar clic a thumbnail
	$("body").on("click", ".thumb", function(){
		var src = $(this).attr("src");		
		$(".thumb").removeClass("active");
		$(this).addClass("active");
		main_img.css("background-image", "url("+src+")");

		var length = parent.find(".imgpreview").each(function(index, value){
			var img_thumb = $(this).find("img"); 
			if(src == img_thumb.attr('src')){ 
				//consigue la altura y ancho original de la imagen 
				origs["w"] = imgs["w"] = img_thumb[0].width;
				origs["h"] = imgs["h"] = img_thumb[0].height; 		
				setTimeout(function(){
					normalize()
				}, 200);				 
				
			}
		});
	});


	function close_viewer(){
		main_img.width(0);
		main_img.height(0);
		visor.fadeOut(200);
		visor.find(".previews .thumb").remove();
	}

	visor.find(".close").click(function(){
		close_viewer();
	});

	$(window).resize(function(){
		normalize();
	});

	var pixels = 0;
	$(window).scroll(function(){
		pixels ++;
		if(visor.css("display") == "block" &&  pixels > 30){
			close_viewer();
			pixels = 0;
		}  
	});

	//Evita que la imagen ocupe mas espacio del que hay en pantalla
	function normalize(){ 
		ws["w"] = $(window).width();
		ws["h"] = $(window).height() - 120;
		imgs["w"] = origs.w;
		imgs["h"] = origs.h;

		while(imgs.w > ws.w || imgs.h > ws.h){
			imgs.w *= 0.9;
			imgs.h *= 0.9;	}

		main_img.width(imgs.w);
		main_img.height(imgs.h);
	}




 
});