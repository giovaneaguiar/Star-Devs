const persons = document.getElementById('persons');
const starships = document.getElementById('starships');
const planets = document.getElementById('planets');

function fillCounters(){


};

function getData(param){  
 return fetch('https://swapi.dev/api/${param}')
 .then(res => res.json());
};