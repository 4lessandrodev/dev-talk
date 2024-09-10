var caracteresValidos = 'ABCDEFGHIGJK LMNOPQRSTUVXYZ'.split('');

export function ehCaracterValidoParaNome(caracter: string): boolean {
    return caracteresValidos.includes(caracter.toUpperCase());
}

export default ehCaracterValidoParaNome;
