/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadocivil;
 	var sueldobruto;
 	var legajo;
 	var nacionalidad;

 	edad=prompt("Ingrese su edad: ");
 	edad=parseInt(edad);
 	while (isNaN(edad)==true || edad<18 || edad>90)
 	{
 		edad=prompt("Error, Ingrese una edad valida entre 18 y 90 años");
 		edad=parseInt(edad);		
 	}

 	sexo=prompt("Ingrese su sexo: ");
 	while (isNaN(sexo)==false || sexo!="F" && sexo!="M")
 	{
 		sexo=prompt("Error, Ingrese un sexo valido F o M: ");
 	}	

 	estadocivil=prompt("Ingrese 1=soltero, 2=casado, 3=viudo");
 	estadocivil=parseInt(estadocivil);
 	while (isNaN(estadocivil)==true || estadocivil<1 || estadocivil>3)
 	{
 		estadocivil=prompt("Error, Ingrese 1=soltero, 2=casado, 3=viudo");
 		estadocivil=parseInt(estadocivil);
 	}	

 	sueldobruto=prompt("Ingrese su sueldo bruto: ");
 	sueldobruto=parseInt(sueldobruto);
 	while (isNaN(sueldobruto)==true || sueldobruto<8000)
 	{
 		sueldobruto=prompt("Error, Ingrese su sueldo bruto: ");
 		sueldobruto=parseInt(sueldobruto);
 	}

 	legajo=prompt("Ingrese numero de legajo: ");
 	legajo=parseInt(legajo);
 	while (isNaN(legajo)==true || legajo>9999 || legajo<1000)
 	{
 		legajo=prompt("Error, Ingrese un numero de legajo valido");
 		legajo=parseInt(legajo);
 	}

 	nacionalidad=prompt("Ingrese A=argentino, E=extranjero, N=nacionalizado");
 	while (isNaN(nacionalidad)==false || nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
 	{
 		nacionalidad=prompt("Error, Ingrese A=argentino, E=extranjero, N=nacionalizado");
 	}
 	Nacionalidad.value=nacionalidad;
 	Legajo.value=legajo;
	Sueldo.value=sueldobruto;
	EstadoCivil.value=estadocivil;
	Sexo.value=sexo;
	Edad.value=edad;
}