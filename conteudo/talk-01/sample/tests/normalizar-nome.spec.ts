import { describe, it, expect } from 'vitest';
import normalizarNomeCompleto from '../lib';

describe('Testes para a função normalizarNomeCompleto', () => {

    it('Deve normalizar corretamente um nome simples sem caracteres especiais', () => {
        expect(normalizarNomeCompleto("lucas lima")).toBe("Lucas Lima");
    });

    it('Deve normalizar um nome com letras maiúsculas e minúsculas misturadas', () => {
        expect(normalizarNomeCompleto("LUCAS liMA")).toBe("Lucas Lima");
    });

    it('Deve remover números e caracteres inválidos do nome', () => {
        expect(normalizarNomeCompleto("LUCAS 123 liMA!@#")).toBe("Lucas Lima");
    });

    it('Deve lançar um erro para um nome muito curto (menos de 3 caracteres válidos)', () => {
        expect(() => normalizarNomeCompleto("L")).toThrow("Nome inválido: L");
    });

    it('Deve lançar um erro para um nome muito longo (mais de 50 caracteres válidos)', () => {
        const nomeGrande = "A".repeat(51);
        expect(() => normalizarNomeCompleto(nomeGrande)).toThrow("Nome inválido: " + nomeGrande);
    });

    it('Deve manter os caracteres válidos com acentuação', () => {
        expect(normalizarNomeCompleto("áLVARO çARVALHO")).toBe("Álvaro Çarvalho");
    });

    it('Deve lançar um erro se o nome não for uma string', () => {
        expect(() => normalizarNomeCompleto(123 as any)).toThrow("Nome inválido: 123");
    });

    it('Deve normalizar nomes com múltiplos espaços entre palavras', () => {
        expect(normalizarNomeCompleto("Lucas    Lima")).toBe("Lucas Lima");
    });

});
