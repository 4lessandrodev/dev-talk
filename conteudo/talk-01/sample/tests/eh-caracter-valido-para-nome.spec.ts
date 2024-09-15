import { describe, it, expect } from 'vitest';
import ehCaracterValidoParaNome from '../validacao/eh-caracter-valido-para-nome';

describe('Testes para a função ehCaracterValidoParaNome', () => {

    it('Deve retornar true para caracteres válidos maiúsculos (A-Z)', () => {
        expect(ehCaracterValidoParaNome('A')).toBe(true);
        expect(ehCaracterValidoParaNome('Z')).toBe(true);
    });

    it('Deve retornar true para caracteres válidos minúsculos (a-z)', () => {
        expect(ehCaracterValidoParaNome('a')).toBe(true);
        expect(ehCaracterValidoParaNome('z')).toBe(true);
        expect(ehCaracterValidoParaNome(' ')).toBe(false);
    });

    it('Deve retornar false para caracteres não alfabéticos', () => {
        expect(ehCaracterValidoParaNome('1')).toBe(false);
        expect(ehCaracterValidoParaNome('@')).toBe(false);
        expect(ehCaracterValidoParaNome('-')).toBe(false);
    });

    it('Deve retornar false para strings vazias', () => {
        expect(ehCaracterValidoParaNome('')).toBe(false);
    });

    it('Deve retornar true para caracteres especiais acentuados', () => {
        expect(ehCaracterValidoParaNome('á')).toBe(true);
        expect(ehCaracterValidoParaNome('ç')).toBe(true);
    });

});
