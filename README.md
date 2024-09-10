# Dev Talk

### 1. **Versionamento de Código (Git)**
   - **Conceitos principais:** commits, branches, merges, pull requests e rebase.
   - **Boas práticas:** commits granulares, mensagens claras e bem detalhadas, uso de pull requests para revisão de código e branches organizadas (por exemplo, "feature/nome-da-feature" ou "bugfix/nome-do-bug").
   - **Resolução de conflitos:** como identificar e resolver conflitos de merge.

### 2. **Boas Práticas de Código (Clean Code)**
   - **Nomes claros e significativos:** como nomear variáveis, funções e classes.
   - **Funções pequenas:** importância de manter funções simples e que façam apenas uma coisa.
   - **DRY, KISS e YAGNI:** Evitar duplicação de código (DRY), manter a simplicidade (KISS) e não desenvolver funcionalidades antes de serem realmente necessárias (YAGNI).
   - **Comentário só quando necessário:** código claro deve explicar por si só, evitando muitos comentários.

### 3. **Estruturas de Dados e Algoritmos**
   - **Conceitos chave:** arrays, listas ligadas, filas, pilhas, árvores, e tabelas hash.
   - **Algoritmos fundamentais:** ordenação (como quicksort e mergesort), busca binária, e algoritmos de grafos.
   - **Complexidade de tempo e espaço:** como avaliar a eficiência de algoritmos usando notação Big O.

### 4. **Testes Automatizados**
   - **Tipos de testes:** unitários, de integração e end-to-end.
   - **TDD (Test-Driven Development):** prática de escrever testes antes de codificar.
   - **Ferramentas de teste:** escolha uma biblioteca/framework de teste como Jest, Mocha ou Vitest.
   - **Cobertura de código:** explicação sobre o que é cobertura e como não priorizá-la em detrimento da qualidade dos testes.

### 5. **Depuração e Logging**
   - **Debugging eficaz:** como usar ferramentas de depuração (como breakpoints em IDEs e o `console.log()` quando necessário).
   - **Logging:** importância de logs em diferentes níveis (info, warning, error), e ferramentas para gerenciamento de logs em produção (como Loggly ou ELK stack).

### 6. **Conceitos de Programação Orientada a Objetos (POO)**
   - **Princípios chave:** encapsulamento, herança, polimorfismo e abstração.
   - **SOLID:** princípios de design de software para melhorar a qualidade e extensibilidade do código.
   - **Exemplos práticos:** como esses princípios são aplicados no dia a dia, especialmente em linguagens orientadas a objetos como Java, C# ou TypeScript.

### 7. **Arquitetura de Software**
   - **Padrões comuns:** MVC (Model-View-Controller), arquitetura em camadas e microserviços.
   - **Separação de responsabilidades:** como projetar módulos e classes que tenham responsabilidades bem definidas.
   - **Design Patterns:** padrões como Singleton, Factory, Observer, e Repository.

### 8. **Documentação e Comentários**
   - **Documentação do código:** importância de usar ferramentas como JSDoc, TypeDoc ou Swagger (para APIs).
   - **Boas práticas de comentários:** quando escrever e como garantir que sejam úteis e necessários.

### 9. **Desenvolvimento de APIs**
   - **REST e GraphQL:** principais conceitos, como estruturar endpoints e otimizar queries.
   - **Autenticação e Autorização:** uso de JWT, OAuth e melhores práticas de segurança em APIs.
   - **Documentação de APIs:** importância de documentar corretamente usando ferramentas como Swagger ou Postman.

### 10. **Performance e Otimização**
   - **Detecção de gargalos:** como identificar e otimizar trechos de código que afetam a performance.
   - **Uso eficiente de recursos:** gerenciamento de memória, consumo de CPU, e balanceamento de carga (principalmente em serviços web).
   - **Ferramentas de monitoramento:** como usar ferramentas como o Chrome DevTools para otimizar desempenho em front-end e back-end.

### 11. **Segurança no Desenvolvimento**
   - **Principais vulnerabilidades:** SQL Injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), e segurança de API.
   - **Boas práticas de segurança:** como validar dados de entrada, criptografar informações sensíveis, e gerenciar sessões com segurança.

### 12. **Metodologias Ágeis**
   - **Conceitos ágeis:** introdução ao Scrum e Kanban.
   - **Ciclos de feedback rápidos:** importância de dar e receber feedback de código com frequência.
   - **Estimativas de tarefas:** como estimar corretamente usando práticas como planning poker.

### 13. **Refatoração**
   - **Refatoração contínua:** como melhorar o código sem alterar o comportamento funcional.
   - **Identificação de code smells:** como detectar problemas no código e a necessidade de refatoração.
   - **Ferramentas e abordagens:** uso de ferramentas como o SonarQube para análise estática e dicas de refatoração.

### 14. **Banco de Dados e SQL**
   - **Modelagem de dados:** explicação sobre relacionamentos (1:1, 1:N, N:M) e normalização de tabelas.
   - **Consultas SQL eficientes:** como otimizar queries com índices, joins e subqueries.
   - **NoSQL vs SQL:** quando escolher um banco de dados NoSQL (como MongoDB) e quando usar SQL (como MySQL ou PostgreSQL).

### 15. **Fluxos CI/CD (Integração e Entrega Contínua)**
   - **Conceitos básicos:** como integrar pipelines de CI para rodar testes automáticos e fazer deploy.
   - **Ferramentas:** Jenkins, GitLab CI, Travis CI, ou GitHub Actions.
   - **Automatização:** importância da automação no processo de build, teste e deploy.
