
//https://swapi.dev/about

//http://swquotesapi.digitaljedi.dk/index.html

//criando variaveis com o id do html
const persons = document.getElementById('persons');
const starships = document.getElementById('starships');
const planets = document.getElementById('planets');

//chama funcao principal
fillCounters();

//funcao principal do js
function fillCounters(){
Promise.all([
    getData('people/'),
    getData('starships/'),
    getData('planets/')
])
.then(data => {
// tamanho das fontes nas caixas certas
      persons.style.fontSize = '5em';
      starships.style.fontSize = '5em';
      planets.style.fontSize = '5em';
// mudar conteúdo das caixas certas
      persons.innerHTML = data[0].count;
      starships.innerHTML = data[1].count;
      planets.innerHTML = data[2].count;
})
.catch(err => console.log('Erro: ', err))
}

//"anexando o fetch"
function getData(param) {  
return fetch(`https://swapi.dev/api/${param}`)
          .then((res)=> res.json());
}

//funcao para copiar uma frase
function loadPhrase(){
    //cria consts para ter acesso ao botao
    const btn = document.getElementById('btn-phrases');
    const phrase = document.getElementById('phrase');

    //fazer requisição em cima da url 
    return fetch('https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
       .then (data => data.json())
       .then (json =>{ 
           console.log(json);
           btn.innerHTML = 'Ver mais uma frase!';
           phrase.innerHTML = ``

       })
    .catch (err => console.log('Erro: ', err))

};