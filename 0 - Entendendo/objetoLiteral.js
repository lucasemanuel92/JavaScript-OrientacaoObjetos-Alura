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

// Essa função traria respostas "undefined" uma vez que nome e email não estão definidos nessa constante
const exibir = function() {
    console.log(this.nome, this.email)
}

// O "bind()" é um método que atrela o objeto "exibir" ao objeto "user"
const exibirNome = exibir.bind(user) // O "bind()" é um método que atrela o objeto "exibir" ao objeto "user"
exibirNome();