import ehCaracterValidoParaNome from "../validacao/eh-caracter-valido-para-nome.ts";

export function removerCaracteresInvalidosParaNome(nome: string): string {
    return nome.split('').reduce((anterior, atual) => {
        if(ehCaracterValidoParaNome(atual)) return anterior + atual;
        return anterior;
    }, '');
}

export default removerCaracteresInvalidosParaNome;
