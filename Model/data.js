function init() {

    function clean() {
        mostrar.textContent = "";
    }

    function resetear() {
        mostrar.textContent = "";
        operando = 0;
        operandoa = 0;
        operacion = "";
    }

    function resolver() {
        var res = 0;
        switch (operacion) {
            case "+":
                res = suma1(parseFloat(operando), parseFloat(operandoa));
                break;
            case "-":
                res = resta1(parseFloat(operando), parseFloat(operandoa));
                break;
            case "/":
                res = division1(parseFloat(operando), parseFloat(operandoa));
                break;
            case "*":
                res = multiplicacion1(parseFloat(operando), parseFloat(operandoa));
                break;
        }
        resetear();
        mostrar.textContent = res;
        if (mostrar.textContent >= 1000) {
            window.location = "http://localhost/MVC2/congratulations.html";
        }
    }

    //variables

    var resta = document.getElementById('resta');
    var suma = document.getElementById('suma');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var mostrar = document.getElementById('mostrar');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var cero = document.getElementById('0');
    var limpiar = document.getElementById('limpiar');

    uno.onclick = function(e) {
        mostrar.textContent = mostrar.textContent + "1";
    }
    dos.onclick = function(e) {
        mostrar.textContent = mostrar.textContent + "2";
    }
    tres.onclick = function(e) {
        mostrar.textContent = mostrar.textContent + "3";
    }
    cuatro.onclick = function(e) {
        mostrar.textContent = mostrar.textContent + "4";
    }
    cinco.onclick = function(e) {
        mostrar.textContent = mostrar.textContent + "5";
    }
    seis.onclick = function(e) {
        mostrar.textContent = mostrar.textContent + "6";
    }
    siete.onclick = function(e) {
        mostrar.textContent = mostrar.textContent + "7";
    }
    ocho.onclick = function(e) {
        mostrar.textContent = mostrar.textContent + "8";
    }
    nueve.onclick = function(e) {
        mostrar.textContent = mostrar.textContent + "9";
    }
    cero.onclick = function(e) {
        mostrar.textContent = mostrar.textContent + "0";
    }
    limpiar.onclick = function(e) {
        resetear();
    }
    suma.onclick = function(e) {
        operando = mostrar.textContent;
        operacion = "+"
        clean();
    }
    resta.onclick = function(e) {
        operando = mostrar.textContent;
        operacion = "-"
        clean();
    }
    multiplicacion.onclick = function(e) {
        operando = mostrar.textContent;
        operacion = "*"
        clean();
    }
    division.onclick = function(e) {
        operando = mostrar.textContent;
        operacion = "/"
        clean();
    }
    igual.onclick = function(e) {
        operandoa = mostrar.textContent;
        resolver();
    }


}