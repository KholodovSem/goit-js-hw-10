// Параметры поиска
const searchParams = new URLSearchParams({
  fields: 'name,capital,population,flags,languages',
});

export default function findCountry(countryName) {
  return fetch(
    `https://restcountries.com/v3.1/name/${countryName}?${searchParams}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
