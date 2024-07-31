const user = {
    nome: "Lucas",
    email: "l@l.com",
    nascimento: "1992-03-14",
    role: "estudante",
    ativo: true, 
    exibirInfos: function () {
        console.log(this.nome, this.email)
    }
}

const exibir = function() {
    console.log(this.nome, this.email)
}

const exibirNome = exibir.bind(user)
exibirNome();