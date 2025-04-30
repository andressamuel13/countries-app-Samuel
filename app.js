import { countries } from './countries.js';

const container = document.querySelector('.country-card');
const searchInput = document.getElementById('search-input');

function renderCountries(filteredCountries) {
  container.innerHTML = '';

  if (filteredCountries.length === 0) {
    container.innerHTML = '<p>No countries found.</p>';
    return;
  }

  filteredCountries.forEach(({ country, capital, population }) => {
    const div = document.createElement('div');
    div.className = 'country';
    div.innerHTML = `
      <h2>${country}</h2>
      <p>Capital: ${capital}</p>
      <p>Population: ${population.toLocaleString()}</p>`;
    container.appendChild(div);
  });
}

renderCountries(countries);

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = countries.filter(({ country }) =>
    country.toLowerCase().includes(query)
  );
  renderCountries(filtered);
});

