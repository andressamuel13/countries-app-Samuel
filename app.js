import { countries } from './countries.js'

const container = document.querySelector('.country-card');

countries.map(({ country, capital }) => {
  const div = document.createElement('div');
  div.className = 'country';
  div.innerHTML = `<h2>${country}</h2><p>Capital: ${capital}</p>`;
  container.appendChild(div);
});

