const attNames = ['HP', 'Atk', 'Def', 'Sp Atk', 'Sp Def', 'Spd'];
let name;
let plus;
let minus;
let value;

const init = (pokemonName, statName) => {
  this.pokemonName = pokemonName;
  this.statName = statName;
}

const pokemonCounter = (name) => {
  console.log(name);
  let attributes = [ 0, 0, 0, 0, 0, 0 ];
}

const increment = (name) => {
  value.innerHTML = value + 1;
}

const decrement = (name) => {
  const val = document.getElementById('bulbasaur-hp-value');
  console.log(val.innerText);
  console.log(val.innerHTML);
  // if ()
  // value.innerHTML = val.innerText - 1;
}