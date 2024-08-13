import User from "./User.js";

// Essa é uma subclasse que está herdando os valores da "Super Classe" que é User
class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        // Aqui eu estou chamando a super classe quais objetos eu quero user
        super(nome, email, nascimento, role, ativo)
    }
}

const novoAdmin = new Admin("Pedro", "r@r.com", "2000-03-02")
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())