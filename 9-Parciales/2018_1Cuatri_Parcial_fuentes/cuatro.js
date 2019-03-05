function mostrar()
{
	var numero1;
	var numero2;
	var res;
	var res2;

	numero1=prompt("Ingrese el primer numero: ");
	numero1=parseInt(numero1);
	numero2=prompt("Ingrese el segundo numero: ");
	numero2=parseInt(numero2);

	if (numero1==numero2)
	{
		alert(numero1+"  "+numero2);
	}
	else
	{
		if (numero1>numero2)
		{
			res=numero1-numero2;
		}
		else
		{
			res2=numero1+numero2;
		}
	}
	if (res2>10)
	{
		alert("la suma es "+res2+" y supero el 10");
	}
}
