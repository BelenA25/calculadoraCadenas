function calculadora(cadena) {
  if (cadena == "") {
    return 0;
  }
  else {
    if (cadena.length > 1) {
      if (cadena[0] == "/") {
        let cadenas = cadena.split(" ");
        let delimitador = cadenas[0][3];
        let delimitadores = "/,|-|;/";
        // let cadenaNumeros = conversion(cadenas[1].split(delimitadores));
        let cadenaNumeros = conversion(splitMulti(cadenas[1], [',','-',delimitador]));
        return sumar(cadenaNumeros);
      }
      else {
        let cadenaNumeros = conversion(cadena.split(/,|-/));
        return sumar(cadenaNumeros);
      }

    }
    else {
      return parseInt(cadena);
    }
  }

}
function sumar(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }
  return suma;
}
function conversion(cadena) {
  let nuevaCadena = [];
  for (let i = 0; i < cadena.length; i++) {
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
