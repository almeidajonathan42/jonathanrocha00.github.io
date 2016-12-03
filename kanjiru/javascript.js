$(document).ready(function() {

    // Card class
        function Card(kanji, meaning) {

    // CONSTRUCTOR
        this.kanji = kanji;
        this.meaning = meaning;
        this.hits = 0;
    }

    // Loads kanjis into the system
    var cards = [];
    cards.push(new Card("心", "coração"));
    cards.push(new Card("一", "um"));
    cards.push(new Card("市", "cidade"));
    cards.push(new Card("雲", "nuvem"));
    cards.push(new Card("悲", "triste"));

    // Loads wrong answers into the system
    var wrongAnswers = [];
    for (i = 0; i < cards.length; i++) {
        wrongAnswers.push(cards[i].meaning);
    }
    wrongAnswers.push("lágrima");
    wrongAnswers.push("morte");
    wrongAnswers.push("céu");
    wrongAnswers.push("dor");
    wrongAnswers.push("alegria");
    wrongAnswers.push("vida");
    wrongAnswers.push("terra");
    wrongAnswers.push("papel");

    // Script's first run

    // Generates random number between zero and cards.length
    var randomCard = Math.floor(Math.random() * cards.length);

    // Prints random kanji
    $("#kanji").html(cards[randomCard].kanji + "<br>");
    
    // Creates array of answers
    var answers = [];

    // Adds correct answer to the answer array
    answers.push(cards[randomCard].meaning);

    // Adds distinct wrong answers to the answer array
    var n = 0
    while (n < 3) {
        var randomWrongAnswer = Math.floor(Math.random() * wrongAnswers.length);

        if (answers.indexOf(wrongAnswers[randomWrongAnswer]) == -1) {
            answers.push(wrongAnswers[randomWrongAnswer]);
            n++;
        }
    }

    // Shuffles answer array
    answers = shuffleArray(answers);

    // Prints answer array into the buttons
    $("#button1").html(answers[0]);
    $("#button2").html(answers[1]);
    $("#button3").html(answers[2]);
    $("#button4").html(answers[3]);


    $(".buttons").click(function(){

        // Checks if the chosen answer was correct
        if($(this).html() == cards[randomCard].meaning) {
            cards[randomCard].hits += 1;

            $("#result").css("background", "cornflowerblue");
            $("#result").html("certo");
            $("#result-container").animate({
                opacity: "1.0"
            }, 200);
            $("#result-container").animate({
                opacity: "0.0"
            }, 1500);
        }
        else {
            cards[randomCard].hits -= 1;

            $("#result").css("background", "red");
            $("#result").html("errado");
            $("#result-container").animate({
                opacity: "1.0"
            }, 200);
            $("#result-container").animate({
                opacity: "0.0"
            }, 1500);
        }

        // Generates random number between zero and cards.length
        randomCard = Math.floor(Math.random() * cards.length);

        // Prints random kanji
        $("#kanji").html(cards[randomCard].kanji + "<br>");
        
        // Prints circles that represent hits
        if (cards[randomCard].hits <= 0) {
            $("#hits").html("");
        }
        else if (cards[randomCard].hits == 1) {
            $("#hits").html("°");
        }
        else if (cards[randomCard].hits == 2) {
            $("#hits").html("°°");
        }
        else if (cards[randomCard].hits == 3) {
            $("#hits").html("°°°");
        }
        else if (cards[randomCard].hits == 4) {
            $("#hits").html("°°°°");
        }
        else if (cards[randomCard].hits == 5) {
            $("#hits").html("°°°°°");
        }
        else if (cards[randomCard].hits > 5) {
            













            // TO DO: delete element from array














        }

        // Creates array of answers
        answers = [];

        // Adds correct answer to the answer array
        answers.push(cards[randomCard].meaning);

        // Adds distinct wrong answers to the answer array
        n = 0
        while (n < 3) {
            var randomWrongAnswer = Math.floor(Math.random() * wrongAnswers.length);

            if (answers.indexOf(wrongAnswers[randomWrongAnswer]) == -1) {
                answers.push(wrongAnswers[randomWrongAnswer]);
                n++;
            }
        }

        // Shuffles answer array
        answers = shuffleArray(answers);

        // Prints answer array into the buttons
        $("#button1").html(answers[0]);
        $("#button2").html(answers[1]);
        $("#button3").html(answers[2]);
        $("#button4").html(answers[3]);

    });

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }


});