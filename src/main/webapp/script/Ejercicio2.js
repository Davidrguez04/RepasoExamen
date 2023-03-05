/**
 * 
 */
  function ejercicio2(){
	 var nombre=prompt("Digame su nombre");
	 var apellidos=prompt("Digame sus apellidos");
	 var opcion;
	
	 opcion=prompt("Menu: "+
	 "1.-Mostrar nombre"
	 +" 2.-Mostrar apellidos");
	
	 switch(opcion){
		 case "1":
		 document.write(nombre);
	     break;
	     case "2":
	     document.write(apellidos);
	     break;
	     default:
	     document.write("El valor introducido no es correcto.")
	     break;
	 }
 }