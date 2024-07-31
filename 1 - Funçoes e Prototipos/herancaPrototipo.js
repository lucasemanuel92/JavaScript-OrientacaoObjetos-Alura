const user = {
    nome: "Lucas",
    email: "l@l.com",
    nascimento: "1992-03-14",
    role: "estudante",
    ativo: true, 
    exibirInfos: function () {
        console.log(this.nome, this.email)
    },
};
user.exibirInfos();

const admin = {
    nome: "Emanuel",
    email: "e@e.com",
    nascimento: "1992-03-14",
    role: "admin",
    ativo: true, 
    criarCurso: function() {
        console.log("Curso Criado");
    }
};

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();