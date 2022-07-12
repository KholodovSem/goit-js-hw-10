// Импорт
import './css/styles.css';
import findCountry from './JS/fetchCountries';
import debounce from 'lodash.debounce';
import * as markupFunctions from './JS/makeMarkup';
import Notiflix from 'notiflix';

// Ссылки на объекты DOM
const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

// Переменные
const DEBOUNCE_DELAY = 300;
const makeMarkup = markupFunctions.makeMarkup;
const makeMarkupForOnlyOneCountry = markupFunctions.makeMarkupForOnlyOneCountry;

// Слушатель событий
refs.input.addEventListener(
  'input',
  debounce(event => {
    const inputValue = event.target.value.trim();

    if (inputValue === '') {
      refs.countryList.innerHTML = '';
      return;
    }

    findCountry(inputValue)
      .then(countries => {
        if (countries.length > 10) {
          helpNotification();
        }

        if (countries.length === 1) {
          refs.countryList.innerHTML = '';
          makeMarkupForOnlyOneCountry(countries, refs.countryInfo);
          return;
        }

        makeMarkup(countries, refs.countryList);
      })
      .catch(warningNotification);
  }, DEBOUNCE_DELAY)
);

// Функции
function helpNotification() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}

function warningNotification() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
