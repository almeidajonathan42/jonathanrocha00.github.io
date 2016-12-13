$(document).ready(function() {

    checkHeightWidth();
    window.addEventListener("resize", checkHeightWidth);

    function checkHeightWidth() {
        if ($(window).width() <= 750) {
            $("#interaction-area").css("width", "90%");
            $("#settings-div").css("border-radius", "2em 2em 0 0");
            $("#settings-div").css("flex-direction", "row");
            $("#settings-div").css("padding", "1em 0");
            $("#input-div").css("height", ($("#settings-div").height() * 2) + "px");
            $("#input").css("border-radius", "0 0 2em 2em");

        }
        else {
            $("#interaction-area").css("width", "53em");
            $("#settings-div").css("border-radius", "2em 0 0 2em");
            $("#settings-div").css("flex-direction", "column");
            $("#settings-div").css("padding", "3em 0");
            $("#input-div").css("height", $("#interaction-area-container").height() + "px");
            $("#input").css("border-radius", "0 2em 2em 0");
        }
    }

    $("#run").click(function() {

        var usernames = [];
        var at = true;

        if ($("#input").val() != "") {
            usernames = $("#input").val().split(" ");

            // Deletes empty units in the array
            for (i = usernames.length; i > 0; i--) {
                if (usernames[i] == "") {
                    usernames.splice(i, 1);
                }
            }

            // Cleans text area
            $("#input").val("");

            // Sets at variable
            if (document.getElementById("yes").checked) {
                at = true;
            }
            else if (document.getElementById("no").checked) {
                at = false;
            }


            if (document.getElementById("two").checked) {
                generateOutput2(usernames, at);
            }
            else if (document.getElementById("three").checked) {
                generateOutput3(usernames, at);
            }
            else if (document.getElementById("four").checked) {
                generateOutput4(usernames, at);
            }
        }
    });

    
    $("#restart").click(function() {
        // Cleans text area
        $("#input").val("");
    });

    function generateOutput2(usernames, at) {
        var count2 = 0;

        if (at == true) {
            for (j = 0; j < usernames.length - 1; j++) {
                for (k = j + 1; k < usernames.length; k++) {

                    document.getElementById("input").value += " @" + usernames[j] + " @" + usernames[k] + "\n";

                    count2++;
                }
            }
        }
        else if (at == false) {
            for (j = 0; j < usernames.length - 1; j++) {
                for (k = j + 1; k < usernames.length; k++) {

                    document.getElementById("input").value += usernames[j] + " " + usernames[k] + "\n";

                    count2++;
                }
            }
        }

        document.getElementById("input").value += "\n\nCombinações geradas: " + count2;
    }

    function generateOutput3(usernames, at) {
        var count = 0;

        if (at == true) {
            for (i = 0; i < usernames.length - 2; i++) {
                for (j = i + 1; j < usernames.length - 1; j++) {
                    for (k = j + 1; k < usernames.length; k++) {

                        document.getElementById("input").value += "@" + usernames[i] + " @" + usernames[j] + " @" + usernames[k] + "\n";

                        count++;
                    }
                }
            }
        }
        else if (at == false) {
            for (i = 0; i < usernames.length - 2; i++) {
                for (j = i + 1; j < usernames.length - 1; j++) {
                    for (k = j + 1; k < usernames.length; k++) {

                        document.getElementById("input").value += usernames[i] + " " + usernames[j] + " " + usernames[k] + "\n";

                        count++;
                    }
                }
            }
        }
        
        document.getElementById("input").value += "\n\nCombinações geradas: " + count;
    }

    function generateOutput4(usernames, at) {
        var count4 = 0;

        if (at == true) {
            for (i = 0; i < usernames.length - 3; i++) {
                for (j = i + 1; j < usernames.length - 2; j++) {
                    for (k = j + 1; k < usernames.length - 1; k++) {
                        for (l = k + 1; l < usernames.length; l++) {

                            document.getElementById("input").value += "@" + usernames[i] + " @" + usernames[j] + " @" + usernames[k] + " @" + usernames[l] + "\n";

                            count4++;

                        }
                    }
                }
            }
        }
        else if (at == false) {
            for (i = 0; i < usernames.length - 3; i++) {
                for (j = i + 1; j < usernames.length - 2; j++) {
                    for (k = j + 1; k < usernames.length - 1; k++) {
                        for (l = k + 1; l < usernames.length; l++) {

                            document.getElementById("input").value += usernames[i] + " " + usernames[j] + " " + usernames[k] + " " + usernames[l] + "\n";

                            count4++;

                        }
                    }
                }
            }
        }
        
        document.getElementById("input").value += "\n\nCombinações geradas: " + count4;
    }

});