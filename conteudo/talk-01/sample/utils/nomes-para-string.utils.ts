export function nomesParaString(nomes: string[]): string {
    return nomes.toString().replace(/[\s,]+|,/g, ' ').trim();
}

export default nomesParaString;
