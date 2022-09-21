//Ejercicio 1
function nurmeroMenor(){
    var num1 = window.prompt("Inserta el primer numero entero: ");
    var num2 = window.prompt("Inserta el segundo numero entero: ");
    var num3 = window.prompt("Inserta el tercer numero entero: ");
    
    if (num1 == num2 && num1 == num3){
        alert("Los tres numeros son IGUALES!!!");
    }else{
        if (num1==num2){
            if(num1 < num3){
                alert(num1 + " se repite 2 veces. Pero "+ num1 +" es menor que "+ num3);
            }else{
                alert(num1 + " se repite 2 veces. Pero "+ num3 +" es menor que "+ num1);
            }              
        }else if(num1 == num3){            
            if(num1 < num2){
                alert(num1 + " se repite 2 veces. Pero "+ num1 +" es menor que "+ num2);
            }else{
                alert(num1 + " se repite 2 veces. Pero "+ num2 +" es menor que "+ num1); 
            }
        }else if(num2 == num3){            
            if(num2 < num1){
                alert(num2 + " se repite 2 veces. Pero "+ num2 +" es menor que "+ num1);
            }else{
                alert(num2 + " se repite 2 veces. Pero "+ num1 +" es menor que "+ num2); 
            }
        }else{
            if (num1 < num2){
                if(num1 < num3){
                    alert("El numero menor es " + num1);
                }else{
                    alert("El numero menor es " + num3);
                }
            }else{
                if(num2 < num3){
                    alert("El numero menor es " + num2);
                }else{
                    alert("El numero menor es " + num3);
                }
            }
        }
    }    
}

//Ejercicio 2 - FUNCION DE EXPRESION
var buscarletra = function (){
    var sentence = window.prompt("Inserta una frase: ");
    var letter = window.prompt("Inserta una letra: ");
    let cont = 0;
    for(let i=0; i<sentence.length; i++){
        if (sentence[i] == letter){
            cont++;
        }
    }
    
    alert("La letra "+ letter + " aparece " + cont + " veces" );
}

//Ejercicio 3 
function restarOSumar(){
    var num1 = window.prompt("Inserta el primer numero real: ");
    var num2 = window.prompt("Inserta el segundo numero real: ");
    var operacion = window.prompt("Para restar pulse R y para sumar pulse S: ");
    switch(operacion){
        case "R":
           alert(parseFloat(num1) - parseFloat(num2));
            break;
        case "S":
            alert(parseFloat(num1) - parseFloat(num2));
            break;
        default:
            alert("Operación incorrecta");
    }
}   

//Ejercicio 4 
function checkPassword(){
    var userName = "emederos";
    var password = "1234";
    var user, psswd; 
    var validation;
    var tries = 3;

    do{
        user = window.prompt("Usuario: ");
        psswd = window.prompt("Contraseña: ");
        validation =  user==userName && psswd == password;
        alert(validation);
        if (!validation){
            tries--;
            alert(tries);
        }
        if (!validation){
            tries--;
             alert("Login Incorrecto. Te quedan "+ tries +  " intento/s");
            
        }else{
            alert("Login correcto, ESTAS DENTRO!");
        }

    }while(!validation || tries > 0)
}

//Ejercicio 5 - FUNCION FLECHA
var selectLetter = () => {
    var letter = window.prompt("Escribe una letra: ");
    switch(letter){
        case "a":
            alert(7);
            break;
        case "b":
            alert(9);
            break;
        case "c":
            alert(101);
            break;
        default:
            alert("Letra errónea");
    }
}

//Ejercicio 6 - FUNCION EJECUTADA INMEDIATAMENTE
( function () {
    var array = ["anacardo","zanahoria", "banana", "manzana"];
    var aux;
    alert("Array desordenado: " +  array);
    // Algoritmo de burbuja
    for (let i = 0; i < (array.length - 1); i++) {
        for (let j = 0; j < (array.length - i - 1); j++) {
            if (array[j] > array[j + 1]) {
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    alert("Array ordenado: " + array);
})();


