$(document).on("ready", function () {


    if ($(window).innerWidth() < 767) {
        $('#fullpage').fullpage({
            autoScrolling: false,
            fitToSection: false,
            afterLoad: function (anchorLink, index) {

                if (index == 1) {
                    $(".homePg .nav-bar,.aboutPg .nav-bar").removeClass("whiteNav");
                }
                if (index == 2) {
                    $(".homePg .nav-bar,.aboutPg .nav-bar").addClass("whiteNav");
                }
            }
        });


        $('button').bind('click', function () {
            $(".cd-nav-trigger").show();
        });
    }



    var square = $(".menu-toggle .square");
    var logoPath = $(".logo-path");
    var logoColor = $(".section:first-child").attr("data-logo-color");
    var menuColor = $(".section:first-child").attr("data-menu-color");
    square.css("border-color", menuColor);
    logoPath.css("fill", logoColor);

    $(".menu-toggle").click(function () {
        $(this).toggleClass("menu-toggle-hover");
        $(".cd-nav").toggleClass("slideIn")
        $(".logo").toggleClass("white");
        $(".workPg .content").toggleClass("hidden");

        $(".nav-bar,.work-nav-bar").toggleClass("transparent-m");
    });

    


});