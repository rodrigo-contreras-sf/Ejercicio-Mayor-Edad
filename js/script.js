let usuarios = []

for(i = 0; i < 3 ; i++){
    usuarios[i] = parseInt(prompt("Ingrese edad del usuario " + (i+1)))
    if(isNaN(usuarios[i]) || usuarios[i] < 1){
        alert("Ingrese un numero positivo, sin decimales...")
        i --;
    }
}

function elementoMayor(edades) {
    return Math.max.apply(null, edades);
}

let indiceMayorEdad = usuarios.indexOf(elementoMayor(usuarios)) + 1
let mayorEdad =  elementoMayor(usuarios)

alert("El usuario N° " + indiceMayorEdad + " es el de mayor edad => " + mayorEdad + " años")

