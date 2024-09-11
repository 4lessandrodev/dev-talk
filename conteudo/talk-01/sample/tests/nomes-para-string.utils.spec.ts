import { describe, it, expect } from 'vitest';
import nomesParaString from '../utils/nomes-para-string.utils';

describe('Testes para a função nomesParaString', () => {

    it('Deve juntar ["Lucas", "Lima", "Medeiros"] em "Lucas Lima Medeiros"', () => {
        expect(nomesParaString(["Lucas", "Lima", "Medeiros"])).toBe("Lucas Lima Medeiros");
    });

    it('Deve juntar um único nome ["Lucas"] em "Lucas"', () => {
        expect(nomesParaString(["Lucas"])).toBe("Lucas");
    });

    it('Deve retornar uma string vazia quando o array for vazio', () => {
        expect(nomesParaString([])).toBe("");
    });

    it('Deve juntar ["Lucas", "", "Medeiros"] em "Lucas  Medeiros"', () => {
        expect(nomesParaString(["Lucas", "", "Medeiros"])).toBe("Lucas Medeiros");
    });

    it('Deve juntar ["   Lucas   ", "Lima"] mantendo os espaços internos', () => {
        expect(nomesParaString(["   Lucas   ", "Lima"])).toBe("Lucas Lima");
    });

});
