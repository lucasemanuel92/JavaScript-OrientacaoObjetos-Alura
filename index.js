// Importar de outras classes
import User from "./2 - Classe e Herança/User.js";
import Admin from "./2 - Classe e Herança/Admin.js";
import Docente from "./2 - Classe e Herança/Docente.js";

const novoUser = new User('Lucas', 'a@a.com')
console.log(novoUser.exibirInfos());

// Não é uma boa idéia deixar os atributos serem alterados
// O nome não é mais possível de ser acessado porque tem #nome na classe User
// Não é possível acessar daqui com #nomr
novoUser.#nome = 'Pedro';
console.log(novoUser.exibirInfos());
console.log(novoUser.nome)