"use strict";

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
var arr = [1, 2, 3, 4, 5, 8, 9];
console.log(arr);
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
