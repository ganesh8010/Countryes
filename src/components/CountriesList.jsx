import React, { useEffect, useState } from 'react';
import CountriesCard from './CountryCard';
import useFilteredCountries from '../hooks/dataFilter';
import allCountriesData from '../countriesData'; // ✅ Rename the import to avoid name clash

function CountriesList({ query, menuBar }) {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    // ✅ Load data from local file instead of API
    if (Array.isArray(allCountriesData)) {
      setCountriesData(allCountriesData);
    } else {
      console.error('Data is not an array:', allCountriesData);
    }
  }, []);

  const filtered = useFilteredCountries(countriesData, query, menuBar); // ✅ Use different variable name

  return (
    <div className="countries-container">
      {filtered.map((country, i) => (
        <CountriesCard
          key={i}
          name={country.name.common}
          flag={country.flags.svg}
          population={country.population.toLocaleString('en-IN')}
          region={country.region}
          capital={country.capital?.[0] || 'N/A'}
          data={country}
        />
      ))}
    </div>
  );
}

export default CountriesList;



























// this code fetch API then resould show




// import React, { useEffect, useState } from 'react';
// import CountriesCard from './CountryCard';
// import useFilteredCountries from '../hooks/dataFilter';


// function CountriesList({ query, menuBar }) {
//   const [countriesData, setCountriesData] = useState([]);

//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setCountriesData(data);
//         } else {
//           console.error('Data is not an array:', data);
//           setCountriesData([]);
//         }
//       })
//       .catch((error) => {
//         console.error('Fetch error:', error);
//         setCountriesData([]);
//       });
//   }, []);

//   const filteredCountries = useFilteredCountries(countriesData, query, menuBar);

//   return (
//     <div className="countries-container">
//       {filteredCountries.map((country, i) => (
//         <CountriesCard
//           key={i}
//           name={country.name.common}
//           flag={country.flags.svg}
//           population={country.population.toLocaleString('en-IN')}
//           region={country.region}
//           capital={country.capital?.[0] || 'N/A'}
//           data={country}
//         />
//       ))}
//     </div>
//   );
// }

// export default CountriesList;
