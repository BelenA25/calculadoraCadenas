function calculadora(cadena) {
  if (tamanoCadena(cadena) == 0) return 0;
  if (tamanoCadena(cadena) >= 1) return trabajarConDelimitador(cadena);
} 

function trabajarConDelimitador(cadena){
  if (delimitadorEspecificado(cadena)) 
  {
    return sumaDeCadenaConDelimitador(cadena);
  }
  else 
  {
    return sumaDeCadena(cadena);
  }
}

function sumaDeCadena(cadena){
  var cadenaNumeros = conversion(cadena.split(/,|-/));
  return sumar(cadenaNumeros);
}

function sumaDeCadenaConDelimitador(cadena){
  var cadenas = cadena.split(" ");
  var delimitador = cadenas[0][3];
  var cadenaNumeros = conversion(splitMulti(cadenas[1], [',', '-', delimitador]));
  return sumar(cadenaNumeros);
}

function delimitadorEspecificado(cadena){
  if (cadena[0] == "/"){
    return true;
  }
  else
  {
    return false;
  }
}

function tamanoCadena(cadena){
  return cadena.length;
}

function sumar(numeros) {
  var suma = 0;
  for (var i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }
  return suma;
}

function conversion(cadena) {
  var nuevaCadena = [];
  for (var i = 0; i < cadena.length; i++) {
    nuevaCadena[i] = parseInt(cadena[i]);
  }
  return nuevaCadena;
}

function splitMulti(str, tokens) {
  var tempChar = tokens[0];
  for (var i = 1; i < tokens.length; i++) {
    str = str.split(tokens[i]).join(tempChar);
  }
  str = str.split(tempChar);
  return str;
}

export default calculadora;
