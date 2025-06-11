import React from 'react'

function SelectMenu({ setMenuBar }) {
    return (
        <div>
            <select onChange={(e) => setMenuBar(e.target.value.toLowerCase())} className="filter-by-region">
                <option hidden>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}
export default SelectMenu
