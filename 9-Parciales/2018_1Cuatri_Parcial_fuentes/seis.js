function mostrar()
{
	var hora;

	hora=laHora.value;
	hora=parseInt(hora);

	switch (hora)
	{
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		alert("es de dia wacho levantate ctm");
		break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		alert("es de tarde pelotudo ndeahhh");
		break;

		default:
		if (hora>19 && hora<=24)
		{
			alert("es de noche anda a dormir");
		}
		else
		{
			alert("la hora ingresada es invalida");
		}

	}
}
