import normalizarNomeCompleto from "./lib/index.ts";
import mensagemSucesso from "./mensagens/sucesso.mensagem.ts";

function main(): void {
    const entradaDigitadaNoTerminal = process.argv[2];
    const nome = normalizarNomeCompleto(entradaDigitadaNoTerminal);
    mensagemSucesso(`Nome digitado: ${nome}`);
};

main();
