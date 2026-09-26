# Arquitetura do Sistema

**Arquitetura Atual:**
O sistema funciona no estilo Cliente-Servidor. O React é o cliente e o Node.js é o servidor.

**Proposta de Melhoria (Separação MVC):**
- **Controllers:** Só recebe os pedidos do site e devolve as respostas.
- **Services:** Cuida apenas das regras (ex: checar se pode votar).
- **Repositories:** Fica responsável exclusivamente pelos comandos SQL no banco de dados.

```mermaid
graph TD
    A[Tela React] -->|Clica| B[Controller]
    B -->|Manda checar regras| C[Service]
    C -->|Manda salvar| D[Repository]
    D -->|Executa| E[(Banco de Dados)]