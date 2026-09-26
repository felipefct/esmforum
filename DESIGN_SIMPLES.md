# Prática XP: Design Simples (YAGNI)

**O que já está simples no código:**
O sistema atual se conecta ao banco de dados diretamente nos arquivos de rota. Ele não tenta criar estruturas complexas que não precisamos agora. Segue a regra do "Você Não Vai Precisar Disso" (YAGNI).

**O que pode melhorar:**
Se tivermos que verificar muitas vezes se um campo de texto está vazio, podemos criar uma regra única para checar isso, em vez de repetir o mesmo código de checagem toda hora.