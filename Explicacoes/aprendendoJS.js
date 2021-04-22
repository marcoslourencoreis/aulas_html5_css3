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







 //${dia}; // Também é uma forma de uso pra "somar" e "concatenar".

 let numbersTeste = 10.6560
 

Number() // forma de transformar variavei em numeros, ele converte automaticamente para reais ou inteiros. substitui o int e Float.

Number.parseFloat(numbersTeste); // Transforma a variavel em numero real - a variavel que vai ser transformada é colocada dentro de ()
Number.parseInt(numbersTeste); // Transforma a variavel em numero Inteiro - a variavel que vai ser transformada é colocada dentro de ()
numbersTeste.toString() // transforma a variavel em String.numbersTeste.toString() // transforma a variavel em String.
numbersTeste.toFixed(2) // dentro de () se coloca o numero de casa decimais que desejamos. no numero 10.65430, seria mostrado 10.65.
numbersTeste.toString() // transforma a variavel em String.
// manipulando Arrays

let ArrayTeste = ['sapato', 'camisa', 'chapeu', 'boné'];
console.log(ArrayTeste);

let resArrayTeste = ArrayTeste;

resArrayTeste = ArrayTeste.join('/'); // Manipula array, transformando ela em String e o que for colocado dentro de ("") sera o divisor de cada palavra.

ArrayTeste.toString(); // Transforma o ARRAY em String, com cada palavra separado por virgula , .
ArrayTeste.pop(); // Elimina o ultimo elemento do ARRAY.
ArrayTeste.shift(); // Elimina o primeiro iten do ARRAY.


console.log(resArrayTeste);


// Aprendendo FOR 



let texto = "";


// Dentro de () se coloca uma variavel auxilliar (i), que sera responsavel sobre a contagem do numero de repetições, em seguida se da a condição pelo qual ela vai se repetir e por ultimo a soma que i recebe


for(let i = 1; i <= 5; i++) {
 texto = texto + i + "<br/>";
}

document.getElementById("DemoFor").innerHTML = texto; 





// APRENDENDO FOR ARRAY

let CarrosArray = ['Gol', 'Onix', 'ka']; // Criando o ARRAY

let conteudo = "<ul>";

for(let x in CarrosArray) { // o in, faz com que o x se repita pelo numero de conteudo que tenha em CarrosArray, no caso 3x(GOL ONIX KA)
    conteudo += "<li>" + CarrosArray[x]  + "</li>"; // em CarrosArray[x] o x faz com que ele mostre cada elemento que foi definido em CarrosArray
}

conteudo += "</ul>"; 

document.getElementById("DemoArray").innerHTML = conteudo; 






// Aprendendo loop WHILE - WHILE significa ENQUANTO

let conteudo2 = '';
let c = 0; // Eu defini um contator, por exemplo. Com o nome de C

while(c <= 5)  // Enquanto esse contador (c) for menor ou = a 10, a condicao dentro de {} vai se repitir.
        { conteudo2 += "Numero: " + c + "</br>";
        c++;

}

document.getElementById("DemoWhile").innerHTML = conteudo2; 




// Manipulando Strings


let nome = "Marcos,Vinicius"

let resultadoLength = nome.length; // Lenght mostra o numero de caracteres a STRING tem, incluindo os espaços.

console.log(resultadoLength); 

let resultadoIndexOF = nome.indexOf("Marcos"); // IndexOF identifica se o parametro colocado em " " se encontra na String e em qual posição. Começando de 0. Se ele n encontrar um resultado, a resposta é -1. 
console.log(resultadoIndexOF);


let resultadoReplace = nome.replace("Vinicius", "Reis"); // replace faz a subistituição. No primeiro parametro fazemos a busca e no segundo damos a substituição. Busquei vinicius e substitui por Reis. Se ele n achar, permanece a original.. *Se atentar a acentros e maiusculas/minusculas.
console.log(resultadoReplace);

let resultadoTrim = nome.trim(); // Função trim() remove os espaços dentro da String antes da primeira palavra e após a ultima. 
    console.log(resultadoTrim);


    // + FUNÇÕES pra usar em STRING


nome.charAt(3) // CharAT mostra a letra que se encontra no parametro que colocar em () que no caso foi 3. mas lembrando que começa a contar em 0. logo 3 é a quarta letra.

nome.substr(4, 2); // substr é usado com 2 paramentros ( ) o primeiro diz em que numero ele começa a procurar o caracter, no caso 3, e o segundo paramentro é quantos caracteres ele vai buscar, no caso 1. A resposta seria: OS - Começou na quinta letra e buscou 2 caracteres.

let resultadoSplit= nome.split(" "); // Split transforma a STRING em ARRAY. o que estiver no parametro () é o que ele vai buscar pra dividir e transformar no conteudo do ARRAY. como usamos um espaço entre " " no paramentro, oq estiver antes e depois dos espaços vira elemento do array. No caso Marcos Vinicius - fica 1 array de 2 elementos [Marcos, Vinicius].
console.log(resultadoSplit);




//Ternario em JS

var x = 8
var varNum = x % 2 == 0 ? 'Par' : 'Impar' // após ? se coloca o resultado positivo e após : o negativo. Exemplo. Se o resto de 8/2 for = a 0, entao coloque PAR, se não, IMPAR.



