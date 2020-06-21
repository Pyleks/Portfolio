$(document).ready(function(){
    if($(window).scrollTop() >= 50) {
        $('body').addClass('change_color')

    }
    $('#about_id').hide();
    $("#about_id").slideDown('slow');


    $(function() {
        let documentEl = $(document),
            fadeElem = $('.fade-scroll');
        documentEl.on('scroll', function() {
            var currScrollPos = documentEl.scrollTop();
            fadeElem.each(function() {
                var $this = $(this),
                    elemOffsetTop = $this.offset().top;
                if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/200);
            });
        });
    });

    // let children = document.querySelectorAll('#myCarousel #cyberSecurity');
    // if("active carousel-item" in children[0]) {
    //     console.log("lol")
    // } else {
    //     console.log("Alright child")
    // }


    $("#back_top").on("click",function() {
        $(".navigation_icons").css("opacity", "1");
        $(".down_button").css("opacity", "1");
    });


    $(window).on("scroll resize load", () => {
        if($(window).scrollTop() >= 90) {
            $(".toggle-scroll").addClass('hide_content');
        }
        else {
            $(".toggle-scroll").removeClass('hide_content');
        }


        if($(window).scrollTop() >= 500 && $(window).scrollTop() <= 1400) {
            console.log("WTF");
            $("#about").addClass("active-section");
            // $(".animation-wrap").removeClass('vClass');
            // $(".animation-wrap").addClass('animated animatedFadeInUp fadeInUp');

        }
        else {
            $("#about").removeClass("active-section");
        }

        if($(window).scrollTop() >= 1401 && $(window).scrollTop() <= 2000) {
            console.log("WTF");
            $("#portfolio").addClass("active-section");
            // $(".animation-image").removeClass('vClass');
            // $(".animation-image").addClass('animated animatedFadeInUp fadeInUp')
        }
        else {
            $("#portfolio").removeClass("active-section");
        }

        if($(window).scrollTop() >= 2001 && $(window).scrollTop() <= 2900) {
            console.log("WTF");
            $("#skills").addClass("active-section");
            $(".right-skills").removeClass('vClass');
            // $(".right-skills").addClass('animated animatedFadeInUp fadeLeftFirst')
            // $(".mid-skills").removeClass('vClass');
            // $(".mid-skills").addClass('delay-coder animatedFadeInUp fadeLeftFirst')
            // $(".left-skills").removeClass('vClass');
            // $(".left-skills").addClass('delay-designer animatedFadeInUp fadeLeftFirst')
        }
        else {
            $("#skills").removeClass("active-section");
        }

        if($(window).scrollTop() >= 2901) {
            console.log("WTF");
            $("#contact").addClass("active-section");
            $(".hire-animation").removeClass('vClass');
            // $(".hire-animation").addClass('animated animatedFadeInUp fadeInUp')

        }
        else {
            $("#contact").removeClass("active-section");
        }

    });



    $(function() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('body').addClass('change_color')
                $('#about').removeClass('hide_content')
                $('#portfolio').removeClass('hide_content')
                $('#github').removeClass('hide_content')
                $('#contact').removeClass('hide_content')
                $('#skills').removeClass('hide_content')
                $('#cv').removeClass('hide_content')

                $('.back_top_button').removeClass('hidden_button')
                $('.navbar-brand').addClass('font_black')
                $('.navbar').addClass('box_shadow')
                $(".navbar-toggler").removeClass('hide_nav');
            }
            if ($(this).scrollTop() < 50) {
                $('body').removeClass('change_color')
                $('#about').addClass('hide_content')
                $('#portfolio').addClass('hide_content')
                $('#github').addClass('hide_content')
                $('#contact').addClass('hide_content')
                $('#skills').addClass('hide_content')
                $('#cv').addClass('hide_content')
                $('.back_top_button').addClass('hidden_button')
                $('.navbar-brand').removeClass('font_black')
                $('.navigation_icons').css('opacity' ,1 )
                $('.navbar').removeClass('box_shadow')
                $(".navbar-toggler").addClass('hide_nav')


            }
            if ($(this).scrollTop() > 100) {
                $('.navbar').removeClass('navbar-inner')


            }
            if ($(this).scrollTop() < 100) {
                $('.navbar').addClass('navbar-inner')

            }


        });
    });

    $(".frame_button").on("click",function() {
        $(".lang_container").addClass("hide_content");
        $(".frame_container").removeClass("hide_content")

        $(".lang_button").removeClass("active_button");
        $(this).addClass("active_button")

    });

    $(".lang_button").on("click",function() {
        $(".lang_container").removeClass("hide_content");
        $(".frame_container").addClass("hide_content");

        $(".frame_button").removeClass("active_button");
        $(this).addClass("active_button")

    });


    let myUrl = window.location.href;
    let rawUrl = myUrl.slice(22, 27);
    if(rawUrl === "about") {
        $("#about").removeClass("hide_content");
        $("#portfolio").removeClass("hide_content");
        $("#github").removeClass("hide_content");
        $("#contact").removeClass("hide_content");
        $("#about").addClass("active_nav");
        $("#about").removeClass("under_line_trans");
        

    }});
    // console.log(rawUrl)
    // http://127.0.0.1:5000/about




let a = 10
let b = 20
let result;

if (a < b) {
    result = "a is smaller"
} else {
    result = "a is not smaller"
}

let stringTrue = "true";
let booleanTrue = true;

console.log(result)
