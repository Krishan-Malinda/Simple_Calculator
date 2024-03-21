/* var numbers = document.getElementsByClassName('num');
var operators = document.getElementsByClassName('opr');

var num = new Array(2);

var opr='';

for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        num[i] = this.getAttribute("value");
        alert(num[i]);
        document.getElementById("display").innerHTML=value;
    });
}
 */


function outerFunction() {
    const outerVariable = "I'm from outer function";
    /* function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from inner function
    } */
    return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Outputs: I'm from outer function








/*  document.addEventListener("DOMContentLoaded", function() {
    var numElements = document.getElementsByClassName("num");
     for (var i = 0; i < numElements.length; i++) {
        numElements[i].addEventListener("click", function() {
            var value = this.getAttribute("value");
            document.getElementById("display").innerHTML=value;
        });
    }  
});

document.getElementById('acBtn').onclick = function(){
    document.getElementById("display").innerHTML='';
} */


/* for (var i = 0; i < numElements.length; i++) {
    numElements[i].addEventListener("click", function() {
        var value = this.getAttribute("value");
        document.getElementById("display").innerHTML=value;
    });
} */
/* document.addEventListener("DOMContentLoaded", function() {
    var numElements = document.getElementsByClassName("num");
    for (var i = 0; i < numElements.length; i++) {
        numElements[i].addEventListener("click", function() {
            var x = this.getAttribute("value");
            document.getElementById("display").innerHTML= x;
        });
    }
}); */
