import calculadora from "./calculadora.js";

describe("Calcular suma", () => {
  it("deberia retornar 0 con cadena vacia", () => {
    expect(calculadora("")).toEqual(0);
  });
  it("deberia retornar 1", () => {
    expect(calculadora("1")).toEqual(1);
  });
  it("deberia retornar 3", () => {
    expect(calculadora("1,2")).toEqual(3);
  });
  it("deberia sumar 3 numeros", () => {
    expect(calculadora("6,2,1")).toEqual(9);
  });
  it("deberia sumar 3 numeros, con el guion como separador", () => {
    expect(calculadora("6,2-4")).toEqual(12);
  });
  it("deberia sumar 3 numeros, con el guion como separador", () => {
    expect(calculadora("6,2-4")).toEqual(12);
  });
  it("deberia especificar el separador", () => {
    expect(calculadora("//[;] 6;7;4")).toEqual(17);
  });
  it("deberia sumar con los separadores comunes", () => {
    expect(calculadora("//[;] 6,3-2;1")).toEqual(12);
  });
});
