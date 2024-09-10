import normalizarNomeCompleto from "./lib/index.ts";


function main() {
    const entradaDigitadaNoTerminal = process.argv[2];
    const nomeOuErro = normalizarNomeCompleto(entradaDigitadaNoTerminal);
    console.log(nomeOuErro);
};

main();
