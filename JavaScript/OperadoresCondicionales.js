//Operadores condicionales

let edad = 29
let masDe18
//Esto es un if
if (edad < 18){
    console.log("No drink")
    masDe18 = false
} else {
    console.log("Salud")
    masDe18 = true
}

console.log(masDe18)
//Operador ternario ---- if pero chiquito
masDe18 = (edad > 18) ? true : false

console.log(masDe18)