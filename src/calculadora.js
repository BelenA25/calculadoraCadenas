function calculadora(cadena) {
  if(cadena=="")
  {
    return 0;
  }
  else
  {
    if(cadena.length > 1){
      let cadenaNumeros = conversion(cadena.split(/[,-]+/));
      return sumar(cadenaNumeros);
    }
    else
    {
      return parseInt(cadena);
    }
  }
  
}
function sumar(numeros){
  let suma = 0;
  for (let i = 0 ; i < numeros.length; i++){
    suma = suma + numeros[i];
  } 
  return suma;
}
function conversion(cadena){
  let nuevaCadena = [];
  for (let i = 0 ; i < cadena.length; i++){
    nuevaCadena[i] = parseInt(cadena[i]);
  } 
  return nuevaCadena;
}
export default calculadora;
