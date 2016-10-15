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
    var name = prompt("Insert your full name");
    var split = name.split(" ");
    var output = document.getElementById("resultDiv");
    output.innerHTML = "";

    // Creates table
    var table = document.createElement("table");
    table.style.border = "2px solid white";
    table.style.borderCollapse = "collapse";
    table.style.width = "80%";

    // Creates row variables
    var tr1 = document.createElement("tr");
    var tr2 = document.createElement("tr");
    var tr3 = document.createElement("tr");

    // Creates first row
    var th = document.createElement("th");
    th.innerHTML = name.toUpperCase();
    th.colSpan = split.length;
    tr1.appendChild(th);
    table.appendChild(tr1);

    // Creates second row
    for (i = 0; i < split.length; i++) {
        var td = document.createElement("td");
        td.style.border = "2px solid white";
        td.innerHTML = split[i];
        tr2.appendChild(td);
    }
    table.appendChild(tr2);

    // Creates third row
    for (i = 0; i < split.length; i++) {
        var td = document.createElement("td");
        td.style.border = "2px solid #e0e0eb";
        td.innerHTML = split[i].length;
        tr3.appendChild(td);
    }
    table.appendChild(tr3);

    output.appendChild(table);
}

function fifth() {
    var name = prompt("Insert name");
    var id = prompt("Insert your id number");
    var value = prompt("Insert payment per hour");
    var hours = prompt("Insert worked hours");
    var kids = prompt("Insert number of kids below 18 yeasr old");

    var output = document.getElementById("resultDiv");
    output.innerHTML = "";

    // Creates table
    var table = document.createElement("table");
    table.style.border = "2px solid #e0e0eb";
    table.style.borderCollapse = "collapse";
    table.style.width = "60%";

    // Creates row variables
    var tr1 = document.createElement("tr");
    var tr2 = document.createElement("tr");
    var tr3 = document.createElement("tr");
    var tr4 = document.createElement("tr");
    var tr5 = document.createElement("tr");
    var tr6 = document.createElement("tr");

    // Creates first row
    var th = document.createElement("th");
    th.innerHTML = name;
    th.colSpan = "2";
    tr1.appendChild(th);
    table.appendChild(tr1);

    // Creates second row
    var td = document.createElement("td");
    td.style.border = "2px solid #e0e0eb";
    td.style.textAlign = "left";
    td.innerHTML = "Matrícula";
    tr2.appendChild(td);
    var td2 = document.createElement("td");
    td2.style.border = "2px solid #e0e0eb";
    td2.innerHTML = id;
    tr2.appendChild(td2);
    table.appendChild(tr2);

    // Creates third row
    var td3 = document.createElement("td");
    td3.style.border = "2px solid #e0e0eb";
    td3.style.textAlign = "left";
    td3.innerHTML = "Valor da hora/trabalho";
    tr3.appendChild(td3);
    var td4 = document.createElement("td");
    td4.style.border = "2px solid #e0e0eb";
    td4.innerHTML = "R$ " + parseFloat(value).toFixed(2);
    tr3.appendChild(td4);
    table.appendChild(tr3);

    // Creates fourth row
    var td5 = document.createElement("td");
    td5.style.border = "2px solid #e0e0eb";
    td5.style.textAlign = "left";
    td5.innerHTML = "Total de horas trabalhadas";
    tr4.appendChild(td5);
    var td6 = document.createElement("td");
    td6.style.border = "2px solid #e0e0eb";
    td6.innerHTML = hours + "h";
    tr4.appendChild(td6);
    table.appendChild(tr4);

    // Creates fifth row
    var td7 = document.createElement("td");
    td7.style.border = "2px solid #e0e0eb";
    td7.style.textAlign = "left";
    td7.innerHTML = "Quantidade de filhos (<18)";
    tr5.appendChild(td7);
    var td8 = document.createElement("td");
    td8.style.border = "2px solid #e0e0eb";
    td8.innerHTML = kids;
    tr5.appendChild(td8);
    table.appendChild(tr5);

    // Creates sixth row
    var td9 = document.createElement("td");
    td9.style.border = "2px solid #e0e0eb";
    td9.style.textAlign = "left";
    td9.innerHTML = "Salário Final";
    tr6.appendChild(td9);
    var td10 = document.createElement("td");
    td10.style.border = "2px solid #e0e0eb";
    var finalValue = (parseFloat(value) * parseFloat(hours) + (0.08 * parseFloat(kids) * parseFloat(value) * parseFloat(hours))).toFixed(2);
    td10.innerHTML = "R$ " + finalValue;
    tr6.appendChild(td10);
    table.appendChild(tr6);

    output.appendChild(table);
}

function sixth() {
    var output = document.getElementById("resultDiv");
    output.innerHTML = "";

    var insertNewImage = confirm("Do you wish to insert a new image?");
    var urlArray = [];
    var heightArray = [];
    var widthArray = [];

    while (insertNewImage == true) {

        var url = prompt("Insert image URL");

        if (urlArray.length >= 1) {
            for (i = 0; i < urlArray.length; i++) {
                if (url == urlArray[i]) {
                    var changeSize = confirm("Do you wish to change size information?");
                    
                    if (changeSize == true) {
                        heightArray[i] = prompt("Insert new image height");
                        widthArray[i] = prompt("Insert new image width");
                    }
                    
                    break;
                }
            }
        }

        urlArray.push(url);
        var imgHeight = prompt("Insert image height");
        var imgWidth = prompt("Insert image width");

        var img = new Image();

        insertNewImage = confirm("Do you wish to insert a new image?");
    }


    

    while (url != 0) {
        
        
        img.onload = function() {
            output.innerHTML += this.width + "<br>";
            output.innerHTML += this.height + "<br>";
        }

        img.src = url;

        output.appendChild(img);
        url = prompt("Insert image URL");
    }
}