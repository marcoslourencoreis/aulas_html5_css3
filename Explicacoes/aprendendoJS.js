// Formas de selecionar os elementos:

//Importante respeitar letras maisculas e minusculas.

// document.getElementByID("nome do ID")    Seleciona pelo ID
// document.getElementsByClassName("nome da class")   Seleciona pela Class
// document.getElementsByTagName("nome da tag")       Seleciona atraves da TAG
// document.getElementsByName("Se usa o name") por exemplo: input name=Esse name que ele busca

//para fazer alteração, se da o seguinte codigo:
// documents.getElementsClassName("nome da class")[0].innerHTML = "escreva a alteração";

//No codigo acima o q vai dentro de [ ] é o numero do elemento, contagem começa em 0, e após o innerHTML = " " - o que for colocado dentro de " " é que vai vir a substituir o elemento selecionado.


// document.querySelector(" ")  ... com query podemos selecionar IDs, Classes. basta colocar . ou #
// document.querySelectorAll (" ") ... Seleciona todos os elementos do seguimento selecionado.




//Alterando a classe de um elemento / mudando o background.



function green() {
    document.querySelector("#container").classList.remove("azul"); //classList é referente a classe do elemento, no caso de #Container
    document.querySelector("#container").classList.remove("vermelho"); //A classe foi criada em CSS e adicionada ao elemento pelo JS
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

function remove() {
        document.querySelector("#container").classList.remove("verde");
        document.querySelector("#container").classList.remove("vermelho");
        document.querySelector("#container").classList.remove("azul");
}





//aprendendo sobre return




function somar (x, y) {
    let total = x + y;
    return total; // é important usar o return pra que ele guarde o valor da variavel desejada, pra que assim possamos usa-la
}





// Manipulando Imagens com JS





function trocarImagem(filename, animalName) { //os nomes que eu der dentro de()vao representar os atributos colocados no HTML respectivo
    document.querySelector('.imagem').setAttribute('src', './'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalName);

}

function qualAnimal(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert("O Animal é: " + animal);
}




//Criando botao scroll JS





function subirTela() {
    window.scrollTo({ // da a direção do Scroll
        top:0,
        behavior: 'smooth' // comportamento = suave
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

// Trabalhando com Eventos no TECLADO JS

function digitou(e) {
if(e.keyCode == 13){ // keycode representa o codigo da letra, cada letra do teclado tem seu respectivo codigo 13=ENTER
 let texto = document.getElementById('campo').value;
console.log(texto);
} 
}




//treinando JS mostrar e ocultar telefone




function mostrarTelefone() {
    if( document.getElementById('telefone').style.display == 'none') {
        document.querySelector('#telefone').style.display = 'block'; 
    } 
    else { document.querySelector('#telefone').style.display = 'none';
    }
}
mostrarTelefone(); // Executando a Funcção


// Arrays em JS - Arrays sao um conjunto de informações dentro de uma mesma variavel

let ingredientes = [ 'arroz', 'macarrao', 'feijao'];//o Array é identificado por [] e cada item deve ficar dentro de '' e separado por ,

let ingredientes2 = [
    ['pao', 'farinha', 'trigo'], // é possivel ter array dentro de array, seja quantas forem, mas deve separar cada [] com ,
    ['ovos', 'oleo', 'vinagre']
];

console.log(ingredientes2 [1][0]); // o primeiro [1] representa o array dos ovos e o [0] representa o item dentro deste array. contagem começa sempre em 0. 




//Objetos em JS





//Objetos sao semalhantes a arrays, podem receber mais de uma propriedade, mas ele é nominal e não numeral e se abre com {}

let carro = {
    montadora: 'fiat', // usa-se : e depois se coloca em '' e separa por ,
    modelo: 'uno',
    ano: '2010',
    ligar:function(){ //é possivel criar funções dentro de objetos e tbm em arrays.No caso o nome vem antes de function= ligar:function()
        console.log('O carro Ligou')
    }
};

console.log("modelo: " + carro ['modelo']); // pra mostrar eu chamo pelo nome que eu dei, no caso quero que apareça UNO que dei nome de MODELO.
console.log(carro.ano); // Tambem é possivel acessar atraves do . (ponto) exemplo: (carro.ano) > carro representa o objeto e ano, o valor que quero acessar dentro de objeto.

console.log("ANO: "+ carro.ano); // Tambem é possivel concatenar pra que tenha uma Sring + o valor que queremos acessar.

carro.ligar(); // pra acessar a função primeiro eu chamo o objeto (carro) e depois a função que eu quero, no caso foi ligar. ficando: carro.ligar();


// APRENDENDO SWITCH - SWITCH é similar ao IF, porem ele é mais usado quanto se precisa mais de uma opção pra uma mesma varialvel.



let dia = 6;
let diaNome = "";

switch(dia) { // Após SWITCH, dentro de () colocamos a variavel que vai ser verificada.
    case 1: // cada verificação se coloca em case, após case o nome que ela vai representar e depois o valor que vai receber.
        diaNome = 'Segunda-Feira';
        
        break; // Todo case, deve ter seu break subsequente.
    case 2:
        diaNome = 'Terça-Feira';

    case 3:
        diaNome = 'Quarta-Feira';
        
        break;
    case 4:
        diaNome = 'Quinta-Feira';

    case 5:
        diaNome = 'Sexta-Feira';
        
        break;
    case 6:
        diaNome = 'Sábado';

    case 7:
        diaNome = 'Domingo';
        
        break;
}

document.getElementById('dia').innerHTML =  "hoje é: "+diaNome;

${}; // Também é uma forma de uso pra "somar" e "concatenar".

Number() // forma de transformar variavei em numeros, ele converte automaticamente para reais ou inteiros. substitui o int e Float.

Number.parseFloat(); // Transforma a variavel em numero real
Number.parseInt(); // Transforma a variavel em numero Inteiro
toString() // transforma a variavel em String