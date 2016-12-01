$(document).ready(function() {

    // Card class
    function Card(kanji, meaning) {

    // CONSTRUCTOR
        this.kanji = kanji;
        this.meaning = meaning;
        this.hits = 0;

    // METHODS
        this.addHits = function() {
            if (hits < 4) {
                this.hits++;
            }
            else {
                this.hits = 5;
            }
        }

        this.removeHits = function() {
            if (hits > 0) {
                this.hits--;
            }
            else {
                this.hits = 0;
            }
        }

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


    $("#button").click(function() {
        // Generates random number between zero and cards.length
        var randomCard = Math.floor(Math.random() * cards.length);

        // Prints random kanji
        $("#text").html(cards[randomCard].kanji + "<br>");
        
        var answers = [];

        answers.push(cards[randomCard].meaning);

        var n = 0
        while (n < 3) {
            var randomWrongAnswer = Math.floor(Math.random() * wrongAnswers.length);

            if (aswers.indexOf(wrongAnswers[randomWrongAnswer]) == false) {
                answers.push(wrongAnswers[randomWrongAnswer]);
                n++;
            }
        }

        answers = answers.shuffleArray();

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