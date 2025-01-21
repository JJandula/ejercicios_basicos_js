// Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne , numberTwo) {
    if(numberOne < numberTwo){
        console.log("el numero mas grande es el dos: " + numberTwo)
    }
    else {
        console.log("el numero mas grande es el uno: " + numberOne)
    }
  }

  greaterNumber(100,10)