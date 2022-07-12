function makeMarkup(countries, elementOfDOM) {
  const countriesListMarkup = countries
    .map(({ name, flags }) => {
      return `<li class="country-list__item"><img src="${flags.svg}" width="40" heigth="40"/><p class="country-list__text">${name.common}</p></li>`;
    })
    .join('');

  elementOfDOM.innerHTML = countriesListMarkup;
}

// флаг, название, столица, население и языки.

function makeMarkupForOnlyOneCountry(country, elementOfDOM) {
  const countryCardMarkup = country
    .map(({ name, flags, capital, population, languages }) => {
      return `<li class="country-list__item single-card"><div class="wrapper"><img src="${
        flags.svg
      }" width="40" heigth="40"/><p class="country-list__text single-card">${
        name.common
      }</p></div><p class="country-info"><b class="header">Capital:</b>${capital}</p><p class="country-info"><b class="header">Population:</b>${population}</p><p class="country-info"><b class="header">Languages:</b>${Object.values(
        languages
      ).join(', ')}</p></li>`;
    })
    .join('');

  elementOfDOM.innerHTML = countryCardMarkup;
}

export { makeMarkup, makeMarkupForOnlyOneCountry };
