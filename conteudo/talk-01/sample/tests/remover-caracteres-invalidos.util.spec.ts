import { describe, it, expect } from 'vitest';
import removerCaracteresInvalidosParaNome from '../utils/remover-caracteres-invalidos.util';

describe('Testes para a função removerCaracteresInvalidosParaNome', () => {

    it('Deve remover números e caracteres especiais, deixando apenas letras', () => {
        expect(removerCaracteresInvalidosParaNome("João123!@#")).toBe("João");
    });

    it('Deve remover espaços entre as letras', () => {
        expect(removerCaracteresInvalidosParaNome("João Lima")).toBe("JoãoLima");
    });

    it('Deve manter caracteres válidos com acentuação', () => {
        console.log(removerCaracteresInvalidosParaNome("Álvaro çarvalho"))
        expect(removerCaracteresInvalidosParaNome("Álvaro çarvalho")).toBe("Álvaroçarvalho");
    });

    it('Deve retornar uma string vazia quando todos os caracteres forem inválidos', () => {
        expect(removerCaracteresInvalidosParaNome("123!@#")).toBe("");
    });

    it('Deve retornar a string original se todos os caracteres forem válidos', () => {
        expect(removerCaracteresInvalidosParaNome("Joao")).toBe("Joao");
    });

    it('Deve lidar corretamente com uma string vazia', () => {
        expect(removerCaracteresInvalidosParaNome("")).toBe("");
    });

});
