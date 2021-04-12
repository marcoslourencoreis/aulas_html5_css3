// Formas de selecionar os elementos:

//Importante repeitar letras maisculas e minusculas.

// document.getElementByID("nome do ID")    Seleciona pelo ID
// document.getElementsByClassName("nome da class")   Seleciona pela Class
// document.getElementsByTagName("nome da tag")       Seleciona atraves da TAG
// document.getElementsByName("Se usa o name") por exemplo: input name=Esse name que ele busca

//para fazer alteração, se da o seguinte codigo:
// documents.getElementsClassName("nome da class")[0].innerHTML = "escreva a alteração";

//No codigo acima o q vai dentro de [ ] é o numero do elemento, contagem começa em 0, e após o innerHTML = " " - o que for colocado dentro de " " é que vai vir a substituir o elemento selecionado.


// document.querySelector(" ") com query podemos selecionar IDs, Classes. basta colocar . ou #
// document.querySelectorAll (" ") Seleciona todos os elementos do seguimento selecionado.

function green() {
    document.querySelector("#container").classList.remove("azul");
    document.querySelector("#container").classList.remove("vermelho"); 
    document.querySelector('#container').classList.add('verde');
}

function red() {
    document.querySelector("#container").classList.remove("azul");
    document.querySelector("#container").classList.remove("verde");
    document.querySelector("#container").classList.add("vermelho");
}


function blue() {
    document.querySelector("#container").classList.remove("verde");
    document.querySelector("#container").classList.remove("vermelho");
    document.querySelector("#container").classList.add("azul");
}


function somar (x, y) {
    let total = x + y;
    return total;
}

// Manipulando Imagens com JS

function trocarImagem(filename, animalName) {
    document.querySelector('.imagem').setAttribute('src', './'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalName);

}

function qualAnimal(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert("O Animal é: " + animal);
}

//Criando botao scroll JS

function subirTela() {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}

function scroll() {
    if(window.scrollY === 0) {
        document.querySelector('.buttom').style.display = 'none'; //Se usa STYLE pra acessar o CSS do elemento.
    } 
    else { document.querySelector('.buttom').style.display = 'block';
    }
}

//criando função que verifica o scrol pra ativar ou nao a funcao criada acima.

window.addEventListener('scroll',scroll);


