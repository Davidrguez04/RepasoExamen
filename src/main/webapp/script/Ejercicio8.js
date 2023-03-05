/**
 * Construye el objeto de tipo persona con los siguientes campos: nombre, apellidos, edad 
 y fecha de nacimiento. Dale a la fecha de nacimiento un valor en formato adecuado para poder pasar 
 de string a date.
Cuando tengas el objeto, opten el tipo de dato que es y verifica que es un tipo persona.
Pista: utiliza el ejemplo de los vehículos con marca y modelo visto en la teoría de clase.
 */
 function ejercicio8(){
	 var myCar = new Object();
    myCar.make = 'Ford';
    myCar.model = 'Mustang';
    myCar.year = 1969;
    
    var persona=new Object();
    persona.nombre='Pepe';
    persona.apellidos='Ruiz';
    persona.edad=45;
    persona.fechaNac="12/34/21";
    document.write(persona instanceof ejercicio8);
 }