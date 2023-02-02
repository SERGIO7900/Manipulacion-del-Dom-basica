let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")

let btn = document.querySelector("#btnCalcular")

let resultado = document.querySelector(".resultado")

let form = document.querySelector("#form")


 form.addEventListener("submit", calculo)

function calculo(e){

    e.preventDefault();
    console.log(e);

    let operacion = input1.value + input2.value

    console.log(operacion);

    resultado.innerHTML = "El Resultado es: " + operacion
    
} 





/* Ejemplo */

let nombre = document.querySelector("#nombre");

nombre.addEventListener("blur", comprobarCambio)


function comprobarCambio(){
    if (nombre.value === "sergio") {
        alert("Nombre correcto Puedes entrar")
    }
    else{
        alert("usuario incorrectpo")
    }
}

document.addEventListener("keypress", function(e) {
    console.log(e);

    if (e.key === "a") {
        alert("presionaste la a")
    }
})















/* let prr1 = document.querySelector("#parrafo1")

let prr2 = document.querySelector(".parrafo2")

let alerta = () => {
    alert("hola");
}

prr1.addEventListener("click", alerta )


prr1.innerText = "cambiando el parrafo desde JS"
 */

/* Cambiar los atributos de la etiqueta desde js */

/* get attribute(atributo) permite ver el nombre de atributo que tiene la etiqueta en html. ej: */

/* console.log(prr2.getAttribute("class"));
 */
/* set atribute permite cambiar el atributo de la etiqueta.

setAttribute("atributo a cambiar", "nuevo nombre"
EJ:)*/

/* console.log(prr2.setAttribute("class", "segundo-parrafo"));
 */


/* ejemplo set atribute y classList.add  */

/* let btn = document.querySelector(".btn")
let btn2 = document.querySelector(".btn2")
let caja = document.querySelector(".caja")
  */
/* function cambiarColor() {
    caja.setAttribute("class","blue")
}

btn.addEventListener("click", cambiarColor) */

/* para no repetir el codigo en cada clase podemos agg una clase aparte con classList Ej */

/* function cambiarColor() {
    caja.classList.add("blue")
}

function cambiarColorOriginal() {

    /* Quitando el la clase agg */
/*     caja.classList.remove("blue")
}


btn2.addEventListener("click", cambiarColorOriginal)

btn.addEventListener("click", cambiarColor) */

/* CREANDO UN ELEMENTO NUEVO EN HTML */
/* 
let img = document.createElement("img");

img.setAttribute("src", "")

caja.append(img);
 */