import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
    
    aprovarEstudante(estudante, curso) {
        return `Aluna ${estudante} foi aprovado no curso de ${curso}, responsável ${this.nome}`
    }

    // Os métodos criados daqui para baixo são exercícios propostos no curso
    reprovarEstudante(estudante, curso) {
        return `Aluno(a) ${estudante} foi reprovada no curso de ${curso}, responsável ${this.nome}`
    }
}

// Uma classe não pode ser instanciada antes de ser declarada, ou seja, primeiro defina e depois instancia
const novoDocente = new Docente('Emanuel', 'e@e.com', '15.03.1992')
// console.log(novoDocente);
// console.log(novoDocente.aprovarEstudante('Juliana', 'Java'))