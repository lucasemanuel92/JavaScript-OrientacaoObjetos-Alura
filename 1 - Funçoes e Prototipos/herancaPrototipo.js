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

// Essa forma é de pegar propriedades de outro lugar
Object.setPrototypeOf(admin, user); // Object.setPrototypeOf(QUEM HERDA, QUEM PASSA A HERANÇA)
admin.criarCurso();
admin.exibirInfos();