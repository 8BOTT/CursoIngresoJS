	/*
	Debemos lograr tomar Los numeros por ID ,
	transformarlos a enteros (parseInt),realizar la operación correcta y 
	mostrar el resulto por medio de "ALERT"
	ej.: "la Resta es 750"
	Castillo Agustín Div X*/ 
	function sumar()
	{	
	let numero1;
	let numero2;
	let resultado;

	numero1= document.getElementById("txtIdNumeroUno").value;

	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);

	numero2 = parseInt(numero2);

	resultado= numero1 + numero2;

		alert("La suma es " + resultado);	
	}

	function restar()
	{
	let numero1;
	let numero2;
	let resultado;

	numero1= document.getElementById("txtIdNumeroUno").value;

	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);

	numero2 = parseInt(numero2);

	resultado= numero1 - numero2;

		alert("La resta es " + resultado);	
	}

	function multiplicar()
	{ 
	let numero1;
	let numero2;
	let resultado;

	numero1= document.getElementById("txtIdNumeroUno").value;

	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);

	numero2 = parseInt(numero2);

	resultado= numero1 * numero2;

		alert("La multiplicación es " + resultado);	
	}

	function dividir()
	{
	let numero1;
	let numero2;
	let resultado;

	numero1= document.getElementById("txtIdNumeroUno").value;

	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);

	numero2 = parseInt(numero2);

	resultado= numero1 / numero2;

		alert("La división es " + resultado);	
	}

