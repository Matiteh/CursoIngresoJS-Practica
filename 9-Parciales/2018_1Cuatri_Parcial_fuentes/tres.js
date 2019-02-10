function mostrar()
{
	var precio;
	var porcentaje;
	var prefinal;

	precio= prompt ("ingrese el precio");
	porcentaje= prompt ("ingrese el % del descuento");

	prefinal= (precio*porcentaje)/100;

	elPrecioFinal.value=prefinal;
	
}
