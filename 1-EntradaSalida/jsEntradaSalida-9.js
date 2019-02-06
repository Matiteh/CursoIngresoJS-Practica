/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldoing;
	var res;

	sueldoing=sueldo.value;

	sueldoing=parseInt(sueldoing);

	res=(sueldoing*10/100)+sueldoing;

	resultado.value=res
	
}
