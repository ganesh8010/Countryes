import React from 'react'
import Home from './Home'
import Contact from './Contact'
import CountryDetails from './CountryDetails'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

export default function Routess() {

    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/:country' element={<CountryDetails />} />
            <Route path='*' element={<Error />} />
        </Routes>

    )
}
