$(document).ready(function() {

    // Card class
        function Card(kanji, meaning) {

    // CONSTRUCTOR
        this.kanji = kanji;
        this.meaning = meaning;
        this.hits = 0;
    }


    $(".level-button").click(function() {
        $(this).toggleClass("dark-red");
    });

    checkWidth();
    window.addEventListener("resize", checkWidth);

    // Loads kanjis into the system
    var cards = [];
    loadLevel1(cards);

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

    // Creates array of answers
    var answers = [];    

    pickNewCard();

    $(".buttons").click(function(){

        // Checks if the chosen answer was correct
        if($(this).html() == cards[randomCard].meaning) {

            // CORRECT
            cards[randomCard].hits += 1;

            setInterval(function(){
                $(this).toggleClass("correctBlue");
            }, 100)

            $(this).animate({ opacity: "1" }, "fast", pickNewCard);

        }
        else {

            // INCORRECT
            cards[randomCard].hits -= 1;

            $(this).animate({ background: "red" }, "fast");
            $(this).animate({ background: "white" }, "fast");
            $(this).animate({ background: "red" }, "fast");
            $(this).animate({ background: "white" }, "fast", pickNewCard);

        }

        // pickNewCard();

    });

    function pickNewCard() {
        // Generates random number between zero and cards.length
        randomCard = Math.floor(Math.random() * cards.length);

        // Prints random kanji
        $("#kanji").html(cards[randomCard].kanji + "<br>");
        
        // Prints circles that represent hits
        if (cards[randomCard].hits <= 0) {
            $("#hit1").removeClass("blue").addClass("grey");
            $("#hit2").removeClass("blue").addClass("grey");
            $("#hit3").removeClass("blue").addClass("grey");
            $("#hit4").removeClass("blue").addClass("grey");
            $("#hit5").removeClass("blue").addClass("grey");
        }
        else if (cards[randomCard].hits == 1) {
            $("#hit1").removeClass("grey").addClass("blue");
            $("#hit2").removeClass("blue").addClass("grey");
            $("#hit3").removeClass("blue").addClass("grey");
            $("#hit4").removeClass("blue").addClass("grey");
            $("#hit5").removeClass("blue").addClass("grey");
        }
        else if (cards[randomCard].hits == 2) {
            $("#hit1").removeClass("grey").addClass("blue");
            $("#hit2").removeClass("grey").addClass("blue");
            $("#hit3").removeClass("blue").addClass("grey");
            $("#hit4").removeClass("blue").addClass("grey");
            $("#hit5").removeClass("blue").addClass("grey");
        }
        else if (cards[randomCard].hits == 3) {
            $("#hit1").removeClass("grey").addClass("blue");
            $("#hit2").removeClass("grey").addClass("blue");
            $("#hit3").removeClass("grey").addClass("blue");
            $("#hit4").removeClass("blue").addClass("grey");
            $("#hit5").removeClass("blue").addClass("grey");
        }
        else if (cards[randomCard].hits == 4) {
            $("#hit1").removeClass("grey").addClass("blue");
            $("#hit2").removeClass("grey").addClass("blue");
            $("#hit3").removeClass("grey").addClass("blue");
            $("#hit4").removeClass("grey").addClass("blue");
            $("#hit5").removeClass("blue").addClass("grey");
        }
        else if (cards[randomCard].hits == 5) {
            $("#hit1").removeClass("grey").addClass("blue");
            $("#hit2").removeClass("grey").addClass("blue");
            $("#hit3").removeClass("grey").addClass("blue");
            $("#hit4").removeClass("grey").addClass("blue");
            $("#hit5").removeClass("grey").addClass("blue");
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
    }

    function checkWidth() {
        if ($(window).width() <= 800) {
            $("#top-bar").css("opacity", "0");
            $("#flashcard-container").css("width", "90%");
            $("#flashcard-container").css("flex-direction", "column");
            $("#hits-container").css("flex-direction", "row");
            $("#kanji").css("font-size", "30vw");
            $("#answers-container").css("width", "90%");
            // $("#flashcard-container").css("min-width", $("#kanji"));

        }
        else {
            $("#top-bar").css("opacity", "1");
            $("#flashcard-container").css("width", "55em");
            $("#flashcard-container").css("flex-direction", "row");
            $("#hits-container").css("flex-direction", "column");
            $("#kanji").css("font-size", "15em");
            $("#answers-container").css("width", "40%");
        }
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function loadLevel1(array) {
        array.push(new Card("一", "um"));
        array.push(new Card("二", "dois"));
        array.push(new Card("三", "três"));
        // array.push(new Card("四", "quatro"));
        // array.push(new Card("五", "cinco"));
        // array.push(new Card("六", "seis"));
        // array.push(new Card("七", "sete"));
        // array.push(new Card("八", "oito"));
        // array.push(new Card("九", "nove"));
        // array.push(new Card("十", "dez"));
        // array.push(new Card("百", "cem"));
        // array.push(new Card("千", "mil"));
        // array.push(new Card("上", "acima"));
        // array.push(new Card("下", "abaixo"));
        // array.push(new Card("左", "esquerda"));
        // array.push(new Card("右", "direita"));
        // array.push(new Card("中", "dentro"));
        // array.push(new Card("大", "largo"));
        // array.push(new Card("小", "pequeno"));
        // array.push(new Card("月", "mês"));
        // array.push(new Card("日", "dia"));
        // array.push(new Card("年", "ano"));
        // array.push(new Card("早", "cedo"));
        // array.push(new Card("木", "árvore"));
        // array.push(new Card("林", "floresta"));
        // array.push(new Card("山", "montanha"));
        // array.push(new Card("川", "rio"));
        // array.push(new Card("土", "solo"));
        // array.push(new Card("空", "céu"));
        // array.push(new Card("田", "campo de arroz"));
        // array.push(new Card("天", "paraíso"));
        // array.push(new Card("生", "vida"));
        // array.push(new Card("花", "flor"));
        // array.push(new Card("草", "grama"));
        // array.push(new Card("虫", "inseto"));
        // array.push(new Card("犬", "cachorro"));
        // array.push(new Card("人", "pessoa"));
        // array.push(new Card("名", "nome"));
        // array.push(new Card("女", "feminino"));
        // array.push(new Card("男", "masculino"));
        // array.push(new Card("子", "criança"));
        // array.push(new Card("目", "olho"));
        // array.push(new Card("耳", "ouvido"));
        // array.push(new Card("口", "boca"));
        // array.push(new Card("手", "mão"));
        // array.push(new Card("足", "pé"));
        // array.push(new Card("見", "ver"));
        // array.push(new Card("音", "som"));
        // array.push(new Card("力", "força"));
        // array.push(new Card("気", "espírito"));
        // array.push(new Card("円", "yen"));
        // array.push(new Card("入", "entrar"));
        // array.push(new Card("出", "sair"));
        // array.push(new Card("立", "ficar de pé"));
        // array.push(new Card("休", "descançar"));
        // array.push(new Card("先", "anterior"));
        // array.push(new Card("夕", "noite"));
        // array.push(new Card("本", "livro"));
        // array.push(new Card("文", "texto"));
        // array.push(new Card("字", "letra"));
        // array.push(new Card("学", "estudar"));
        // array.push(new Card("校", "escola"));
        // array.push(new Card("村", "vila"));
        // array.push(new Card("町", "cidade"));
        // array.push(new Card("森", "floresta"));
        // array.push(new Card("正", "correto"));
        // array.push(new Card("水", "água"));
        // array.push(new Card("火", "fogo"));
        // array.push(new Card("玉", "gema"));
        // array.push(new Card("王", "rei"));
        // array.push(new Card("石", "pedra"));
        // array.push(new Card("竹", "bambu"));
        // array.push(new Card("糸", "fio"));
        // array.push(new Card("貝", "concha"));
        // array.push(new Card("車", "veículo"));
        // array.push(new Card("金", "ouro"));
        // array.push(new Card("雨", "chuva"));
        // array.push(new Card("赤", "vermelho"));
        // array.push(new Card("青", "azul"));
        // array.push(new Card("白", "branco"));
    }

});