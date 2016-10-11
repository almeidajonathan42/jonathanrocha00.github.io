function first() {
    var array = [];
    var result = 0;

    for (i = 0; i < 5; i++) {
        x = prompt("Insert a number");
        array.push(x);
    }

    for (i = 0; i < array.length; i++) {
        result += parseFloat(array[i]);
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}

function second() {
    var array = [];
    var result = 0;
    var x = 1;

    while (x != 0) {
        x = prompt("Insert a number");
        array.push(x);
    }

    for (i = 0; i < array.length; i++) {
        result += parseFloat(array[i]);
    }

    result = parseFloat(result) / parseFloat(array.length - 1);

    document.getElementById("result").innerHTML = "Result: " + result;
}

function third() {
    var array1 = [];
    var array2 = [];
    var array3 = [];
    var x = 1;

    while (x != 0) {
        x = prompt("Insert numbers in the first array");
        array1.push(x);
    }

    for (i = 0; i < array1.length - 1; i++) {
        x = prompt("Insert numbers in the second array");
        array2.push(x);

        array3.push(parseFloat(array1[i]) + parseFloat(array2[i]));
    }

    // Prints first array
     document.getElementById("result").innerHTML = "First array: ";
     for (i = 0; i < array1.length - 1; i++) {
         document.getElementById("result").innerHTML += array1[i] + " ";
     }
     document.getElementById("result").innerHTML += "<br>";

    // Prints second array
     document.getElementById("result").innerHTML += "Second array: ";
     for (i = 0; i < array1.length - 1; i++) {
         document.getElementById("result").innerHTML += array2[i] + " ";
     }
     document.getElementById("result").innerHTML += "<br>";

    // Prints final array
     document.getElementById("result").innerHTML += "Final array: ";
     for (i = 0; i < array1.length - 1; i++) {
         document.getElementById("result").innerHTML += array3[i] + " ";
     }
    
}

function fourth() {
    

}

function fifth() {
    

}

function sixth() {
    

}