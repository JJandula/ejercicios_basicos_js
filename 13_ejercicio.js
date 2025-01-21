// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.


const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'

];


  function nameFinder(nameList, search) {
          console.log(nameList)
          console.log("¿Incluye el nombre: " + search +"?", nameList.includes(search))

          if(nameList.indexOf(search) >= 0)
            console.log("Su posicion es: " + nameList.indexOf(search))
          else{
            console.log("No existe en el Array")
          }

  }


nameFinder(names, "Jose")
