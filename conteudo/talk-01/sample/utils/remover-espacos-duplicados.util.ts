export function removerEspacosDuplicados(nomeCompleto: string): string[] {
    return nomeCompleto.split(' ').filter((nome): boolean => nome != '');
}
export default removerEspacosDuplicados;
