//sin parametros y sin retorno
function sayhello(){
    console.log("Hello");
}

sayhello();

//Con parametros y sin retorno
function sayhelloto(name){
console.log("Hello " + name);
}

sayhelloto("juan");

//Con parametros y con retorno
function sum(num1, num2){
    return num1 + num2;

}

const result =sum(5,7);
console.log(result);

//Con parametros opcionales
function multiply(num1, num2 = 1){
    return num1 *num2;

}

console.log(multiply(5));
console.log(multiply(5,3));
//funciones anónimas
setTimeout(function() {
    console.log("Hola mundo")
}, 1000);

const duplicate = function (num){
    return num * 2;

}
console.log(duplicate(2));



//Arrow funcions 

function sayhello(){
    console.log("Hello");
}

sayhello();

const sayhello2=() =>{
    console.log("Hello");
}

sayhello2();
const sayHelloto2 = name => console.log ("Hello" + name);
sayHelloto2("Peter");

const sum2 = (num1, num2)=> num1 + num2;
const result2 = sum2(5,7);