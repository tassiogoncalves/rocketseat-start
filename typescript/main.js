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