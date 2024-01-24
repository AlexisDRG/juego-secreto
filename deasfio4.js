let generica = [];
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
let suma = 0;

lenguajesDeProgramacion.push('Java','Ruby','GoLang');

function mostrarLsita() {
    for(i = 0; i<lenguajesDeProgramacion.length; i++){
        console.log(lenguajesDeProgramacion[i]);
    }
}

function mostrarLsitaInverso() {
    for(i = lenguajesDeProgramacion.length; i>=0; i--){
        console.log(lenguajesDeProgramacion[i]);
    }
}

function promedio() {
    generica.push(13,545,467,45,5,10,205);
    for(i = 0; i<generica.length;i++){
        suma = suma +generica[i];
    }
    console.log(suma/generica.length);
    
}
promedio();
mostrarLsita();
mostrarLsitaInverso();