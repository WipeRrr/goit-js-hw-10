import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;

import fetchCountries from './js/fetchCountries';
inputEL = document.querySelector('#search-box');
listEl = document.querySelector('.country-list');

inputEL.addEventListener('input', onSearch);

function onSearch(e) {
  e.preventDefault();
  const name = e.target.value;
  fetchCountries(name).then(data => renderArticles(data));
}

function renderArticles(data) {
  const markup = data
    .map(({ name, flags }) => {
      return `<li><img src="${flags.png}" alt="${name.official}" width="60" height="40">${name.common}</li>`;
    })
    .join('');

  return listEl.insertAdjacentHTML(`beforeend`, markup);
}
