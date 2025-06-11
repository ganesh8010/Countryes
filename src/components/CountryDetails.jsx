import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate, useLocation, useOutletContext } from 'react-router-dom';
import { ColorContext } from '../context/ThemeContext';
import Header from './Header';
import { useWindowSize } from '../hooks/utility';

export default function CountryDetails() {
    const { country } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();
    const [countryData, setCountryData] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [borderCountries, setBorderCountries] = useState([]);
    const { isDark, setIsDark } = useContext(ColorContext)
    const width = useWindowSize();

    useEffect(() => {
        if (state && Array.isArray(state) && state.length > 0) {
            setCountryData(state[0]);
            setNotFound(false);
        } else {
            // Fallback to fetching by name
            fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
                .then(res => {
                    if (!res.ok) throw new Error('Country not found');
                    return res.json();
                })
                .then(data => {
                    if (data && data.length > 0) {
                        setCountryData(data[0]);
                        setNotFound(false);
                    } else {
                        setNotFound(true);
                    }
                })
                .catch(error => {
                    console.error('Error fetching country data:', error);
                    setNotFound(true);
                });
        }
    }, [country, state]);

    useEffect(() => {
        if (countryData?.borders?.length) {
            Promise.all(
                countryData.borders.map(code =>
                    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
                        .then(res => res.json())
                        .then(data => ({
                            name: data[0].name.common,
                            code,
                        }))
                )
            ).then(setBorderCountries);
        }
    }, [countryData]);

    if (notFound) return <div>Country Not Found</div>;
    if (!countryData) return <div>Loading…</div>;

    return (
        <>
            <Header />
            <h1 style={{ textAlign: 'center' }}>{width.width1} x {width.height}</h1>
            <main className={isDark ? "dark" : ""} style={{ height: '100vh' }}>
                <div className="country-details-container">
                    <button onClick={() => navigate(-1)} className={`back-button  ${isDark ? "dark" : ""}`}>
                        <i className="fa-solid fa-arrow-left"></i> Back
                    </button>

                    <div className="country-details">
                        <img src={countryData.flags.png} alt={`${countryData.name.common} flag`} />
                        <div className="details-text-container">
                            <h1>{countryData.name.common}</h1>
                            <div className="details-text">
                                <p><b>Native Name: </b>{Object.values(countryData.name.nativeName || {})[0]?.common}</p>
                                <p><b>Population: </b>{countryData.population.toLocaleString()}</p>
                                <p><b>Region: </b>{countryData.region}</p>
                                <p><b>Sub Region: </b>{countryData.subregion}</p>
                                <p><b>Capital: </b>{countryData.capital?.join(', ')}</p>
                                <p><b>Top Level Domain: </b>{countryData.tld?.join(', ')}</p>
                                <p><b>Languages: </b>{Object.values(countryData.languages || {}).join(', ')}</p>
                                <p><b>Currencies: </b>{Object.values(countryData.currencies || {}).map(c => c.name).join(', ')}</p>
                            </div>

                            {borderCountries.length > 0 && (
                                <div className="borders" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    <b>Borders:</b>
                                    {borderCountries.map(({ name, code }) => (
                                        <Link key={code} to={`/${name}`} className="border-link">
                                            {name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
