$(document).ready(function() {

    checkHeightWidth();
    window.addEventListener("resize", checkHeightWidth);

    function checkHeightWidth() {
        if ($(window).width() < 750) {
            $("#settings-div").css("border-radius", "2em 2em 0 0");
            $("#settings-div").css("flex-direction", "row");
            $("#settings-div").css("padding", "1em 0");
            $("#input-div").css("height", ($("#settings-div").height() * 2) + "px");
            $("#input").css("border-radius", "0 0 2em 2em");

        }
        else {
            $("#settings-div").css("border-radius", "2em 0 0 2em");
            $("#settings-div").css("flex-direction", "column");
            $("#settings-div").css("padding", "3.5em 0");
            $("#input-div").css("height", $("#interaction-area-container").height() + "px");
            $("#input").css("border-radius", "0 2em 2em 0");
        }
    }

    var usernames = new Array();
    var ran = false;

    function generateOutput2(usernames, arroba) {
        var count2 = 0;

        if (arroba == true) {
            for (j = 0; j < usernames.length - 1; j++) {
                for (k = j + 1; k < usernames.length; k++) {

                    document.getElementById("input").value += " @" + usernames[j] + " @" + usernames[k] + "\n";

                    count2++;
                }
            }
        }
        else if (arroba == false) {
            for (j = 0; j < usernames.length - 1; j++) {
                for (k = j + 1; k < usernames.length; k++) {

                    document.getElementById("input").value += usernames[j] + " " + usernames[k] + "\n";

                    count2++;
                }
            }
        }

        document.getElementById("input").value += "\n\nCombinações geradas: " + count2;
    }

    function generateOutput3(usernames, arroba) {
        var count = 0;

        if (arroba == true) {
            for (i = 0; i < usernames.length - 2; i++) {
                for (j = i + 1; j < usernames.length - 1; j++) {
                    for (k = j + 1; k < usernames.length; k++) {

                        document.getElementById("input").value += "@" + usernames[i] + " @" + usernames[j] + " @" + usernames[k] + "\n";

                        count++;
                    }
                }
            }
        }
        else if (arroba == false) {
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

    function generateOutput4(usernames, arroba) {
        var count4 = 0;

        if (arroba == true) {
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
        else if (arroba == false) {
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

    function addUsername() {

        if (document.getElementById("input").value != "" && ran == false) {
            usernames = document.getElementById("input").value.split(" ");

            // Deletes empty units in the array
            for (i = 0; i < usernames.length; i++) {
                if (usernames[i] == "") {
                    usernames.splice(i, 1);
                }
            }

            var arroba;
            if (document.getElementById("yes").checked) {
                arroba = true;
            }
            else if (document.getElementById("no").checked) {
                arroba = false;
            }

            document.getElementById("input").value = "";

            if (document.getElementById("two").checked) {
                generateOutput2(usernames, arroba);
            }
            else if (document.getElementById("three").checked) {
                generateOutput3(usernames, arroba);
            }
            else if (document.getElementById("four").checked) {
                generateOutput4(usernames, arroba);
            }

            ran = true;
        }
    }

});