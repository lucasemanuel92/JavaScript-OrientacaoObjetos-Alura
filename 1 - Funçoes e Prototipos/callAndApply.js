// Estudos das anotações do curso
// MÉTODO "CALL"
function exibirInfos() {
    console.log(this.nome, this.email);
}

const user = {
    nome: "Lucas",
    email: "l@l.com"
};

// O método "call()" chama o objeto user para dentro da função;
exibirInfos.call(user);


// Executando a função mesmo depois de instanciada
function User(name, email) {
    this.name = name;
    this.email = email;

    this.exibeInfo = function() {
        console.log(this.name, this.email);
    }
}

const newUser = new User("Lucas", "l.@lu");
newUser.exibeInfo();

const outroUser = {
    name: "Emanuel",
    email: "e@e.com",
}

newUser.exibeInfo.call(outroUser);

// Usar ".call()" dentro de uma função
 function exibirMensagem(nome, email) {
    console.log(`usuário: ${nome}, email: ${email}`)
 };

 const USer = {
    nome: "Oliveira",
    email: "o@o.com",
    executarFuncao: function(fn) {
        fn.call(user, this.nome, this.email)
    }
 }

 USer.executarFuncao(exibirMensagem);

 // MÉTODO "APPLY"
 // Funciona da mesma forma que o ".call()", mas recebe um array
 function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
   }
    const USER = {
    nome: 'Carvalho',
    email: 'c@ca.com',
    executaFuncao: function(fn) {
      fn.apply(user, [this.nome, this.email])
    }
   }
    USER.executaFuncao(exibeMensagem)