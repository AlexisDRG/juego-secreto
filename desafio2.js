

function hola(){
    console.log('Hola mundo');
    return;
}

function recibeNombre(nombre) {
    console.log(`Hola, ${nombre}`);
    return;
}

function  dobleNumero(numero) {
    return alert(numero*2);
}

function tresNumeros(numero1, numero2, numero3) {
    return alert((numero1+numero2+numero3)/3);
}

function dosNumeros(numero1,numero2){
    return alert(numero1>numero2 ? numero1 : numero2);
}

function cuadradoNumero(numero) {
    return alert(numero*numero);
}

hola();
recibeNombre('Alexis');
dobleNumero(10);
tresNumeros(5,5,5);
dosNumeros(8,9);
cuadradoNumero(5);