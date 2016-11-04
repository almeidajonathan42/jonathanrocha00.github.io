$(document).ready(function() {
			
    var x = 0;

    function type(string) {
        $("#centralButton").typed({
            strings: ["", string],
            typeSpeed: 50
        });
    }
    function typeFast(string) {
        $("#centralButton").typed({
            strings: ["", string],
            typeSpeed: 10
        });
    }
    function typeSlow(string) {
        $("#centralButton").typed({
            strings: ["", string],
            typeSpeed: 80
        });
    }
    function typeSuperSlow(string) {
        $("#centralButton").typed({
            strings: ["", string],
            typeSpeed: 200
        });
    }


    // typeSuperSlow("Oi");

    $("#text").html("Olá");
    $("#text").fadeOut(0);
    $("#text").fadeIn(3000);
    $("#text").fadeOut(0);
    $("#text").html("Como vai?");
    $("#text").fadeIn(3000);

    $("#centralButton").mouseenter(function() {
        
        switch(x) {
            case 0: 
            // type("Tudo bem?");
            break;
            case 1: typeFast("Você voltou! : )"); break;
            case 2: typeFast("Adoro quando você fica pertinho"); break;
            case 3: typeFast("Você gostou de mim?"); break;
            case 4: type("Isso é um \"sim\"?..."); break;
            case 5: type("Sabe... Eu gostei de você"); break;
            case 6: type("12"); break;
            case 7: type("14"); break;
            case 8: type("16"); break;
            case 9: type("18"); break;
            case 10: type("20"); break;
            case 11: type("22"); break;
            case 12: type("24"); break;
            case 13: type("26"); break;
            case 14: type("28"); break;
            case 15: type("30"); break;
            case 16: type("32"); break;
            case 17: type("34"); break;
            case 18: type("36"); break;
            case 19: type("38"); break;
            case 20: type("40"); break;
            case 21: type("42"); break;
            case 22: type("44"); break;
            case 23: type("46"); break;
            case 24: type("48"); break;
            case 25: type("50"); break;
            case 26: type("52"); break;
            case 27: type("54"); break;
        }

    });
    $("#centralButton").mouseleave(function() {

        switch(x) {
            case 0: type("Hehe"); break;
            case 1: type("Ooow!... Fica aqui..."); break;
            case 2: type("*emoji macaco*"); break;
            case 3: typeSuperSlow("..."); break;
            case 4: typeFast("*emoji macaco*"); break;
            case 5: type("11"); break;
            case 6: type("13"); break;
            case 7: type("15"); break;
            case 8: type("17"); break;
            case 9: type("19"); break;
            case 10: type("21"); break;
            case 11: type("23"); break;
            case 12: type("25"); break;
            case 13: type("27"); break;
            case 14: type("29"); break;
            case 15: type("31"); break;
            case 16: type("33"); break;
            case 17: type("35"); break;
            case 18: type("37"); break;
            case 19: type("39"); break;
            case 20: type("41"); break;
            case 21: type("43"); break;
            case 22: type("45"); break;
            case 23: type("47"); break;
            case 24: type("49"); break;
            case 25: type("51"); break;
            case 26: type("53"); break;
            case 27: type("55"); break;
        }

        x++;
    });
});
