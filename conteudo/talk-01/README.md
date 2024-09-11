# Nome Validator

O **Nome Validator** é um projeto desenvolvido para resolver um desafio de padronização de nomes. A ideia principal é receber o nome de uma pessoa como entrada (string), validar a entrada e exibir a versão padronizada do nome, garantindo que a primeira letra de cada nome e sobrenome seja maiúscula e que apenas caracteres válidos, como letras alfabéticas e caracteres especiais da língua portuguesa (á, ç, ê), sejam mantidos.

## Desafio

O problema consiste em:

1. **Entrada**:
   - Receber o nome de uma pessoa como string.
   
2. **Requisitos**:
   - A entrada deve ter no mínimo 3 caracteres e no máximo 50 caracteres.
   - Deve ser aceito apenas um argumento de entrada.
   - Todos os caracteres não alfabéticos devem ser removidos, com exceção dos caracteres especiais da língua portuguesa (ã, á, ç, ê).
   - A saída deve ser normalizada, transformando a primeira letra de cada nome e sobrenome em maiúscula.

3. **Saída**:
   - Nome padronizado ou mensagem de erro caso o nome não seja válido.

### Exemplo de entradas e saídas

1. **Entrada**: `lucas lima medeiros`
   - **Saída**: `Lucas Lima Medeiros`

2. **Entrada**: `PâMELA M3LI55A`
   - **Saída**: `Pâmela Mlia`

3. **Entrada**: `Nome de uma Pessoa Muito Grande Além do LIMITE (50) de caracteres SUPORTADO`
   - **Saída**: `Error Nome inválido`

## Como a Solução foi Implementada

A solução foi desenvolvida usando **Node.js** e **TypeScript**, seguindo a estrutura de projeto em módulos.


## Como Executar o Projeto

### Pré-requisitos

- **Node.js** versão >= 22.x
- **TypeScript** versão ^5.6.2

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/4lessandrodev/dev-talk.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   
   cd conteudo/talk-01/sample

   ```

3. Instale as dependências:
   ```bash
   
   npm install
   
   ```

### Como Utilizar

Para executar o algoritmo de validação e normalização do nome, utilize o seguinte comando:

```bash

npm run formatar-nome "seu nome aqui"

```

Por exemplo:

```bash
npm run formatar-nome "joão da silva"
```

A saída será:

```bash
João Da Silva
```

---

### Estrutura do Projeto

```bash

nome-validator/
├── lib/
│   ├── index.ts                                    # Função principal para normalizar nomes
│   ├── utils/
│   │   ├── nome-para-camel-case.util.ts            # Função que converte o nome para CamelCase
│   │   ├── nomes-para-string.utils.ts              # Função que converte um array de nomes em uma string completa
│   │   ├── remover-caracteres-invalidos.util.ts    # Função que remove caracteres inválidos
│   │   ├── remover-espacos-duplicados.util.ts      # Função que remove espaço vazio duplicado
│   ├── validacao/
│   │   ├── eh-caracter-valido-para-nome.ts         # Função que valida caracteres permitidos
│   │   ├── validar-nome.ts                         # Função que valida o nome completo
├── index.ts                                        # Ponto de entrada principal do projeto
├── package.json                                    # Informações do projeto
├── tsconfig.json                                   # Configuração do TypeScript
├── yarn.lock                                       # Arquivo de controle de dependências Yarn
└── README.md                                       # Documentação do projeto

```

## Funções

### Explicação da Implementação

### 1. `normalizarNomeCompleto`

```ts
export function normalizarNomeCompleto(nomeCompleto: string): string;
```

Essa função é a principal do projeto e é responsável por normalizar o nome completo recebido como entrada. Ela executa as seguintes tarefas:

- **Validação**: Usa a função `entradaEhValida` para garantir que o nome atenda aos critérios de comprimento e tipo.
- **Remoção de caracteres inválidos**: Remove qualquer caractere que não seja alfabético ou que não pertença à lista de caracteres especiais permitidos.
- **Formatação**: Utiliza `nomeParaCamelCase` para garantir que a primeira letra de cada nome/sobrenome seja maiúscula e o restante minúsculo.
- **Retorno**: Se o nome for válido, retorna a versão formatada. Caso contrário, lança um erro.

### 2. `entradaEhValida`

```ts
export function entradaEhValida(nomeCompleto: string): boolean;
```

Essa função valida se o nome fornecido cumpre os seguintes requisitos:

- **Verifica o tipo**: Confirma se o nome é uma string.
- **Verifica o comprimento**: Após a remoção de caracteres inválidos, verifica se o nome tem entre 3 e 50 caracteres.
- **Retorno**: Retorna `true` se o nome for válido e `false` caso contrário.

### 3. `removerCaracteresInvalidosParaNome`

```ts
export function removerCaracteresInvalidosParaNome(nome: string): string;
```

Essa função remove caracteres inválidos do nome. Ela percorre cada caractere da string e utiliza a função `ehCaracterValidoParaNome` para verificar se o caractere é permitido. Se for permitido, ele é mantido; caso contrário, é removido.

- **Processamento**: Divide o nome em caracteres, verifica cada um e constrói uma nova string apenas com os caracteres válidos.
- **Retorno**: Retorna a string com os caracteres inválidos removidos.

### 4. `ehCaracterValidoParaNome`

```ts
export function ehCaracterValidoParaNome(caracter: string): boolean;
```

Essa função verifica se um caractere individual é válido para ser incluído em um nome. Ela compara o caractere com uma lista de caracteres alfabéticos e caracteres especiais da língua portuguesa.

- **Lista de caracteres válidos**: Inclui todas as letras do alfabeto e caracteres especiais como `á`, `ç`, `ê`, etc.
- **Retorno**: Retorna `true` se o caractere for válido, e `false` se não for.

### 5. `nomeParaCamelCase`

```ts
export function nomeParaCamelCase(nome: string): string;
```

Essa função transforma um nome em CamelCase, ou seja, garante que a primeira letra seja maiúscula e as restantes minúsculas.

- **Primeira letra em maiúscula**: A função usa o método `slice(0, 1).toUpperCase()` para capitalizar a primeira letra.
- **Restante em minúsculas**: O restante da string é convertido para letras minúsculas usando `toLocaleLowerCase()`.
- **Retorno**: Retorna o nome formatado.

### 6. `nomesParaString`

```ts
export function nomesParaString(nomes: string[]): string;
```

Essa função recebe um array de nomes e transforma em uma string concatenada, separando cada nome por um espaço.

- **Concatenar nomes**: A função junta todas as partes do nome em uma única string.
- **Retorno**: Retorna a string resultante com os nomes concatenados.

---

## Sobre a abordagem

A abordagem utilizada na resolução do desafio de padronização do nome segue os mesmos princípios defendidos para projetos em **C**: **funções atômicas com responsabilidades únicas**. Esse conceito foi aplicado de forma modular para garantir clareza, reuso, facilidade de teste e manutenção do código, resultando em um projeto robusto e escalável.

### Defendendo a Abordagem com Funções Atômicas

1. **Simplicidade e Clareza**:
   - Cada função implementada no desafio do nome é responsável por uma única tarefa. Isso torna o código mais claro e fácil de entender, pois cada parte do problema foi quebrada em pequenos blocos lógicos. Por exemplo, a função `removerCaracteresInvalidosParaNome` cuida apenas da remoção de caracteres que não pertencem ao conjunto permitido, sem se preocupar com a validação do nome como um todo.
   - Assim como em projetos em **C**, onde as funções se concentram em fazer uma única coisa bem, o código no desafio do nome segue essa mesma estrutura para garantir a clareza e modularidade.

2. **Facilidade de Teste e Debugging**:
   - No desafio, cada função pode ser facilmente testada individualmente. Por exemplo, podemos testar a função `nomeParaCamelCase` sem precisar nos preocupar com a lógica de validação de caracteres ou verificação de tamanho. Isso facilita o **debugging**, pois, em caso de erro, sabemos exatamente qual parte do código pode estar causando o problema.
   - Essa abordagem de funções independentes e focadas em uma única responsabilidade permite que os testes sejam mais direcionados e precisos, algo essencial também no desenvolvimento em **C**.

3. **Reuso e Modularidade**:
   - A modularidade no desafio do nome é um reflexo claro do princípio de responsabilidade única. Funções como `ehCaracterValidoParaNome` podem ser reutilizadas em diferentes contextos, seja para validar outros tipos de entrada ou até em outros projetos.
   - Projetos escritos em **C** que seguem esse mesmo princípio conseguem reutilizar funções atômicas em diferentes partes do código, assim como ocorre no desafio. A função de verificar caracteres, por exemplo, poderia ser reutilizada em outras operações de string.

4. **Manutenção e Evolução do Código**:
   - A separação das responsabilidades permite que o projeto evolua de forma mais segura. Se no futuro decidirmos adicionar novos tipos de caracteres permitidos ou mudar a regra de capitalização, isso pode ser feito sem impactar outras partes do código, pois as funções são pequenas e independentes.
   - Em **C**, essa abordagem garante que, ao modificar uma função específica, como a que calcula a média de números em um exemplo anterior, outras partes do código não sejam impactadas negativamente. No desafio do nome, isso também facilita a manutenção e a evolução contínua do projeto.

5. **Segurança e Controle**:
   - Funções atômicas oferecem controle sobre cada passo do processo. No caso do desafio do nome, a função `removerCaracteresInvalidosParaNome` garante que apenas caracteres permitidos sejam mantidos antes de o nome passar para a função de normalização. Isso evita o acoplamento excessivo entre a remoção de caracteres e a validação do tamanho do nome.
   - Em **C**, ter funções separadas para alocação de memória, processamento e validação de dados garante mais controle e segurança, principalmente em relação ao uso de recursos como memória e arquivos. No desafio, embora o contexto seja diferente, esse mesmo nível de controle é obtido ao dividir as responsabilidades em funções pequenas e bem definidas.

### Aplicação do Conceito no Desafio

A abordagem modular adotada no desafio do nome se reflete nas seguintes funções:

- **`normalizarNomeCompleto`**: Esta função centraliza o fluxo principal, delegando tarefas específicas como validação, remoção de caracteres inválidos e formatação para funções menores. Assim como em **C**, a função principal aqui orquestra as demais funções atômicas.
  
- **`removerCaracteresInvalidosParaNome`**: Essa função é responsável exclusivamente pela limpeza dos caracteres que não são permitidos. Ela segue o conceito de responsabilidade única, mantendo o código limpo e garantindo que essa parte do processo seja tratada de forma isolada.

- **`entradaEhValida`**: A função que cuida da validação do nome verifica apenas o comprimento da string, após a remoção de caracteres inválidos. Isso permite que a lógica de validação seja simples e direta, como é comum em funções atômicas de C, que verificam condições específicas.

- **`ehCaracterValidoParaNome`**: Responsável por verificar se um caractere faz parte do conjunto permitido. Esta função é completamente isolada e pode ser utilizada em outros contextos, destacando o conceito de reuso.

- **`nomeParaCamelCase`**: Focada exclusivamente na capitalização das palavras, essa função é um exemplo claro de separação de responsabilidades. Assim como em C, onde funções que executam operações específicas, como conversão de dados, são isoladas, aqui temos uma função que trata exclusivamente da formatação.

### Conclusão

Assim como projetos em **C**, a resolução do desafio do nome segue fielmente o princípio de **funções atômicas com responsabilidades únicas**. Essa abordagem garante simplicidade, clareza, reuso e facilidade de manutenção. Ao dividir as tarefas complexas em blocos lógicos independentes, o projeto se torna mais modular, seguro e fácil de testar, além de permitir que futuras mudanças sejam feitas sem grandes riscos de introduzir erros em outras partes do sistema.

A implementação modular e com funções atômicas reflete a importância de escrever código com uma **responsabilidade única**, seja em **C** ou em **JavaScript/TypeScript**, garantindo que o projeto seja flexível e escalável.

---

### Autor

- Alessandro Dev <alessandroadm@live.com>
