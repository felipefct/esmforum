# Análise de Código e Regras SOLID

**Pontos Positivos:**
1. **Responsabilidade Única (SRP):** Os arquivos de perguntas e respostas estão separados (`perguntas.js` e `respostas.js`).
2. **Separação Cliente-Servidor:** O site (React) e o servidor (Node) não se misturam, conversando apenas por texto JSON.

**Oportunidades de Melhoria:**
1. **Violação do SRP:** Atualmente, o arquivo de rota (que recebe o clique) também acessa o banco de dados. Vamos separar isso em "Garçom" (Controller) e "Estoquista" (Repository).