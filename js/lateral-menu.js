
		$(function(){
			var contentSections = $('.cd-section'),
				navigationItems = $('#cd-vertical-nav a');			

			updateNavigation();
			$(window).on('scroll', function(){
				updateNavigation();
			});

			//smooth scroll to the section
			navigationItems.on('click', function(event){
		        event.preventDefault();
		        smoothScroll($(this.hash));
		    });
		    //smooth scroll to second section
		    $('.cd-scroll-down').on('click', function(event){
		        event.preventDefault();
		        smoothScroll($(this.hash));
		    });

		    //open-close navigation on touch devices
		    $('.touch .cd-nav-trigger').on('click', function(){
		    	$('.touch #cd-vertical-nav').toggleClass('open');
		  
		    });
		    //close navigation on touch devices when selectin an elemnt from the list
		    $('.touch #cd-vertical-nav a').on('click', function(){
		    	$('.touch #cd-vertical-nav').removeClass('open');
		    });

			function updateNavigation() {
				contentSections.each(function(){
					$this = $(this);
					var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
					if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
						navigationItems.eq(activeSection).addClass('is-selected');
					}else {
						navigationItems.eq(activeSection).removeClass('is-selected');
					}
				});
			}

			function smoothScroll(target) {
		        $('body,html').animate(
		        	{'scrollTop':target.offset().top},
		        	600
		        );
			}


			var sidemenu = $("#cd-vertical-nav");
			$(window).scroll(function(){

				var white_background_4 = sidemenu.find("li:nth-child(4) a");
				var white_background_3 = sidemenu.find("li:nth-child(3) a")
				var white_background_6 = sidemenu.find("li:nth-child(6) a");

				var accent 	= "#eD0286";
				var compl 	= "#ffeb3b";


				if(	white_background_3.hasClass("is-selected") || 
					white_background_4.hasClass("is-selected") ||
					white_background_6.hasClass("is-selected")
					){
					sidemenu.find(".cd-label").css("color","black");
					sidemenu.find(".cd-dot").css("background-color","#333");	
					sidemenu.find("a.is-selected .cd-label").css("color", accent);
					sidemenu.find("a.is-selected .cd-dot").css("background-color", accent);				
				}
				else{
					sidemenu.find(".cd-label").css("color","white");
					sidemenu.find(".cd-dot").css("background-color","white");
					sidemenu.find("a.is-selected .cd-label").css("color", compl);
					sidemenu.find("a.is-selected .cd-dot").css("background-color", compl);
				}
				
			});
		}); 