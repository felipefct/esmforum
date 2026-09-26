# Implementação de Código com SOLID

**Funcionalidade:** Sistema de Votação (Curtir Pergunta).

**Regras Aplicadas:**
1. **Responsabilidade Única (SRP):** Criei três pastas e arquivos diferentes (`controllers`, `services`, `repositories`). O Controller não sabe os comandos de banco de dados, e o Repository não sabe o que é internet. Cada um faz uma única coisa.
2. **Inversão de Dependência (DIP):** O meu arquivo de regras (`VotoService`) não puxa o SQLite diretamente. Ele recebe o acesso ao banco pelo construtor. Isso permite que eu troque o banco de dados no futuro sem precisar mudar as minhas regras.