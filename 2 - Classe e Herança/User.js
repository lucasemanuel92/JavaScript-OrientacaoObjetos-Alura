// É uma forma de enviar essa classe de forma padrão
export default class User {
    // Para que o atributo seja privado é necessário fazer essa sintaxe
    #nome 
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    }
    get nome() {
        return this.#nome
    }

    #montaObjUser() {
        return ({
            nome: this.#nome, 
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo,
        })
    }

    exibirInfos() {
        const objUser = this.#montaObjUser()
        return `${objUser.nome}, ${objUser.email}`
    }
    // Os métodos criados daqui para baixo são exercícios propostos no curso
    criarPerfil() {
        return `O perfil de ${this.nome}\n email: ${this.email}\n Nascimento: ${this.nascimento}\n ${this.role}\n ${this.ativo}
        foi criado com sucesso`
    }

    apagarPerfil() {
        return `O perfil do ${this.nome} foi deletado com sucesso`
    }

    exibirListaCursos(cursos) {
        return `O aluno ${this.nome} está matriculada nos cursos de ${cursos}`
    }

    matricularCurso(cursoMatriculado) {
        return `${this.nome} está matriculado corretamente no ${cursoMatriculado}`
    }

    exibirCursosMatriculados(cursosMatriculados) {
        return `${this.nome} está matriculado nos cursos ${cursosMatriculados}`
    }
}

// const novoUser = new User('Lucas', 'l@l.com', '15.03.1992');
// // Vai Exibir todas as infos da classe User
// console.log(novoUser);
// // Vai exibir apenas as infos da função exibir classe
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser));
// console.log(novoUser.exibirListaCursos())