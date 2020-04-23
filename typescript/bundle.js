"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({}, usuario, {
  nome: "Gabriel"
});

console.log(usuario2);

var usuario3 = _objectSpread({}, usuario, {
  endereco: {
    cidade: "Lontras",
    uf: usuario.endereco.uf,
    pais: usuario.endereco.pais
  }
});

console.log(usuario3); // questão 06
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
// class List {
//     constructor(){
//         this.data = []
//     }
//     add(data){
//         this.data.push(data)
//         console.log(this.data)
//     }
// }
// class TodoList extends List{
//     constructor(){
//         super();
//         this.usuario = "Tássio";
//     }
//     mostraUsuario(){
//         console.log(this.usuario)
//     }
// }
// var MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.add("Novo ToDo")
//     MinhaLista.mostraUsuario();
// }
// const arr = [1,2,3,4,5,8,9]
// const newArr = arr.map(function(item, index){
//     return item * index;
// });
// const sum = arr.reduce(function(total, next){
//     return total + next
// })
// const filter = arr.filter(function(item){
//     return item % 2 === 0
// })
// const find = arr.find(function(item){
//     return item === 4
// })
// const arr = [1,2,3,4,5,8,9]
// console.log(arr)
// const newArr = arr.map(item =>  item * 2)
// console.log(newArr)
// REST (RESTO)
// const usuario = {
//     nome: "Tássio",
//     idade: 30,
//     empresa: "IF Sertão PE"
// }
// const {nome, ...resto} = usuario
// console.log(nome)
// console.log(resto)
// function soma(...params){
//     return params.reduce((total, next)=> total + next)
// }
// console.log(soma(5,9, 10))
// // SPREAD passa um array para outra estrutura de dados
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const arr3 = [...arr1, ...arr2]
// console.log(arr3)
// const usuario2 = {...usuario, nome: "Gonçalves"}
// console.log(usuario2)
// const nome = "Tássio"
// const idade = 30
// console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
// const usuario = {
//     nome,
//     idade,
//     empresa: "IF Sertão PE"
// }
// console.log(usuario)
"use strict";
