function calculadora(cadena) {
  if(cadena=="")
  {
    return 0;
  }
  else
  {
    if(cadena.length > 1){
      let cadenaNumeros = cadena.split(",");
      return parseInt(cadenaNumeros[0]) + parseInt(cadenaNumeros[1]);
    }
    else
    {
      return parseInt(cadena);
    }
  }
  
}
export default calculadora;
