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

// Juntando 2 objetos em uma variavel com o Object.assign
var Object1 = {
    Nome: "Marcos",
    Idade: 28,
    Estado: "SP"
}

var object2 = {
    Sexo: "Masculino",
    Altura: 1.86,
    Peso: "86kg"
}

var ObejectAssign = Object.assign({}, Object1, object2); // Se deve armazenar em uma nova variavel, depois usar Object.Assign({}, objeto, objeto2) - se cria {} pra dizer que vai ser um novo objeto e apos o nome dos objetos que serao unificados. Se n usarmos {}, ele ira acrescentar ao primeiro Objeto passado, que no exemplo seria Object1 
console.log(ObejectAssign)



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


// tambem temos a opção de usar um OFF no lugar do IN, o off vai percorrer os valores do array a ele referenciado.



// Aprendendo loop WHILE - WHILE significa ENQUANTO



let conteudo2 = '';
let c = 0; // Eu defini um contator, por exemplo. Com o nome de C

while(c <= 5)  // Enquanto esse contador (c) for menor ou = a 10, a condicao dentro de {} vai se repitir.
        { conteudo2 += "Numero: " + c + "</br>";
        c++;

}

document.getElementById("DemoWhile").innerHTML = conteudo2; 


//Ternario em JS


var x = 8
var varNum = x % 2 == 0 ? 'Par' : 'Impar' // após ? se coloca o resultado positivo e após : o negativo. Exemplo. Se o resto de 8/2 for = a 0, entao coloque PAR, se não, IMPAR.

// Manipulando Strings


let nome = "Marcos,Vinicius"

let resultadoLength = nome.length; // Lenght mostra o numero de caracteres a STRING tem, incluindo os espaços.

console.log(resultadoLength); 

let resultadoIndexOF = nome.indexOf("Marcos"); // IndexOF identifica se o parametro colocado em " " se encontra na String e em qual posição. Começando de 0. Se ele n encontrar um resultado, a resposta é -1. 
console.log(resultadoIndexOF);


let resultadoReplace = nome.replace("Vinicius", "Reis"); // replace faz a subistituição. No primeiro parametro fazemos a busca e no segundo damos a substituição. Busquei vinicius e substitui por Reis. Se ele n achar, permanece a original.. *Se atentar a acentos e maiusculas/minusculas.
console.log(resultadoReplace);

let resultadoTrim = nome.trim(); // Função trim() remove os espaços dentro da String antes da primeira palavra e após a ultima. 
    console.log(resultadoTrim);


    // + FUNÇÕES pra usar em STRING


nome.charAt(3) // CharAT mostra a letra que se encontra no parametro que colocar em () que no caso foi 3. mas lembrando que começa a contar em 0. logo 3 é a quarta letra.

nome.substr(4, 2); // substr é usado com 2 paramentros ( ) o primeiro diz em que numero ele começa a procurar o caracter, no caso 3, e o segundo paramentro é quantos caracteres ele vai buscar, no caso 1. A resposta seria: OS - Começou na quinta letra e buscou 2 caracteres.

let resultadoSplit= nome.split(" "); // Split transforma a STRING em ARRAY. o que estiver no parametro () é o que ele vai buscar pra dividir e transformar no conteudo do ARRAY. como usamos um espaço entre " " no paramentro, oq estiver antes e depois dos espaços vira elemento do array. No caso Marcos Vinicius - fica 1 array de 2 elementos [Marcos, Vinicius].
console.log(resultadoSplit);

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

resArrayTeste = ArrayTeste.join('/'); // Manipula o array, transformando ela em String e o que for colocado dentro de ("") sera o divisor de cada palavra.

ArrayTeste.toString(); // Transforma o ARRAY em String, com cada palavra separado por virgula , .
ArrayTeste.pop(); // Elimina o ultimo elemento do ARRAY.
ArrayTeste.shift(); // Elimina o primeiro iten do ARRAY.
ArrayTeste.push('cueca', 'meia') // Push adiciona um elemeneto ao seu array, agora CUECA tabem passa a ser um item do ARRAY.
ArrayTeste[1] = "Chapeus"; // De forma direta, chamando o elemento pelo [], tabem se manipula ele. no exeplo chamei o item 1 e mudei para chapeus. caso eu coloque um numero que nao exista, ele ao inves de substituir, ira criar este item no array.
ArrayTeste.splice(0,1) // SPLICE é usado para remover itens do ARRAY e () se coloca dois paramentros, o primeiro é a posição do item, 0, no segundo é quantos itens vão ser removidos a partir desta posição, coloquei 1, assim somente o item da posição 0 é removido.

ArrayTeste.sort( ) // coloca os itens do ARRAY em ordem alfabetica
ArrayTeste.reverse( ) // Se usado após o SORT, faz ficar em ordem alfabetica reversa

console.log(resArrayTeste);
console.log(ArrayTeste);

let SliceTeste = "Marcos";
let SliceTeste1 = SliceTeste.slice(0,3); // Slice ira pegar parte da string direcionado a ela, o primeiro parametro é a posicção de inicio, no caso 0, e o segundo é quantas "letras" ele vai buscar. se for negativo, começa da esquerda pra direita e se da somente o numero de casas, ficando slice(-3), vai pegar as 3 ultimas letras da direita pra esquerda.
console.log(SliceTeste1);



// Aprendendendo funções matematicas em JS -- Math -


let novoValor = Math.round(4.77); // round arredonda o valor, se a casa decimal for maior que 5, ele arredonda pra mais, se for menor que 5, ele vai arredondar pra menos
novoValor = Math.floor(3.67); // floor força o arredondamento para baixo, mesmo se a casa decimal for maior que 5.
novoValor = Math.ceil(3,23); // ceil força o arredondamento para cima, indepedente do valor na casa decimal.
novoValor = Math.min(7,10,20,2,30) // min, ira mostrar qual o menor numero entre todos os que se encontram no ()
novoValor = Math.max(7,10,20,2,30) // max, ira mostar qual o maior numero entre todos os que se encontram no ()
novoValor = Math.random(); // random faz com q mostre um numero aleatorio entre 0 e 1. 
novoValor = Math.random() * 10; // Desta forma, ele vai me gerar um numero aleatorio entre 0 e 9 porem vai usar as casas decimais.
novoValor = Math.floor(Math.random() * 10); // Desta forma, ele vai me gerar um numero aleatorio entre 0 e 9. arredondado.

console.log(novoValor);

const numbers = [10, 20, 37, 61, 2, 89, 4];
const min = Math.min(...numbers);
const max = Math.max(...numbers);
     
console.log(min, max);




// Trabalhando com intervalos em JS

let timer;

function comecar(){
    timer = setInterval(showTime, 1000) // setInterval é uma funcao prorpia do JS pra se trabalhar com timer, (), o primeiro paramentro recebe a função a ser executada (Showtime), e o segundo é de qnto em qnto tempo em q vai ser atualizado tal funcao, em milesegundos, no caso 1S = 1000 ms.
}

function parar(){
    clearInterval(timer) // Clear interval é uma funcao do JS que faz parar o evento do SetInterval, dentro de () vc passa o paramentro a ser interrompido. 
}

function showTime() {
    let d = new Date(); // me da acesso a data, dessa forma ele pega a hora atual do navegador, e mostra de forma completa, fuso dia, etc.
    let h = d.getHours(); // pega a hora atual com base no new date()
    let m = d.getMinutes();  // pega o minuto atual com base no new date()
    let s = d.getSeconds(); // pega os segundos atual com base no new date()
    let txt = `${h}:${m}:${s}`;

    document.querySelector("#IntervalosJS").innerHTML = txt;
}


// setTimeout() // funcao que espera um determinado tempo pra começar a executar a função. Dentro do paramentro passamos a função a ser executada e depois o tempo que vai levar pra ela começãr a ser executada. Ficando assim: setTimeout(funcao, tempo em Milesegundos).
// clearTimeout() // Interrempe a função do SerTimeout, em () é passado a variavel que representa o setTimeout a ser interrompido.



// Descontruindo Objetos em JS


let PessoaObject = {
    nome1: 'Marcos',
    sobrenome: 'Reis',
    idade: 28,
    social: {
        facebook: 'MarcosReis',
        Instagram: "Marcos_Reis"
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
};   

let { nome1:nome3, sobrenome, idade=0 } = PessoaObject; // para desconstruir, eu coloco em {} todos os elementos que eu quero do objeto e depois de = eu uso o nome do objeto referido. quanto eu uso : após o nome do elemento, eu estou renomeando ele, no caso nome1 passou a ser nome3. e idade, passou a ter valor padrao de 0. Se n tiver uma idade definida o padrao é utilizado.

console.log(`meu nome é: ${nome3} ${sobrenome}, e eu tenho ${idade} anos.`);


// Desconstruir um Array em JS

let DesconstruirArray = ["Arthur", "Souza", "2"]

let [nome4, sobrenome4, idade4] = DesconstruirArray // Para descontruir um ARRAY eu tenho que dar um nome pra cada elemento, na ordem que ele aparece. caso eu n queira pegar algum elemento, eu deixo o espaço dele em branco entre , , (virgulas) = [nome4, , idade4] dessa forma ele n pegaria o souza.

console.log(nome4, sobrenome4, idade4)


function parimpar(n5){
    return n5 % 2 == 0 ? "par" : "impar"
    
}

let res2 = parimpar(22);

console.log(res2);




// Arrow Functions



// funções tambem podem ser escritas da seguinte forma

let somar3 = (x, y) => x + y; // Se ela for feita apenas uma ação, n preciso do {} e nem do return, mas caso eu use {}, o return passa a ser obrigatorio.

console.log(somar3(5,7))

let subtrair4 = (x=0, y=0) => { // Posso deixar pre definido os parametros, para caso ele n seja enviado, receber um valor padrao. no caso foi 0.
    return x - y;
}
console.log(subtrair4(2,6))


// Operador Spread - tem o objetivo de juntar dois array ou objetos, tornando um só.

let numeros2 = [1,2,3,4];

let outros2 = [...numeros2,5,6,7,8] // o Spread é representado por 3 pontos ... junto com o nome da variavel que vai ser acrescida, no caso colocamos numeros2, junto a outros2.

console.log(outros2);

// Spread em objetos

let info2 = {
    nome: "Maria Isabel",
    idade: 28,
    };

let info2Spread = {
    ...info2, // acrescentamos o objeto desejado atraves dos ...
    cidade: "São José dos Campos",
    estado: "São Paulo"
}

console.log(info2Spread);


// Usando REST - Rest permita que recebamos varios itens como parametros, tantos quantos o usuario mandar, ele tbm é representato pelos 3 pontos ..., porem ele é passado no parametro ().




function adicionar2(nomes, ...novosNomes) {
 let rest2 = [
     ...rest1,
     ...novosNomes
 ];
    return rest2
    
}

let rest1 = ["Marcos", "Isabel", "Arthur"]

let resNovo = adicionar2(rest1, "Carla", "Katia", "Vivaldo", "Ana")

console.log(resNovo); 

// outra forma de fazer

let nomes4= ['Bonieky', 'Paulo'];

adicionar = (...novosNomes) => {
    nomes4 = [...nomes4, ...novosNomes];
}

adicionar('antonio','maria','pedro');

console.log(nomes4);


//String padStart e padEnd

let StringPad = "56"

console.log( StringPad.padEnd(5, "*"));
console.log(StringPad.padStart(4, "-")) // O primeiro paramento eu digo o minimo de casas minha String deve ter, usei 5, no segundo eu digo qual letra, simbolo, etc, sera usado para completar o numero dito anteriormente, caso a string original nao atinja o valor. foi passado *, ficando 5 casas, 56*** = 56 + 3x o * pra comprar as 5 casas. o END diz pra preencher as ultimas casas. o Start as primeiras.



// Aprendendo manipular JSON em JS

let JsonTest = { 
    nome: "Arthur",
    Idade: 2,
    Sexo: "Masculino"
}

let JsonParse = JSON.stringify(JsonTest); // JSON.stringify - transforma o objeto em STRING JSON = {"nome":"Arthur","Idade":2,"Sexo":"Masculino"} -- Dentro da proprieda eu passo a variavel a ser tratada

console.log(JsonParse);

// Passando de String JSON para Objeto

let JsonString = '{"nome":"Marcos","Idade":28,"Sexo":"Masculino"}';

let ResJsonString = JSON.parse(JsonString);

console.log(ResJsonString);


// Promise em JS

function pegarTemperatura() {
    return new Promise(function(resolve, reject){
        console.log("pegando Temperatura");

        setTimeout(function(){
            resolve("40 na sombra")}, 2000);
        })
    
}

let temp = pegarTemperatura();

temp.then(function(resultado){
    console.log("A temperatura atual é: " + resultado)
})

console.log(temp) 

// Fetch em JS


// DAQUI

 function LoadPosts() {
    document.getElementById("posts").innerHTML = "carregando";

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (resultado){
            return resultado.json();
        })

        .then(function(json){
            montarblog(json);
        })

        .catch(function(eror){
            console.log("Deu problema!");
        });
}

// ATE AQUI, pode ser substituido, usando async e await. conforme a func LoadPostsAsync

    function montarblog(lista){
        let html = "";

        for(let i in lista){
            html += "<h3>"+lista[i].title+"</h3>";
            html += lista[i].body+"<br/>"
            html += "<hr/>"
        }

        document.getElementById("posts").innerHTML = html;


    }

  // USando async e await

  async function LoadPostsAsync() {
    document.getElementById("posts2").innerHTML = "carregando";

    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let Json = await req.json();

    montarblog2(Json);

}

function montarblog2(lista){
    let html = "";

    for(let i in lista){
        html += "<h3>"+lista[i].title+"</h3>";
        html += lista[i].body+"<br/>"
        html += "<hr/>"
    }

    document.getElementById("posts2").innerHTML = html;
} 

//Thumbnails em JS

function mostrar1(){
    let reader = new FileReader;
    let imagem = document.getElementById('imagem1').files[0];

    reader.onloadend = function (){
        let imag = document.createElement('img');
        imag.src = reader.result;
        imag.width = 200;

        document.getElementById("AreaIMG").appendChild(imag); 
    }

    reader.readAsDataURL(imagem)

}

// Iniciando os estudos na faculdade cruzeiro do SUL.

// Semana de provas

// Fazendo o projeto de pizzas

// Reforçando os conceitos

// Semana JS Roger Mello

// LIVE Marco Bruno

// DevMedia

// Origamid

// Curso Udemy

// Stack - JS - React - Node s2

// Reforçando conceitos

// Te amo vó - 

// Voltando aos estudos.

// Teste

// Retomando os estudos.

// 02/06/2021 - Velorio da minha linda avó. Te amo

// descansando em memoria da minha vó.

//teste

// Retomando as aulas Cod3r Br ....
// JS > React > Node - Preciso focar

// Curso WebModerno JS

// Dia de ficar com o Arthur =)

// Coder BR

// Retomando 

// JS Mais um dia

// Revisao JS

// Revendo conceitos 
