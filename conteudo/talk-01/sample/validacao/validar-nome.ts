import removerCaracteresInvalidosParaNome from "../utils/remover-caracteres-invalidos.util.ts";

export function entradaEhValida(nomeCompleto: string): boolean {
    if (typeof nomeCompleto !== 'string') return false;
    const nomeCaracteresValidos = removerCaracteresInvalidosParaNome(nomeCompleto);
    return (nomeCaracteresValidos.length >= 3 && nomeCaracteresValidos.length <= 50);
}

export default entradaEhValida;
