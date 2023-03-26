import calculadora from "./calculadora.js";

describe("Calcular suma", () => {
  it("deberia retornar 0 con cadena vacia", () => {
    expect(calculadora("")).toEqual(0);
  });
});
