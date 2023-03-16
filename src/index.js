import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;

import fetchCountries from './js/fetchCountries'
inputEL = document.querySelector('#search-box');




inputEL.addEventListener('input', onSearch);




function onSearch(e) {
     const name = e.target.value;
     console.log(name);
     fetchCountries(name);
}