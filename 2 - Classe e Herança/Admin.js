import User from "./User.js";

// Essa é uma subclasse que está herdando os valores da "Super Classe" que é User
class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        // Aqui eu estou chamando a super classe quais objetos eu quero user
        super(nome, email, nascimento, role, ativo)
    }
    criarCurso(nomeDoCurso, qtdVagas) {
        return `Curso ${nomeDoCurso} criado com ${qtdVagas} vagas.`
    }
    // Os métodos criados daqui para baixo são exercícios propostos no curso
    excluirCurso(nomeDoCurso) {
        return ` O ${nomeDoCurso} foi descontinuado`
    }
    desativarPerfil() {
        `O perfil do aluno ${this.nome} foi desativado`
    }

}

const novoAdmin = new Admin("Pedro", "r@r.com", "2000-03-02")
console.log(novoAdmin)
console.log(novoAdmin.criarCurso('Java', 20))
console.log(novoAdmin.desativarPerfil())