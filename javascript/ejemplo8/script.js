var foo = 0;
switch (foo) {
case -1:
    console.log('1 negativo');
    break;
case 0: // foo es 0, por lo tanto se cumple la condición y se ejecutara el siguiente bloque
    console.log(0);
    break;
    // NOTA: el "break" olvidado debería estar aquí
case 1: // No hay sentencia "break" en el 'case 0:', por lo tanto este caso también será ejecutado
    console.log(1);
    break; // Al encontrar un "break", no será ejecutado el 'case 2:'
case 2:
    console.log(2);
    break;
default:
    console.log('default');
}