## Caso de Uso: Votar em uma Pergunta

**Atores:** Usuário Autenticado
**Pré-condições:** O usuário precisa estar logado e a pergunta já tem que existir.

**Fluxo Principal:**
1. O usuário vê a pergunta na tela com o número de votos.
2. O usuário clica no botão de curtir.
3. O sistema verifica se ele já clicou antes.
4. O sistema salva o voto no banco de dados.
5. O sistema muda o número na tela.

**Fluxo Alternativo (Erro):**
3a. O sistema percebe que o usuário já tinha votado.
3b. O sistema não deixa votar de novo e mostra um aviso amigável.