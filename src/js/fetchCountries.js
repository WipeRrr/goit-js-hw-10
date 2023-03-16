export default fetchCountries;
function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v3.1/name/';

  const searchParams = new URLSearchParams({
    fields: 'name,capital,population,flags,languages',
  });

  fetch(`${BASE_URL}${name}?${searchParams}`).then(response =>
    response
      .json()
      .then(data => data)
      .catch(error => {
        console.error(error);
      })
  );
}
