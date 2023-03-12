import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
const DEBOUNCE_DELAY = 300;

Notiflix.Loading.hourglass();
console.log(fetch(`
https://restcountries.com/v3.1/name/peru`));
