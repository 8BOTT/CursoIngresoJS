/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
Castillo Agustín DIV X*/
function FahrenheitCentigrados () 
{
	
    let temperaturaF;
    let temperaturaC;

    temperaturaF = parseFloat(document.getElementById("txtIdTemperatura").value);

    temperaturaC = (temperaturaF - 32) / 1.8;

    alert (temperaturaF + " grados Fahrenheit son " + temperaturaC.toFixed(4) + " grados Centigrados");

}

function CentigradosFahrenheit () 
{
	
    let temperaturaC;
    let temperaturaF;

    temperaturaC = parseFloat(document.getElementById("txtIdTemperatura").value);

    temperaturaF = temperaturaC * 1.8 + 32;

    alert (temperaturaC + " grados Centigrados son " + temperaturaF.toFixed(4) + " grados Fahrenheit");

}
