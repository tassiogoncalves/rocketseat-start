// // Questão 01
// class Usuario{
//     constructor(email, senha ){
//         this.email = email
//         this.senha = senha
//     }
//     isAdmin(){
//         return this.admin ? true : false;
//     }
// }

// class Admin extends Usuario{
//     constructor(){
//         super();
//         this.admin = true;
//     }

// }

// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true

// // Questão 02

// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ];
// const idadeUsers = usuarios.map(item => item.idade)
// console.log(idadeUsers)

// const usersRock = usuarios.filter(item => item.empresa == "Rocketseat" && item.idade > 18)
// console.log(usersRock)

// const usersGoogle = usuarios.find(item => item.empresa == "Google")
// console.log(usersGoogle)

// const usersUnion = usuarios.filter(function(item){
//     item.idade *= 2
//     return item.idade < 50
// })
// console.log(usersUnion)

// // Questão 03
// // 3.1
// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr.map(item => item + 10)
// console.log(arr)
// console.log(arr2)

// // 3.2
// // Dica: Utilize uma constante pra function
// // const usuario = { nome: 'Diego', idade: 23 };
// // const mostraIdade = (usuario) => usuario.idade
// // console.log(mostraIdade(usuario))

// // 3.3
// // Dica: Utilize uma constante pra function
// // const nome = "Tássio";
// // const idade = 23;
// // const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade })
// // console.log(mostraUsuario(nome, idade))
// // console.log(mostraUsuario(nome))
// // console.log(mostraUsuario())

// //3.4 
// // const promise = function() {
// //     return new Promise(function(resolve, reject) {
// //     return resolve();
// //     })
// //    }
// const promise = () =>  new Promise((resolve, reject) => resolve())

// console.log(promise)

// Questão 4

// const empresa = {
//     nome: 'Rocketseat',
//     endereco: {
//         cidade: 'Rio do Sul',
//         estado: 'SC',
//         }
// }

// const {nome, endereco:{cidade, estado} } =  empresa
// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC

// // 4.2
// function mostraInfo({nome, idade}) {
//     return `${nome} tem ${idade} anos.`;
//    }

// console.log(mostraInfo({ nome: 'Diego', idade: 23 }))

//Questão 05

//5.1 Rest

// const arr = [1, 2, 3, 4, 5, 6]
// const [ x, ...y] = arr
// console.log(x); // 1
// console.log(y); // [2, 3, 4, 5, 6]

// function soma(...item){
//     return item.reduce((item, next) => item += next)
// }

// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3

//5.2 Spread
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
}

const usuario2 = {
    ...usuario,
    nome: "Gabriel"
}
console.log(usuario2)

const usuario3 = {...usuario, endereco: {cidade: "Lontras", uf: usuario.endereco.uf, pais: usuario.endereco.pais}}
console.log(usuario3)

// questão 06
// const user = 'Diego';
// const age = 23;
// console.log(`O usuário ${user} possui ${age} anos`);

// //Questao 07

// const nome = 'Diego';
// const idade = 23;
// const usuario5 = {
//  nome,
//  idade,
//  cidade: 'Rio do Sul',
// };

// console.log(usuario5)