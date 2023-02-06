/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
Castillo Agustín DIV X*/
function Sumar () 
{
	let preciouno;
    let preciodos;
    let preciotres;
    let resultado;

    preciouno = document.getElementById("txtIdPrecioUno").value;

    preciodos = document.getElementById("txtIdPrecioDos").value;

    preciotres = document.getElementById("txtIdPrecioTres").value;

    preciouno = parseInt(preciouno);

    preciodos = parseInt(preciodos);

    preciotres = parseInt(preciotres);

    resultado = preciouno + preciodos + preciotres;

    alert("La suma da " + resultado);

}
function Promedio () 
{
	let preciouno;
    let preciodos;
    let preciotres;
    let resultado;

    preciouno = document.getElementById("txtIdPrecioUno").value;

    preciodos = document.getElementById("txtIdPrecioDos").value;

    preciotres = document.getElementById("txtIdPrecioTres").value;

    preciouno = parseInt(preciouno);

    preciodos = parseInt(preciodos);

    preciotres = parseInt(preciotres);

    resultado = (preciouno + preciodos + preciotres) / 3;

    alert("El promedio es " + resultado);
}
function PrecioFinal () 
{
	let preciouno;
    let preciodos;
    let preciotres;
    let suma;
    let sumaiva;
    let resultadofinal;


    preciouno = document.getElementById("txtIdPrecioUno").value;

    preciodos = document.getElementById("txtIdPrecioDos").value;

    preciotres = document.getElementById("txtIdPrecioTres").value;

    preciouno = parseInt(preciouno);

    preciodos = parseInt(preciodos);

    preciotres = parseInt(preciotres);

    suma = (preciouno + preciodos + preciotres)

    sumaiva= suma * 21 / 100

    resultadofinal= suma + sumaiva;

    alert("El resultado final es " + resultadofinal);


}