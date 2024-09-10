export function nomesParaString(nomes: string[]): string {
    return nomes.toString().replaceAll(',', ' ');
}

export default nomesParaString;
