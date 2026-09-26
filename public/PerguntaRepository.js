// O "Estoquista": Apenas mexe no Banco de Dados
class PerguntaRepository {
    constructor(db) {
        this.db = db;
    }

    async somarUmVoto(idDaPergunta) {
        return new Promise((resolve, reject) => {
            const sql = `UPDATE perguntas SET votos = votos + 1 WHERE id = ?`;
            
            this.db.run(sql, [idDaPergunta], function(erro) {
                if (erro) return reject(erro);
                resolve(this.changes);
            });
        });
    }
}
module.exports = PerguntaRepository;