function mostrar()
{
	var notas;
	var sexo;
	var sexonotmin;
	var contador=0;
	var acumuladornotas=0;
	var promediototal;
	var notamin=10;
	var cantvnotmayor6=0;

	while (contador<5)
	{
		contador++;
		notas=prompt("Ingrese la nota "+contador+": ");
		notas=parseInt(notas);
		while (isNaN(notas)== true || notas<0 || notas>10)
		{
			notas=prompt("Error, ingrese una nota valida");
			notas=parseInt(notas);
		}

		sexo=prompt("Ingrese el sexo");
		while (isNaN(sexo)== false || sexo!="f" && sexo!="m")
		{
			sexo=prompt("Error, ingrese un sexo valido");
		}

		if (notas<notamin)
		{
			notamin=notas;
			sexonotmin=sexo;		
		}
		if (notas>=6)
		{
			cantvnotmayor6++
		}

		acumuladornotas+=notas;
		promediototal=acumuladornotas/5;

	}
	alert("promedio notas total: "+promediototal+". nota mas baja y sexo de esa persona: "+notamin+" "+sexonotmin+". Cantidad de varones con nota mayor o igual a 6: "+cantvnotmayor6);

}

