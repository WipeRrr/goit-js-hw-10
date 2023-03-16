import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import fetchCountries from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

inputEL = document.querySelector('#search-box');
listEl = document.querySelector('.country-list');
countryInfoEl = document.querySelector('.country-info');

inputEL.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  e.preventDefault();
  const name = e.target.value.trim();

  clearContainer(listEl);
  fetchCountries(name).then(renderList);
}

function renderList(data) {
  if (data.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  }
   clearContainer(countryInfoEl);
  const markupList = data
    .map(({ name, flags }) => {
      return `<li><img src="${flags.png}" alt="${flags.alt}" width="60" height="40">${name.common}</li>`;
    })
    .join('');

  listEl.insertAdjacentHTML(`beforeend`, markupList);

  if (data.length === 1) {
    clearContainer(listEl);
    clearContainer(countryInfoEl);
    const markupInfo = data
      .map(({ name, flags, population, capital, languages }) => {
        return `<h1> <img src="${flags.svg}" alt="${flags.alt}" width="100" height="60"> ${name.common} </h1>
      <p> Capital: ${capital} </P>
      <p> Population: ${population}</P>
      <p> Languages:${languages} </P>
    `;
      })
      .join('');

    countryInfoEl.insertAdjacentHTML(`beforeend`, markupInfo);
  }
}

function clearContainer(ref) {
  ref.innerHTML = '';
}
