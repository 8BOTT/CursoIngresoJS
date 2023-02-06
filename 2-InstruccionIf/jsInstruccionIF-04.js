//Castillo Agustín DIV X

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if(edad >= 13 && edad <= 17)
	{
		alert("Usted es adolescente");
	}
	
}//FIN DE LA FUNCIÓN