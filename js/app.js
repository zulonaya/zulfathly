$(function() {	
    var header1 = $("[data-id=header1]");
    var header2 = $("[data-id=header2]");
    var icon 	= $("[data-id=icon-visible]");

     setInterval(function () { $('body').addClass('loaded'); }, 3000);


    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 300 && scroll < 700) {
        	console.log("more than 200");
            header1.removeClass('header-visible');
            header2.addClass("header-visible");
          	icon.removeClass("icon-visible");
        }
        else if (scroll >= 700) {
        	console.log("more than 500");
        	header1.removeClass('header-visible');
        	header2.addClass("header-visible");
            icon.addClass("icon-visible");

        } else {
        	console.log("less than 200");
            header2.removeClass('header-visible');
            header1.addClass("header-visible");
            icon.removeClass("icon-visible");
        }
    });
});