	/*
	Debemos lograr tomar Los numeros por ID ,
	transformarlos a enteros (parseInt),realizar la operación correcta y 
	mostrar el resto entre el dividendo y el divisor.
	ej.: "El resto es 0 ."
	Castillo Agustín Div X*/
	function SacarResto()
	{
	let numerodividendo;
	let numerodivisor;
	let resto;

	numerodividendo = document.getElementById("txtIdNumeroDividendo").value;

	numerodivisor = document.getElementById("txtIdNumeroDivisor").value;

	numerodividendo = parseInt(numerodividendo);

	numerodivisor = parseInt(numerodivisor);

	resto = numerodividendo % numerodivisor

		alert("El resto es " + resto);
	}
