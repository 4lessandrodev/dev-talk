export function nomeParaCamelCase(nome: string): string {
    return nome.slice(0, 1).toUpperCase() + nome.slice(1).toLocaleLowerCase();
}

export default nomeParaCamelCase;
