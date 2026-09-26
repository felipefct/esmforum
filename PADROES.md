# Padrões de Projeto

## Padrões Existentes
- **MVC Simplificado:** O site (React) é a Tela (View) e o servidor (Node) é o Controlador (Controller).

## Padrões Propostos
1. **Padrão Singleton:** Usar para garantir apenas UMA conexão ativa com o banco de dados SQLite, evitando que ele trave.
2. **Padrão Factory:** Criar uma "fábrica" de mensagens de erro. Assim, todo erro gerado pelo servidor terá o mesmo formato.
3. **Padrão Strategy:** Usar na busca. O código escolhe automaticamente entre uma busca exata ou aproximada sem precisarmos reescrever tudo.