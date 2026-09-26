# Análise de Design Simples (YAGNI)

## Práticas Identificadas
Ao analisar o backend (arquivos `routes/perguntas.js` e `routes/respostas.js`), notamos a aplicação do princípio YAGNI (You Aren't Gonna Need It). O código atual utiliza a estrutura básica do Express aliada ao SQLite de forma direta. O sistema resolve o problema atual da forma mais direta possível.

## Oportunidades de Simplificação
Durante a implementação das novas features, devemos manter essa filosofia:
1. **Busca e Categorização:** Podemos resolver isso usando consultas simples em SQL diretamente na rota, sem precisar instalar bibliotecas pesadas de busca.
2. **Votos:** Basta adicionar uma coluna numérica de votos nas tabelas, evitando criar tabelas relacionais complexas de log de votos caso o cliente não exija rastreabilidade.