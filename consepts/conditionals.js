// if else if else 

let age = 18;
if(age >= 18){
    console.log("Es Mayor de Edad!");
}else if ()

/**
*expr ? true: false;
 */
(age >= 18)
    ? console.log('Si es mayor')
    : console.log('No es mayor')

defaultName = username? username: 'Invitado';
console.log(defaultName);

//switch case
const day = Math.floor(Math.random() * 7)
switch(day){

    case 0:
    console.log("Es domingo");
    break;

    case 1:
    console.log("Es lunes ");
    break;

    case 2:
    console.log("Es martes");
    break;

    case 3:
    console.log("Es miercoles");
    break;

    case 4:
    console.log("Es jueves");
    break;
    case 5:
    console.log("Es viernes");
    break;
    case 6:
    console.log("Es sabado");
    break;

    default:
        console.log("Dia no valido");
}