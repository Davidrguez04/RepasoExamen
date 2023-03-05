/**
 * Crea ejemplos de conversión de texto a número y viceversa.
  Consigue que la conversión de texto a número falle. ¿Qué error es el más típico?
 */
 function ejercicio7(){
	 let num1 = "2";
     let num2 = "3";
     let suma= num1 + num2;
     document.write(suma);

     let numero = 8;
     //let texto = numero.toString();
     let texto = String(number);
     document.write(typeof(texto));
 }