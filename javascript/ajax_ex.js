function checaIdade(idade) {
    
    return new Promise(function(resolve, reject) {

        if(idade>=18){
            resolve();
        }else{
            reject();
        }
    });
   }


checaIdade(20)
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.log("Menor que 18");
    });

function listarRepos(json){
    var lista = document.querySelector("ul#lista-repos");
    lista.innerHTML = '';
    if(json.status != 200){
        var item = document.createElement("li");
        var textItem = document.createTextNode("Nenhum repositório encontrado");
        item.appendChild(textItem);
        lista.appendChild(item);
    }else{
        var lista = document.querySelector("ul#lista-repos");
        lista.innerHTML = '';
            for(dado of json.data){

                var item = document.createElement("li");
                var textItem = document.createTextNode(dado.name);
                item.appendChild(textItem);
                lista.appendChild(item);

            }
    }
    
}
function criaPreloader(){
    var lista = document.querySelector("ul#lista-repos");
    lista.innerHTML = '';
    var item = document.createElement("li");
    var textItem = document.createTextNode("Carregando...");
    item.appendChild(textItem);
    lista.appendChild(item);
}

function buscarUser(){
    criaPreloader();
    var user = document.querySelector("#username").value;
    axios.get("https://api.github.com/users/"+user+"/repos")
    .then(function(response){
        listarRepos(response);
    })
    .catch(function(error){
        console.log(error);
        listarRepos(error);
    });
}