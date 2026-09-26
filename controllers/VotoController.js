// O "Garçom": Só lida com a internet (recebe o clique e devolve a resposta)
class VotoController {
    constructor(votoService) {
        this.votoService = votoService;
    }

    async curtirPergunta(req, res) {
        try {
            const idDaPergunta = req.params.id;
            const funcionou = await this.votoService.aprovarVoto(idDaPergunta);
            
            if (funcionou) {
                res.status(200).json({ mensagem: "Voto computado com sucesso!" });
            } else {
                res.status(404).json({ erro: "Pergunta não encontrada." });
            }
        } catch (erro) {
            res.status(400).json({ erro: erro.message });
        }
    }
}
module.exports = VotoController;