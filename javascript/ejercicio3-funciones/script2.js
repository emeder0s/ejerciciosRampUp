//PUNTO 1 - Una función que devuelva el número de cifras de un entero solicitado al usuario
var devuelveCifra = ()  => {
    do{
        var num = parseFloat(window.prompt("Escribe un numero entero: "));
        var validation = Number.isInteger(num);
        if(!validation){
            alert("OJO! Eso NO es un número ENTERO");
        }
    }while(!validation)

    var cont=0;
    //OPCION 1
    // do{
    //     num = Math.floor(num/10);
    //     cont++;
    // }while(num!=0)

    //OPCION 2
     while (num!=0){
        num = Math.floor(num/10);
        cont++;
     }

     if(cont==0){
        cont++;
     }

    //OPCION 3
    // alert("El número "+ num.toString() + " tiene " + num.toString().length + " cifras." );

    alert("El número "+ num + " tiene " + cont + " cifras." );
}

//PUNTO 2 - Una función que muestre al usuario una secuencia de * (se debe construir la cadena de uno en uno), la cantidad de * será solicitada al usuario
var secuencia1 = ()  => {
    do{
        var num = parseFloat(window.prompt("Escribe un numero entero: "));
        var validation = Number.isInteger(num);
        if(!validation){
            alert("OJO! Eso NO es un número ENTERO");
        }
    }while(!validation)
    var sec="";
    for(i=0; i< num; i++){
        sec = sec + '*'
    }
    alert("Secuencia: " + sec)
}

//PUNTO 3 - Una función que permita mostrar la secuencia (se debe construir la cadena de uno en uno: *+_*+_*+_*+_)
var secuencia2 = ()  => {
    var sec="";
    len = 12;

    for(i=0; i < len; i++){
        switch(i%3){
            case 0:
                sec = sec + "*";
                break;
            case 1:
                sec = sec + "+";
                break;
            case 2:
                sec = sec + "_";
                break;
        }
    }

    alert("Secuencia: " + sec)
}

//PUNTO 4 - Una función que permita mostrar un triángulo como el siguiente
var piramide = ()  => {
    var sec="";
    var lin="";
    for(i=0; i < 5; i++){
        lin="";
        for(j=0; j <= i; j++){
            lin = lin + "*";
        }
        lin = lin + "\n";
        sec = sec + lin;
    }
    alert(sec);
}

//PUNTO 5 - Una función que devuelva la diferencia en días entre dos fechas del mismo año (sólo tenemos en cuenta dia y mes) 
var diferenciaDias = ()  => {
    var date1 = window.prompt("Escribe una fecha (DD-MM): ");
    var date2 = window.prompt("Escribe otra fecha (DD-MM): ");
    var months= [31,28,31,30,31,30,31,31,30,31,30,31];
    var diff = 0;
    var days = 0;
    var day1 = parseInt(date1.split("-")[0]);
    var day2 = parseInt(date2.split("-")[0]);
    var month1 = parseInt(date1.split("-")[1]);
    var month2 = parseInt(date2.split("-")[1]);

    if(month1!=month2){  
        if (month1<month2){
            days = (months[month1-1] - day1) +  day2;  
            for(let i=month1; i<month2-1; i++){
                diff = diff + months[i];    
            }
        }else{
            days = (months[month2-1] - day2) +  day1;  
            for(let i=month2; i<month1-1; i++){
                diff = diff + months[i];    
            }
        }
        diff = diff + days;
    }else{
       diff = Math.abs(day1-day2);
    }
    
    alert("Hay una diferencia de "+ diff + " dias");
}