import { describe, it, expect } from 'vitest';
import entradaEhValida from '../validacao/validar-nome';

describe('Testes para a função entradaEhValida', () => {

    it('Deve retornar true para um nome válido (ex: "João Silva")', () => {
        expect(entradaEhValida("João Silva")).toBe(true);
    });

    it('Deve retornar false para uma string vazia', () => {
        expect(entradaEhValida("")).toBe(false);
    });

    it('Deve retornar false para um nome com menos de 3 caracteres válidos', () => {
        expect(entradaEhValida("AB")).toBe(false);
    });

    it('Deve retornar false para um nome com mais de 50 caracteres válidos', () => {
        const nomeGrande = "A".repeat(51);
        expect(entradaEhValida(nomeGrande)).toBe(false);
    });

    it('Deve retornar true para um nome com exatamente 50 caracteres válidos', () => {
        const nomeLimite = "A".repeat(50);
        expect(entradaEhValida(nomeLimite)).toBe(true);
    });

    it('Deve retornar true para um nome com acentos e caracteres especiais válidos', () => {
        expect(entradaEhValida("Álvaro çarvalho")).toBe(true);
    });

    it('Deve retornar false se a entrada não for uma string (ex: número)', () => {
        expect(entradaEhValida(123 as any)).toBe(false);
    });

    it('Deve retornar false para um nome composto apenas por caracteres inválidos', () => {
        expect(entradaEhValida("123!@#")).toBe(false);
    });

    it('Deve retornar true para um nome que contém espaços mas com caracteres válidos suficientes', () => {
        expect(entradaEhValida("João    Lima")).toBe(true);
    });
});
