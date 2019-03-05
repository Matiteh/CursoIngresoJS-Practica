function mostrar()
{
	var planeta;

	planeta=prompt("Ingrese un planeta del sistema solar: ");

	switch (planeta)
	{
		case "tierra":
		alert("aca vivimo wacho");
		break;
		
		case "mercurio":
		case "venus":
		alert("aca hace alta calora");
		break;
		
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "pluto":
		alert("aca ta ma frio wacho");
		break;

		default:
		alert("no es un planeta del sistema solar");
		break;
	}
}
