import { describe, it, expect } from 'vitest';
import nomeParaCamelCase from '../utils/nome-para-camel-case.util';

describe('Testes para a função nomeParaCamelCase', () => {

  it('Deve converter "joao" para "Joao"', () => {
    expect(nomeParaCamelCase("joao")).toBe("Joao");
  });

  it('Deve manter "Joao" como "Joao"', () => {
    expect(nomeParaCamelCase("Joao")).toBe("Joao");
  });

  it('Deve converter "JOAO" para "Joao"', () => {
    expect(nomeParaCamelCase("JOAO")).toBe("Joao");
  });

  it('Deve converter "jOaO" para "Joao"', () => {
    expect(nomeParaCamelCase("jOaO")).toBe("Joao");
  });

  it('Deve converter "çarlos" para "Çarlos"', () => {
    expect(nomeParaCamelCase("çarlos")).toBe("Çarlos");
  });

  it('Deve converter "áRTHUR" para "Árthur"', () => {
    expect(nomeParaCamelCase("áRTHUR")).toBe("Árthur");
  });

  it('Deve retornar uma string vazia', () => {
    expect(nomeParaCamelCase("")).toBe("");
  });

  it('Deve lançar erro ao passar null', () => {
    expect(() => nomeParaCamelCase(null as any)).toThrow(Error);
  });

  it('Deve lançar erro ao passar undefined', () => {
    expect(() => nomeParaCamelCase(undefined as any)).toThrow(Error);
  });
});
