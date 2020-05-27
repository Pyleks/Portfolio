$(document).ready(function(){
    $('#about_id').hide();
    $("#about_id").slideDown('slow');
    // let scroll_pos = 0;
    // $(document).scroll(function() {
    //     scroll_pos = $(this).scrollTop();
    //     if(scroll_pos > 500) {
    //         $("body").css('background-color', '#E6E8E6');
    //     } else {
    //         $("body").css('background-color', '#1E1E24');
    //     }
    // });

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

    // $(window).scroll( function(){
    //
    //     /* Check the location of each desired element */
    //     $('.hideme').each( function(i){
    //
    //         var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
    //
    //         /* If the object is completely visible in the window, fade it it */
    //         if( bottom_of_window > bottom_of_object ){
    //
    //             $(this).animate({'opacity':'1'},100);
    //             // $(this).animate({'opacity': '1'}, 100).slideDown('slow');
    //             $('.btn').removeClass('hidden_button')
    //
    //         }
    //
    //     });
    //
    // });

    $("#back_top").on("click",function() {
        $(".navigation_icons").css("opacity", "1");
        $(".down_button").css("opacity", "1");
    });

    /*-- Back to top btn --*/

    // let btn = $('#back-to-top');
    //
    // $(window).scroll(() => {
    //     if ($(window).scrollTop() > 300) {
    //         btn.addClass('show');
    //     } else {
    //         btn.removeClass('show');
    //     }
    // });

    $(window).on("scroll resize load", () => {
        if($(window).scrollTop() >= 200) {
            $(".toggle-scroll").addClass('hide_content');
        }
        else {
            $(".toggle-scroll").removeClass('hide_content');
        }


        if($(window).scrollTop() >= 500 && $(window).scrollTop() <= 1400) {
            console.log("WTF");
            $("#about").addClass("active-section");
            $(".animation-wrap").removeClass('vClass');
            $(".animation-wrap").addClass('animated animatedFadeInUp fadeInUp');

        }
        else {
            $("#about").removeClass("active-section");
        }

        if($(window).scrollTop() >= 1401 && $(window).scrollTop() <= 2000) {
            console.log("WTF");
            $("#portfolio").addClass("active-section");
            $(".animation-image").removeClass('vClass');
            $(".animation-image").addClass('animated animatedFadeInUp fadeInUp')
        }
        else {
            $("#portfolio").removeClass("active-section");
        }

        if($(window).scrollTop() >= 2001 && $(window).scrollTop() <= 2900) {
            console.log("WTF");
            $("#skills").addClass("active-section");
            $(".right-skills").removeClass('vClass');
            $(".right-skills").addClass('animated animatedFadeInUp fadeLeftFirst')
            $(".mid-skills").removeClass('vClass');
            $(".mid-skills").addClass('delay-coder animatedFadeInUp fadeLeftFirst')
            $(".left-skills").removeClass('vClass');
            $(".left-skills").addClass('delay-designer animatedFadeInUp fadeLeftFirst')
        }
        else {
            $("#skills").removeClass("active-section");
        }

        if($(window).scrollTop() >= 2901) {
            console.log("WTF");
            $("#contact").addClass("active-section");
            $(".hire-animation").removeClass('vClass');
            $(".hire-animation").addClass('animated animatedFadeInUp fadeInUp')

        }
        else {
            $("#contact").removeClass("active-section");
        }

        // expand navbar once at top

        // navlink top offset variables
        // var top = $("#top").offset().top - 200;
        // var about = $("#about-me");
        // var portfolio = $("#portfolio");
        // var skills = $("#skills").offset().top - 200;
        // var contact = $("#contact").offset().top - 500;

        // update navlinks when sections in viewport
        // if ($(window).scrollTop() >= top && $(window).scrollTop() <= about) {
        //     $("#navlink-top").addClass("active-section");
        // } else {
        //     $("#navlink-top").removeClass("active-section");
        // }
        // if ($(window).scrollTop() >= about && $(window).scrollTop() <= portfolio ) {
        //     $(".about-nav-link").addClass("active-section");
        //
        //     // $("#about h2 span").addClass("heading-span-active");
        // } else {
        //     $(".about-nav-link").removeClass("active-section");
        //     // $("#about h2 span").removeClass("heading-span-active");
        // }
    //     if ($(window).scrollTop() >= portfolio && $(window).scrollTop() <= skills) {
    //         $("#navlink-portfolio").addClass("active-section");
    //         $("#portfolio h2 span").addClass("heading-span-active");
    //     } else {
    //         $("#navlink-portfolio").removeClass("active-section");
    //         $("#portfolio h2 span").removeClass("heading-span-active");
    //     }
    //     if ($(window).scrollTop() >= skills && $(window).scrollTop() <= contact) {
    //         $("#navlink-skills").addClass("active-section");
    //         $("#skills h2 span").addClass("heading-span-active");
    //     } else {
    //         $("#navlink-skills").removeClass("active-section");
    //         $("#skills h2 span").removeClass("heading-span-active");
    //     }
    //     if ($(window).scrollTop() >= contact) {
    //         $("#navlink-contact").addClass("active-section");
    //         $("#contact h2 span").addClass("heading-span-active");
    //     } else {
    //         $("#navlink-contact").removeClass("active-section");
    //         $("#contact h2 span").removeClass("heading-span-active");
    //     }
    });





// $(document).scroll(function() {
    //     var alpha = Math.min(0.5 + 0.4 * $(this).scrollTop() / 210, 0.9);
    //     // var channel = Math.round(alpha * 100);
    //     $("body").css('background-color', 'rgb(243, 252, 240)');
    // });

    // const [red, green, blue] = [243, 252, 240];
    // const section1 = document.querySelector('body');
    //
    // window.addEventListener('scroll', () => {
    //     const y = 1 + (window.scrollY || window.pageYOffset) / 150;
    //     const [r, g, b] = [red/y, green/y, blue/y].map(Math.round);
    //     section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    // });

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
    // $("a").mouseover(function() {
    //     $(this).addClass("bg_green_dark")
    // });
    // $("a").mouseleave(function() {
    //     $(this).removeClass("bg_green_dark")
    // });

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
