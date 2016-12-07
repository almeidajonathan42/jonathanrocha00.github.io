$(document).ready(function() {

    // Handles scrolling animation
    $(".scroll").click(function(event){
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top - (3 * 16) // 3 * 16 = 3em
        }, 500);
    });

    // Handles screen size variations
    checkHeightWidth();
    window.addEventListener("resize", checkHeightWidth);
    
    // Handles closing and opening left-menu
    $("#left-menu-button-icon").click(function() {
        $("#left-menu").css("width", ($(window).width() / 100 * 45) + "px");
        $("#left-menu").css("max-width", "400px");
    });
    $("#left-menu-close").click(function() {
        
        $("#left-menu").css("width", "0px");
        $("#left-menu").css("min-width", "0px");
    });

    function checkHeightWidth() {
        if ($(window).width() < 750) {
            // Hides top-menu
            $("#top-menu").fadeOut("slow");

            // Shows left-menu-button
            $("#left-menu-button-icon").fadeIn("slow");

            // Sets rows to be displayed as blocks (back to default)
            $(".row").css("display", "block");

        }
        else {
            // Shows top-menu
            $("#top-menu").fadeIn("slow");

            // Hides left-menu-button and left-menu
            $("#left-menu-button-icon").fadeOut("slow");
            $("#left-menu").css("width", "0px");
            $("#left-menu").css("min-width", "0px");

            // Sets rows to be displayed as flexboxes (centering col divs)
            $(".row").css("display", "flex");
        }
    }

});