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
    cards.push(new Card("一", "um"));
    cards.push(new Card("二", "dois"));
    cards.push(new Card("三", "três"));
    cards.push(new Card("四", "quatro"));
    cards.push(new Card("五", "cinco"));
    cards.push(new Card("六", "seis"));
    cards.push(new Card("七", "sete"));
    cards.push(new Card("八", "oito"));
    cards.push(new Card("九", "nove"));
    cards.push(new Card("十", "dez"));
    cards.push(new Card("百", "cem"));
    cards.push(new Card("千", "mil"));
    cards.push(new Card("上", "acima"));
    cards.push(new Card("下", "abaixo"));
    cards.push(new Card("左", "esquerda"));
    cards.push(new Card("右", "direita"));
    cards.push(new Card("中", "dentro"));
    cards.push(new Card("大", "largo"));
    cards.push(new Card("小", "pequeno"));
    cards.push(new Card("月", "mês"));
    cards.push(new Card("日", "dia"));
    cards.push(new Card("年", "ano"));
    cards.push(new Card("早", "cedo"));
    cards.push(new Card("木", "árvore"));
    cards.push(new Card("林", "floresta"));
    cards.push(new Card("山", "montanha"));
    cards.push(new Card("川", "rio"));
    cards.push(new Card("土", "solo"));
    cards.push(new Card("空", "céu"));
    cards.push(new Card("田", "campo de arroz"));
    cards.push(new Card("天", "paraído"));
    cards.push(new Card("生", "vida"));
    cards.push(new Card("花", "flor"));
    cards.push(new Card("草", "grama"));
    cards.push(new Card("虫", "inseto"));
    cards.push(new Card("犬", "cachorro"));
    cards.push(new Card("人", "pessoa"));
    cards.push(new Card("名", "nome"));
    cards.push(new Card("女", "feminino"));
    cards.push(new Card("男", "masculino"));
    cards.push(new Card("子", "criança"));
    cards.push(new Card("目", "olho"));
    cards.push(new Card("耳", "ouvido"));
    cards.push(new Card("口", "boca"));
    cards.push(new Card("手", "mão"));
    cards.push(new Card("足", "pé"));
    cards.push(new Card("見", "ver"));
    cards.push(new Card("音", "som"));
    cards.push(new Card("力", "força"));
    cards.push(new Card("気", "espírito"));
    cards.push(new Card("円", "yen"));
    cards.push(new Card("入", "entrar"));
    cards.push(new Card("出", "sair"));
    cards.push(new Card("立", "ficar de pé"));
    cards.push(new Card("休", "descançar"));
    cards.push(new Card("先", "anterior"));
    cards.push(new Card("夕", "noite"));
    cards.push(new Card("本", "livro"));
    cards.push(new Card("文", "texto"));
    cards.push(new Card("字", "letra"));
    cards.push(new Card("学", "estudar"));
    cards.push(new Card("校", "escola"));
    cards.push(new Card("村", "vila"));
    cards.push(new Card("町", "cidade"));
    cards.push(new Card("森", "floresta"));
    cards.push(new Card("正", "correto"));
    cards.push(new Card("水", "água"));
    cards.push(new Card("火", "fogo"));
    cards.push(new Card("玉", "gema"));
    cards.push(new Card("王", "rei"));
    cards.push(new Card("石", "pedra"));
    cards.push(new Card("竹", "bambu"));
    cards.push(new Card("糸", "fio"));
    cards.push(new Card("貝", "concha"));
    cards.push(new Card("車", "veículo"));
    cards.push(new Card("金", "ouro"));
    cards.push(new Card("雨", "chuva"));
    cards.push(new Card("赤", "vermelho"));
    cards.push(new Card("青", "azul"));
    cards.push(new Card("白", "branco"));
    
    

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