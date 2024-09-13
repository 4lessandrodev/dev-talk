# Cifra de Cesar

A **Cifra de César** é um método simples de criptografia, onde cada letra de uma mensagem é substituída por outra, deslocada por um número fixo de posições no alfabeto. Por exemplo, com um deslocamento de 3, "A" se torna "D", "B" vira "E" e assim por diante. Esse método é fácil de implementar e foi usado pelo imperador romano Júlio César para enviar mensagens secretas. 
É considerado uma das formas mais básicas de criptografia.

### Desafio: **Implementar a Cifra de César**
Crie um programa que implemente a cifra de César para criptografar uma mensagem.

#### Especificações:
- **Entrada:** 
  1. Uma string para identificar a ação (criptografar ou descriptografar).
  2. Uma string com a mensagem (Obrigatório).
  3. Um número inteiro para o deslocamento (Opcional se não informado considerar 3 por padrão).
  4. Um código de segredo (Opcional).

- **Regras:**
  1. Desloque cada letra da mensagem pelo valor fornecido.
  2. Letras maiúsculas e minúsculas devem ser tratadas separadamente.
  3. O código de segredo se fornecido deve ser inserido no início do alfabeto padrão.
  4. Substitua os espaços vazios por +
  5. Caso na mensagem tenha algum caracter não presente alfabeto padrão, substitua por ?

#### Exemplo:
- **Entrada:** `criptografar "Minha Mensagem" 3 "SEGR3DO"`
- **Saída:** `"Plqkd+Phvvdjhp"`

Criptografando a mensagem

```bash

npm run criptografar "Minha Mensagem" 3 "SEGR3DO"

> "Plqkd+Phvvdjhp"

```

Descriptografando a mensagem

```bash

npm run descriptografar "Plqkd+Phvvdjhp" 3 "SEGR3DO"

> "Minha Mensagem"

```

#### Considerações

Considere a cadeia de caracteres abaixo como alfabeto padrão.

```txt

ABCDEFGHIJKLMNOPQRSTUVWXYZÇÃÉÀÊÓÁÔÍ0123456789abcdefghijklmnopqrstuvwxyzçãéàêóáôí

```
