const newEvCounter = () => {
  const pokemonNameTextBox = document.getElementById('add-pokemon-text');
  const pokemonName = pokemonNameTextBox.value;
  pokemonNameTextBox.value = '';

  const evCounter = document.createElement('div');
  evCounter.className = 'ev-counter';

  const pokemonNameElem = document.createElement('div');
  pokemonNameElem.className = 'pokemon-name';
  pokemonNameElem.innerText = pokemonName;

  evCounter.appendChild(pokemonNameElem);
  evCounter.appendChild(createStat('HP'));
  evCounter.appendChild(createStat('ATK'));
  evCounter.appendChild(createStat('DEF'));
  evCounter.appendChild(createStat('Sp ATK'));
  evCounter.appendChild(createStat('Sp DEF'));
  evCounter.appendChild(createStat('SPD'));

  document.getElementById("pokemon-evs-table").appendChild(evCounter);
};

const createStat = (name) => {
  let value = 0;

  const statCounter = document.createElement('div');
  statCounter.className = 'stat-counter';

  const nameElem = document.createElement('div');
  nameElem.className = 'stat-name';
  nameElem.innerText = name;

  const valueElem = document.createElement('div');
  valueElem.className = 'stat-value';
  valueElem.innerText = value;

  const incrementBtn = document.createElement('button');
  incrementBtn.className = 'stat-plus';
  incrementBtn.innerText = '+';
  incrementBtn.onclick = () => { valueElem.innerText = ++value };

  const decrementBtn = document.createElement('button');
  decrementBtn.className = 'stat-minus';
  decrementBtn.innerText = '-';
  decrementBtn.onclick = () => { valueElem.innerText = value > 0 ? --value : 0 };

  statCounter.appendChild(nameElem);
  statCounter.appendChild(incrementBtn);
  statCounter.appendChild(decrementBtn);
  statCounter.appendChild(valueElem);

  return statCounter;
};
