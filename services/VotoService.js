// O "Cozinheiro": Cuida das regras do nosso negócio
class VotoService {
    constructor(perguntaRepository) {
        this.repository = perguntaRepository; 
    }

    async aprovarVoto(idDaPergunta) {
        if (!idDaPergunta) {
            throw new Error("A pergunta precisa de um ID!");
        }
        
        const sucesso = await this.repository.somarUmVoto(idDaPergunta);
        return sucesso > 0;
    }
}
module.exports = VotoService;