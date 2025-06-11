import { useMemo } from 'react';

function useFilteredCountries(countriesData, query, menuBar) {
    return useMemo(() => {
        return countriesData.filter((country) =>
            country.name.common.toLowerCase().includes(query.toLowerCase()) &&
            (menuBar === '' || country.region.toLowerCase().includes(menuBar))
        );
    }, [countriesData, query, menuBar]);
}

export default useFilteredCountries;
