import nomeParaCamelCase from "../utils/nome-para-camel-case.util.ts";
import nomesParaString from "../utils/nomes-para-string.utils.ts";
import removerCaracteresInvalidosParaNome from "../utils/remover-caracteres-invalidos.util.ts";
import removerEspacosDuplicados from "../utils/remover-espacos-duplicados.util.ts";
import entradaEhValida from "../validacao/validar-nome.ts";

export function normalizarNomeCompleto(nomeCompleto: string): string {
    const ehValido = entradaEhValida(nomeCompleto);
    if (!ehValido) throw new Error('Nome inválido: ' + nomeCompleto);

    return nomesParaString(
        removerEspacosDuplicados(nomeCompleto)
            .map(nomeParaCamelCase)
            .map(removerCaracteresInvalidosParaNome)
    );
}

export default normalizarNomeCompleto;
