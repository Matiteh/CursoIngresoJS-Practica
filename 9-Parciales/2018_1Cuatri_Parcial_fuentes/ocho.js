function mostrar()
{
	var numero;
	var letra;
	var acumuladorpos=0;
	var contador=0;
	var respuesta="si";
	var cantnumpares=0;
	var cantnumimpares=0;
	var cantceros=0;
	var promnumposing;
	var cantnumpositivos=0;
	var sumnumnegativos=0;
	var cantnumnegativos=0;
	var nummax=-100;
	var nummin=100;
	var letramax;
	var letramin;
	

	while (respuesta!="no")
	{
		contador++;

		numero=prompt("Ingrese el numero "+contador+": ");
		numero=parseInt(numero);
		while (isNaN(numero)==true || numero<-100 || numero>100)
		{
			numero=prompt("Error, ingrese un numero valido entre -100 y 100");
			numero=parseInt(numero);
		}

		letra=prompt("Ingrese la letra: ");
		letra.length=1;
		while (isNaN(letra)==false || letra.length>1 || letra.length<1)
		{
			letra=prompt("Error, ingrese una letra valida");
		}
		respuesta=prompt("Desea seguir ingresando datos?");

		if (numero%2 == 0)
		{
			cantnumpares++;
		}
		else
		{
			cantnumpares++;
		}

		if (numero>0)
		{
			cantnumpositivos++;
			acumuladorpos+=numero;
		}
		else
		{
			if (numero<0)
			{
				cantnumnegativos++;
				sumnumnegativos+=numero;
			}
			else
			{
				cantceros++;
			}
		}
		if (numero>nummax)
		{
			nummax=numero;
			letramax=letra;
		}
		if (numero<nummin)
		{
			nummin=numero;
			letramin=letra;
		}
	}

	promnumposing=acumuladorpos/cantnumpositivos;
	alert("cant numeros pares: "+cantnumpares+". Cant numeros impares: "+cantnumimpares+". Cant ceros: "+cantceros+". Promedio numeros positivos: "+promnumposing+". Suma numeros negativos: "+sumnumnegativos+". Num y letra del maximo: "+nummax+"  "+letramax+". numero y letra del minimo: "+nummin+"  "+letramin);
}
