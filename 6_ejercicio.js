
// 6.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.

console.log("Ejercicio: 6.1")
console.log("")

for (let i=0; i<=9; i++)
    console.log(i)

console.log("")

// 6.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo cuando el resto del numero dividido entre 2 sea 0.
console.log("Ejercicio: 6.2")
console.log("")

for (let i=0; i<=9; i++)
    if(i%2 == 0)
        console.log(i)


// 6.3 Crea un bucle para conseguir dormir contando ovejas. Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle y cambia el mensaje en la décima vuelta a '¡Dormido!'.
console.log("")
console.log("Ejercicio: 6.3")
console.log("")

for (let i=1; i<=10; i++)
    if(i < 10){
    console.log('Intentando dormir 🐑 ' + i)
    }
    else {
        console.log('¡Dormido! ' + i)
    }
    
console.log("")