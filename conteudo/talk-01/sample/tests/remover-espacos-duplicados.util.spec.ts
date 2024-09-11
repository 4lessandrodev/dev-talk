import { describe, it, expect } from 'vitest';
import removerEspacosDuplicados from '../utils/remover-espacos-duplicados.util';

describe('Testes para a função removerEspacosDuplicados', () => {

    it('Deve remover espaços duplicados entre as palavras', () => {
        expect(removerEspacosDuplicados("Lucas    Lima")).toEqual(["Lucas", "Lima"]);
    });

    it('Deve manter uma palavra sem espaços extras', () => {
        expect(removerEspacosDuplicados("Lucas")).toEqual(["Lucas"]);
    });

    it('Deve remover espaços no início e no fim', () => {
        expect(removerEspacosDuplicados("  Lucas Lima ")).toEqual(["Lucas", "Lima"]);
    });

    it('Deve retornar um array vazio para uma string vazia', () => {
        expect(removerEspacosDuplicados("")).toEqual([]);
    });

    it('Deve retornar um array vazio para uma string composta apenas por espaços', () => {
        expect(removerEspacosDuplicados("     ")).toEqual([]);
    });

    it('Deve retornar um array com todas as palavras mesmo se houver espaços múltiplos no meio', () => {
        expect(removerEspacosDuplicados("Lucas   Lima Oliveira")).toEqual(["Lucas", "Lima", "Oliveira"]);
    });

});
