$(document).ready(function(){
    // start inzilzation
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    // end inzilzation
    // start links
    $(".links li").on("click",function(){
        var sectionOffset = $($(this).data('link')).offset().top;        
        $('body,html').animate({
            scrollTop:sectionOffset,
        })
        $(this).addClass('active_link').siblings("li").removeClass("active_link")
    })
    $(window).on("scroll",function(){
        var scrollValue = $(this).scrollTop();
        $('.part-section').each(function(){
            if($(this).offset().top <= (scrollValue + 100)){
                $(`.links [data-link = '#${$(this).attr("id")}']`).addClass("active_link").siblings("li").removeClass("active_link")
            }
            
        })
    })
    // end links
    // start main_header
    $(".main_header").height($(window).height())
    // end_main_header
    // start first_navbar
    $(window).on("scroll",function(){
        if($(this).scrollTop() > 100){
            $(".first_navbar").addClass("active_navbar");
            $(".go_to_top").fadeIn(500);
        }else{
            $(".first_navbar").removeClass("active_navbar");
            $(".go_to_top").fadeOut(500);
        }
    })
    // end first_navbar
    // start popup-image
    $(".popup-image").on("click", function(){
        $(".image-popup").fadeIn().css("display", "flex").find("img").attr("src",$(this).find('img').attr('src'));
    })
    $(".image-popup").on("click", function(){
        $(this).fadeOut()
    })
    // end popup-image
    // start vedio_icon
    $(".vedio_icon").on("click", function(){
        $(".video_popup").fadeIn().css("display","flex");
    })
    $(".video_popup").on("click",function(){
        $(this).fadeOut()      
    })
    $(".video_popup .iframe_container iframe").on("click",function(e){
        e.stopPropagation();
    })
    // end vedio_icon
    // start go_to_top
    $(".go_to_top").on("click",function(){
        $("html, body").animate({
            scrollTop:0,
        },1000)
    })
    // end go_to_top
    $(window).load(function(){
      $(".preLoader").fadeOut(); 
    })
})