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
});
