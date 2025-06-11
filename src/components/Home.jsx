import SelectMenu from '../components/SelectMenu'
import SearchBar from '../components/SearchBar'
import Header from '../components/Header'
import CountriesList from '../components/CountriesList'
import { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ColorContext } from '../context/ThemeContext'
import { useWindowSize } from '../hooks/utility'

function Home() {
    const { isDark, setIsDark } = useContext(ColorContext)
    // const a = useContext(themContext);
    // console.log(a);

    const [query, setQuery] = useState('');
    const [menuBar, setMenuBar] = useState('');
    const width = useWindowSize();
    return (
        <>
            <Header theme={[isDark, setIsDark]} />

            <main className={isDark ? "dark" : ""}>
                <div className='search-filter-container'>
                    <SearchBar setQuery={setQuery} />
                    <SelectMenu setMenuBar={setMenuBar} />
                </div>
                <h1 style={{ textAlign: 'center' }}>{width.width1} x {width.height}</h1>
                <CountriesList query={query} menuBar={menuBar} context={[isDark, setIsDark]} /> {/* <-- Fixed line */}
            </main>
        </>
    )
}

export default Home;
