# Diagramas UML

## a) Diagrama de Classes
```mermaid
classDiagram
    class Usuario {
        +String nome
        +String email
    }
    class Pergunta {
        +String titulo
        +int votos
    }
    class Voto {
        +String tipoVoto
    }
    Usuario "1" -- "*" Pergunta : cria
    Usuario "1" -- "*" Voto : realiza
    Pergunta "1" -- "*" Voto : recebe

sequenceDiagram
    actor U as Usuário
    participant F as Site (React)
    participant A as Servidor (Express)
    participant B as Banco de Dados
    U->>F: Clica em curtir
    F->>A: Pede para registrar o voto
    A->>B: Checa se já votou
    B-->>A: Diz que não votou
    A->>B: Salva o voto novo
    B-->>A: Confirma que salvou
    A-->>F: Devolve o número novo
    F-->>U: Atualiza a tela

stateDiagram-v2
    [*] --> DigitarPesquisa
    DigitarPesquisa --> ClicarBuscar
    ClicarBuscar --> ChecarTamanho
    ChecarTamanho --> PalavraGrande : Mais de 2 letras
    ChecarTamanho --> PalavraPequena : 2 letras ou menos
    PalavraPequena --> DigitarPesquisa
    PalavraGrande --> ProcurarNoBanco
    ProcurarNoBanco --> MostrarResultados
    MostrarResultados --> [*]    

stateDiagram-v2
    [*] --> Aberta
    Aberta --> Respondida
    Respondida --> Fechada
    Aberta --> Fechada
    Fechada --> [*]    