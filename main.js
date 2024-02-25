// Convert the following named function to an arrow function:

// function printMessage( message ) {

//          console.log( message )

// }

let hola= "hola como estas"

const saludo = (parametro) => console.log(parametro);

saludo (hola)


/**--------------------- */

// . Convert the following named function to an arrow function:

//             function createMultplication (number1, number2) {

//                       let result = number1 * number2

//                       return result

//              }

const mult = (a,b) => a*b

let resultado=mult(5,1);
console.log(resultado);
resultado=mult(6,12)
console.log(resultado);


/***-*--------------------------------- */

// Starting from an array: const array = [ 1,2,3,4,5,6,7,8,9 ], apply a map 
// to that array and pass as an argument the named function shown in the
//  previous exercise. Show by console the new array obtained.
const array = [ 1,2,3,4,5,6,7,8,9 ]
console.log(array);
let show=array.map(mult)
console.log(show);
/***-------------------- */

// Generate a function that receives an array of beers as 
// a parameter and returns a new array with the 10 most alcoholic beers.


//Que quiero?
// que recorra el array y se quede con los 10 mas grandes


//tengo una funcion que me los ordena
//aplico la funcion que ordena y me genero un map con las 10 primeras


function abvAlto(lista) {
    let newBeers = lista.sort((a,b)=>b.abv - a.abv)

let newBeersTwo =newBeers.slice(0,10)
return newBeersTwo;
}

function abvBajo(lista) {
    let newBeers = lista.sort((a,b)=>a.abv-b.abv)

let newBeersTwo =newBeers.slice(0,10)
return newBeersTwo;
}

let newBeer1 = abvAlto(beers)

console.log(newBeer1);

let newBeer = abvBajo(beers)

console.log(newBeer);
/****---------------------------- */

// Generate a function that receives as parameters
//  an array of beers and a name of a beer. 
//  The function should return the complete object that matches the name entered.

//Recorre el vector, busca el nombre, me devuelve el indice de donde lo encontro 
// funcion me busca o filtra? FIND

//Creo la funcion
function findBeer(list, name1){

        let name2 =" "
        for (const iterator of list) {
        name2 = iterator.name
        if(name2==name1){
            return iterator;
        }
        }    


}

let nombre ="Trashy Blonde"
let buscarCerveza =findBeer(beers,nombre)

console.log(buscarCerveza);
/**------------------------- */

// Generate a function that receives as a parameter an array of beers, 
// a value and that returns the first object whose ibu property is equal
//  to the entered value, in case there is no beer 
// with that ibu that displays a message in the console that says 
// “ There is no beer with an ibu of (value entered).”

function ibu(list, value) {
for (const iterator of list) {
    let aux = Number(iterator.ibu) 
    if (aux==value) {
        return iterator;
    }
    else{
        return `There is no beer with an ibu of ${value}`
    }
}

}

let ibu2 = ibu (beers, 88)
console.log(ibu2);


/***----------------- */

//  Generate a function that receives the name of a
//  beer as a parameter and returns the position in 
//  the array of that beer. If the beer is not found, 
//  a message must be printed through the console saying 
//  “(Name of the beer entered) does not exist.”

function findBeer(lista,beer) {
    const beer2 = lista.find((beer1, index)=>beer1.name==beer)
    if (  beer2 == undefined ) {
        return beer + " does not exist"
    }
    else{
       return beer2.id-1
   }
}

let cerveza = findBeer(beers,"Buzz")
console.log(cerveza);

/***---------------------- */

// Generate a function that receives as a parameter the
// array of beers and an alcohol value. The function must 
// return a new array with the beers that do not exceed 
// the alcohol level. Each element of the new array must 
// be an object that has the properties name, 
// alcohol (abv) and "bitterness" (ibu)

function beerGraduate(list, alcValue) {
    let beer1= list.filter(beer=>{
        if (beer.abv<alcValue) {
            return ({name: beer.name, 
                     abv: beer.abv,
                     ibu: beer.ibu   })
        }       
    }) 
    
    return beer1
}

let beers2 = beerGraduate(beers, 8.5)
console.log(beers2);

/***----------------------------*/

// Generate a function that receives as parameters an array of beers, 
// a property name and a boolean value. It should return a new array 
// with 10 beers ordered by the property entered as the second argument, 
// ascending if the third is true or descending if it is false.

function ascendingOrNot(list, property, bool) {
    //Quiero que recorra la lista y filtre por propiedad
    //que funciones tengo para filtrar?
    //Filter, ya que filtra y me devuelve un array con los elementos que dieron true

    //Llamo al metodo find(), previamente delcarando una variable
    let newArray = list.find(beer=> beer[property]).sort( (a,b)=>{
        if (bool) { //si bool es tru que ordene de menor a mayor
            if(a[property]<b[property]){
                return -1}
        
                else if(a[property]>b[property]){
                return 1}
                
                else {
                return 0
                 }
        
        }
        else{
            if(a[property]<b[property]){
                return 1}
        
                else if(a[property]>b[property]){
                return -1}
                
                else {
                return 0
                 }
        
        }

    })
    return newArray
}

let showTheArray = ascendingOrNot(beers,"abv",true);
console.log(showTheArray);














// Generate a function that receives as a parameter an array of beers and an 
// id of an HTML element where the table will be printed. The function must 
// render (render, draw, paint, fill, etc.) in an html file a table that contains 
// the columns "Name", "ABV", "IBU", and one row for each element of the array. 
// Each row must have the data requested for each of the beers.
