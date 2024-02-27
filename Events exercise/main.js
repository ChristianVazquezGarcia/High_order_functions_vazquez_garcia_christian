let container = document.getElementById("cont")
let square = document.getElementById("square")
let button = document.getElementById("btn")
let h2 = document.querySelector("h2")
let input = document.getElementById("input")



//button.addEventListener("click", ()=> square.classList.add("bg-red-700"))

/*let contador=0;
button.addEventListener("click",()=>{
    
    if(contador== 0){
        square.classList.add("bg-blue-200")
        
        h2.innerHTML="Light blue"
    }
    else{
        square.classList.add("bg-red-200")
        h2.innerHTML="Pink"
    }
    contador++;
    
}
)
*/


input.addEventListener("keyup",(e)=>{
    //busco el valor que va a almacenar el evento Escribir
    
    h2.innerHTML=e.target.value
    //El e.target me lleva al input y al poner e.target.value tengo 
    //el valor de lo que esta dentro del input, osea lo que escribo
    //Eso se lo asigno al h2 y para que aparezca en el sitio, le pongo innerHTML

})

button.addEventListener("click", ()=>{
    //Al hacer click dejo un string vacio en el h2
    h2.innerHTML=" "
    //Al hacer click la caja del value la dejo con un string vacio
    input.value=" "

})



// function ChangeColor(element) {
//     element.classList.add("bg-black")
// }
