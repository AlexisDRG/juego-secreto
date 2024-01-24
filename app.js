let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;


/*Una función es un encapsulamiento de
una acción */
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    /*El triple '===' se usar para
    comparar tanto el dato como el tipo de dato*/ 
    if (numeroSecreto===numeroUsuario) {
        asignarTextoElemento('p',`Acertaste en ${intentos} ${intentos > 1 ? 'intentos' : 'intento'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');   
    } else {
        //El usuario no acertó
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El número es menor');
        }else {
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //Si ya sorteamos todos los números
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else{
        //Si numero generado está incluido en la lista
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        } else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;

        }
    }
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto actualizado');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Generar mensaje de intervalo de números
    condicionesIniciales();
    //Generar el número aleatorio
    
    //Inicializar el número de intentos
    
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    

}

condicionesIniciales();