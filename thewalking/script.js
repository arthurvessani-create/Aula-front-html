console.log("Sobrevivente conectado ao Dom!");
const cabecalho = document.querySelector('header');
console.log(cabecalho);

const btnTema = document.querySelector('#btn-tema');
const boasVindas = document.querySelector('#boas-vindas');
const tituloSite = document.querySelector('header-h1');
const listaBeneficios = document.querySelectorAll('ol li');
console.log(listaBeneficios.lenght);

const campoNome = document.querySelector('input[type="text"]');
const campoEmail = document.querySelector('input[type"email"]');

tituloSite.textContent('The Walking Date');
const citacao = document.querySelector('pessoa').innerHTML("- <strong>Zezinho da Foise</strong>, Sobrevivente Nível 5");
const textoBoasVindas = document.querySelector('#boas-vindas p').textContent;
console.log(textoBoasVindas)

const dicas = document.querySelector('aside');
dicas.style.bordaColor = 'var(--cor-sangue)';
dicas.style.fontSize = '1.1rem';

const imagem1 = document.querySelector('img');
    
