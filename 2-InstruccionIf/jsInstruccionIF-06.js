//Castillo Agustín DIV X

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if(edad >= 18)
	{
		alert("Usted es un mayor de edad");
	}
	else
	{
		if(edad >= 13)
		{
			alert("Usted es un adolescente");
		}
		else
		{
			alert("Usted es un niño");
		}
	}

}//FIN DE LA FUNCIÓN